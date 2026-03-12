"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { springConfigs, hoverEffects } from "@/lib/animations";

type CardVariant = "tilted" | "torn" | "stacked" | "polaroid" | "plain";

interface ContentCardProps {
  children: ReactNode;
  variant?: CardVariant;
  /** 傾き角度 (tilted用) */
  tiltDegree?: number;
  className?: string;
  delay?: number;
}

const variantBase: Record<CardVariant, string> = {
  tilted: "bg-paper p-6 md:p-8",
  torn: "bg-paper p-6 md:p-8",
  stacked: "bg-paper p-6 md:p-8 relative",
  polaroid: "bg-white p-3 pb-12 shadow-md",
  plain: "p-6 md:p-8",
};

/**
 * コンテンツカード — 多バリアント
 * 同じカードUIを並べることを禁止するため、異なるvariantを使い分ける
 * tilted: 傾いて置かれたカード（ホバーで水平に）
 * torn: 破れた紙の端
 * stacked: 重なった紙
 * polaroid: ポラロイド写真風
 * plain: 装飾なし
 */
export function ContentCard({
  children,
  variant = "tilted",
  tiltDegree = -2,
  className = "",
  delay = 0,
}: ContentCardProps) {
  const tornClipPath =
    "polygon(0 0, 100% 0, 100% calc(100% - 8px), 95% 100%, 90% calc(100% - 4px), 85% 100%, 80% calc(100% - 6px), 75% calc(100% - 2px), 70% 100%, 65% calc(100% - 5px), 60% 100%, 55% calc(100% - 3px), 50% 100%, 45% calc(100% - 6px), 40% 100%, 35% calc(100% - 4px), 30% calc(100% - 2px), 25% 100%, 20% calc(100% - 5px), 15% 100%, 10% calc(100% - 3px), 5% 100%, 0 calc(100% - 6px))";

  return (
    <motion.div
      className={`${variantBase[variant]} ${className}`}
      style={{
        rotate: variant === "tilted" ? tiltDegree : 0,
        clipPath: variant === "torn" ? tornClipPath : undefined,
        borderRadius:
          variant === "polaroid"
            ? "4px"
            : variant === "plain"
            ? undefined
            : "12px 20px 16px 24px",
      }}
      initial={{
        opacity: 0,
        y: 40,
        rotate: variant === "tilted" ? tiltDegree + 5 : 0,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotate: variant === "tilted" ? tiltDegree : 0,
      }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        delay,
        ...springConfigs.gentle,
      }}
      whileHover={
        variant === "tilted"
          ? hoverEffects.levelOut
          : variant === "plain"
          ? undefined
          : hoverEffects.lift
      }
    >
      {/* Stacked variant: 重なり紙の影 */}
      {variant === "stacked" && (
        <>
          <div
            className="absolute inset-0 bg-paper-mid -z-10"
            style={{
              transform: "rotate(2deg) translate(4px, 4px)",
              borderRadius: "12px 20px 16px 24px",
            }}
          />
          <div
            className="absolute inset-0 bg-cream -z-20"
            style={{
              transform: "rotate(-1.5deg) translate(-3px, 6px)",
              borderRadius: "12px 20px 16px 24px",
            }}
          />
        </>
      )}
      {children}
    </motion.div>
  );
}
