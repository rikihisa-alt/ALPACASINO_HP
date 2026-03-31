"use client";

import { useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

interface ParallaxOptions {
  speed?: number;
  offset?: [string, string];
}

interface ParallaxResult {
  ref: React.RefObject<HTMLDivElement | null>;
  y: MotionValue<number>;
  opacity?: MotionValue<number>;
}

/**
 * パララックススクロールフック
 * speed: 正の値で上方向に遅く、負の値で下方向に遅く動く
 */
export function useParallax({
  speed = 0.5,
  offset = ["start end", "end start"],
}: ParallaxOptions = {}): ParallaxResult {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as ["start end", "end start"],
  });

  const distance = speed * 100;
  const y = useTransform(scrollYProgress, [0, 1], [-distance, distance]);

  return { ref, y };
}

/**
 * パララックスレイヤー用 - 個別レイヤーの変換値を取得
 * 各レイヤーごとにこのフックを呼び出す
 */
export function useParallaxLayer(
  scrollYProgress: MotionValue<number>,
  speed: number
): MotionValue<number> {
  const distance = speed * 200;
  return useTransform(scrollYProgress, [0, 1], [0, -distance]);
}
