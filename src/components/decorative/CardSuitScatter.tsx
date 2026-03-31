"use client";

import { motion } from "framer-motion";
import { useParallax } from "@/hooks/useParallax";
import { springConfigs, exponentialStagger } from "@/lib/animations";

interface ScatterItem {
  content: string;
  x: string;
  y: string;
  size: number;
  rotate: number;
  parallaxSpeed: number;
  opacity?: number;
}

interface CardSuitScatterProps {
  /** カスタムアイテム配置。省略時はデフォルト配置 */
  items?: ScatterItem[];
  className?: string;
}

const defaultItems: ScatterItem[] = [
  { content: "♠", x: "8%", y: "15%", size: 32, rotate: -15, parallaxSpeed: 0.3, opacity: 0.12 },
  { content: "♥", x: "85%", y: "25%", size: 24, rotate: 20, parallaxSpeed: 0.5, opacity: 0.15 },
  { content: "♦", x: "72%", y: "70%", size: 28, rotate: -8, parallaxSpeed: 0.2, opacity: 0.1 },
  { content: "♣", x: "15%", y: "80%", size: 20, rotate: 35, parallaxSpeed: 0.4, opacity: 0.13 },
  { content: "♠", x: "55%", y: "10%", size: 18, rotate: 45, parallaxSpeed: 0.6, opacity: 0.08 },
  { content: "♥", x: "35%", y: "90%", size: 22, rotate: -25, parallaxSpeed: 0.35, opacity: 0.11 },
  { content: "♦", x: "92%", y: "55%", size: 26, rotate: 12, parallaxSpeed: 0.45, opacity: 0.09 },
];

/**
 * カードスーツ散布装飾
 * 各スーツが独立したパララックス速度と回転を持つ
 */
export function CardSuitScatter({
  items = defaultItems,
  className = "",
}: CardSuitScatterProps) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {items.map((item, i) => (
        <ScatterElement key={i} item={item} index={i} />
      ))}
    </div>
  );
}

function ScatterElement({ item, index }: { item: ScatterItem; index: number }) {
  const { ref, y } = useParallax({ speed: item.parallaxSpeed });
  const delay = exponentialStagger(index, 0.1);

  return (
    <motion.div
      ref={ref}
      className="absolute"
      style={{
        left: item.x,
        top: item.y,
        fontSize: item.size,
        y,
        color:
          item.content === "♥" || item.content === "♦"
            ? "var(--color-rose)"
            : "var(--color-deep)",
        opacity: item.opacity ?? 0.12,
      }}
      initial={{ opacity: 0, scale: 0, rotate: item.rotate + 90 }}
      whileInView={{
        opacity: item.opacity ?? 0.12,
        scale: 1,
        rotate: item.rotate,
      }}
      viewport={{ once: true }}
      transition={{ delay, ...springConfigs.floaty }}
    >
      {item.content}
    </motion.div>
  );
}
