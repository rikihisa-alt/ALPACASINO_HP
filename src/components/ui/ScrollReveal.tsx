"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";
import { revealVariants } from "@/lib/animations";

type RevealType = keyof typeof revealVariants;

interface ScrollRevealProps {
  children: ReactNode;
  type?: RevealType;
  className?: string;
  delay?: number;
  /** カスタムビューポートマージン */
  margin?: string;
}

/**
 * スクロール連動リビール
 * 単純なfade/slideではなく、clip-path展開・スケール・回転などを使う
 */
export function ScrollReveal({
  children,
  type = "riseUp",
  className = "",
  delay = 0,
  margin = "-80px",
}: ScrollRevealProps) {
  const baseVariant = revealVariants[type];

  const variants: Variants = {
    hidden: baseVariant.hidden,
    visible: {
      ...baseVariant.visible,
      transition: {
        ...baseVariant.visible.transition,
        delay,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin }}
    >
      {children}
    </motion.div>
  );
}
