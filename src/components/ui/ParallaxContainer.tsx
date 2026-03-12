"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface ParallaxLayer {
  content: ReactNode;
  speed: number;
  zIndex?: number;
  className?: string;
}

interface ParallaxContainerProps {
  layers: ParallaxLayer[];
  className?: string;
  height?: string;
}

/**
 * 多層パララックスコンテナ
 * 各レイヤーが異なる速度でスクロールに反応し、奥行きを作る
 */
export function ParallaxContainer({
  layers,
  className = "",
  height = "100vh",
}: ParallaxContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{ height }}
    >
      {layers.map((layer, i) => (
        <ParallaxLayer
          key={i}
          speed={layer.speed}
          zIndex={layer.zIndex ?? i}
          className={layer.className}
          scrollProgress={scrollYProgress}
        >
          {layer.content}
        </ParallaxLayer>
      ))}
    </div>
  );
}

interface ParallaxLayerInternalProps {
  children: ReactNode;
  speed: number;
  zIndex: number;
  className?: string;
  scrollProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}

function ParallaxLayer({
  children,
  speed,
  zIndex,
  className = "",
  scrollProgress,
}: ParallaxLayerInternalProps) {
  const y = useTransform(scrollProgress, [0, 1], [0, speed * -200]);

  return (
    <motion.div
      className={`absolute inset-0 ${className}`}
      style={{ y, zIndex }}
      aria-hidden={zIndex < 5}
    >
      {children}
    </motion.div>
  );
}
