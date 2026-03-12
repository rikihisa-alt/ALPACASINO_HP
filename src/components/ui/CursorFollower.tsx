"use client";

import { motion, useTransform } from "framer-motion";
import { useCursorPosition } from "@/hooks/useCursorPosition";
import { useEffect, useState } from "react";

interface FollowerElement {
  content: string;
  speed: number;
  offset: { x: number; y: number };
  size?: number;
  rotate?: number;
}

interface CursorFollowerProps {
  elements: FollowerElement[];
}

/**
 * カーソル追従装飾
 * デスクトップのみ。カードスーツやチップがカーソルに追従する。
 * 各要素は異なるspeed（Spring stiffness）で動き、奥行きを演出。
 */
export function CursorFollower({ elements }: CursorFollowerProps) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => {
      const isTouchDevice =
        "ontouchstart" in window || navigator.maxTouchPoints > 0;
      setIsDesktop(!isTouchDevice && window.innerWidth >= 1024);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (!isDesktop) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-50"
      aria-hidden="true"
    >
      {elements.map((el, i) => (
        <FollowerItem key={i} element={el} />
      ))}
    </div>
  );
}

function FollowerItem({ element }: { element: FollowerElement }) {
  const { x, y } = useCursorPosition({
    stiffness: element.speed,
    damping: 20 + element.speed * 0.1,
  });

  const adjustedX = useTransform(x, (v) => v + element.offset.x);
  const adjustedY = useTransform(y, (v) => v + element.offset.y);

  return (
    <motion.div
      className="absolute opacity-20"
      style={{
        x: adjustedX,
        y: adjustedY,
        fontSize: element.size ?? 24,
        rotate: element.rotate ?? 0,
      }}
    >
      {element.content}
    </motion.div>
  );
}
