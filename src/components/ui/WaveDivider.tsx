"use client";

import { motion } from "framer-motion";
import { useScrollProgress } from "@/hooks/useScrollProgress";

type DividerVariant = "wave" | "tornPaper" | "suitBorder";

interface WaveDividerProps {
  variant?: DividerVariant;
  fillColor?: string;
  bgColor?: string;
  flip?: boolean;
  animate?: boolean;
}

export function WaveDivider({
  variant = "wave",
  fillColor = "var(--color-paper)",
  bgColor = "transparent",
  flip = false,
  animate = true,
}: WaveDividerProps) {
  const { ref, progress } = useScrollProgress(["start end", "end end"]);

  const paths: Record<DividerVariant, string> = {
    wave: "M0,64 C150,100 350,0 500,64 C650,128 850,28 1000,64 L1000,0 L0,0 Z",
    tornPaper:
      "M0,40 L50,55 L100,35 L150,60 L200,30 L250,50 L300,42 L350,58 L400,25 L450,55 L500,38 L550,52 L600,32 L650,48 L700,55 L750,30 L800,50 L850,35 L900,58 L950,40 L1000,45 L1000,0 L0,0 Z",
    suitBorder:
      "M0,50 Q50,20 100,50 Q150,80 200,50 Q250,20 300,50 Q350,80 400,50 Q450,20 500,50 Q550,80 600,50 Q650,20 700,50 Q750,80 800,50 Q850,20 900,50 Q950,80 1000,50 L1000,0 L0,0 Z",
  };

  return (
    <div
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{
        marginTop: "-1px",
        backgroundColor: bgColor,
        transform: flip ? "scaleY(-1)" : undefined,
      }}
    >
      <motion.svg
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        className="block w-full"
        style={{ height: "clamp(40px, 6vw, 80px)" }}
        initial={animate ? { pathLength: 0 } : undefined}
      >
        <motion.path
          d={paths[variant]}
          fill={fillColor}
          style={
            animate
              ? {
                  pathLength: progress,
                }
              : undefined
          }
        />
      </motion.svg>
    </div>
  );
}
