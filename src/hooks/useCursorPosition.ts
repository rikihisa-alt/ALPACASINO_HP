"use client";

import { useMotionValue, useSpring, type MotionValue } from "framer-motion";
import { useEffect } from "react";

interface CursorPosition {
  x: MotionValue<number>;
  y: MotionValue<number>;
}

interface CursorOptions {
  stiffness?: number;
  damping?: number;
  mass?: number;
}

/**
 * カーソル位置追跡フック（Spring物理付き）
 * デスクトップのみ。装飾要素のカーソル追従に使用。
 */
export function useCursorPosition({
  stiffness = 50,
  damping = 20,
  mass = 0.5,
}: CursorOptions = {}): CursorPosition {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { stiffness, damping, mass };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY]);

  return { x, y };
}
