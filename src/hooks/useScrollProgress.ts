"use client";

import { useScroll, type MotionValue } from "framer-motion";
import { useRef } from "react";

interface ScrollProgressResult {
  ref: React.RefObject<HTMLDivElement | null>;
  progress: MotionValue<number>;
}

/**
 * セクション内スクロール進捗フック
 * セクションがビューポートに入ってから出るまでの0〜1の進捗を返す
 */
export function useScrollProgress(
  offset: [string, string] = ["start end", "end start"]
): ScrollProgressResult {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress: progress } = useScroll({
    target: ref,
    offset: offset as ["start end", "end start"],
  });

  return { ref, progress };
}
