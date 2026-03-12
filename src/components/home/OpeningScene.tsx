"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CursorFollower } from "@/components/ui/CursorFollower";

const cursorElements = [
  { content: "♠", speed: 30, offset: { x: 60, y: 40 }, size: 20, rotate: -15 },
  { content: "♥", speed: 20, offset: { x: -80, y: 60 }, size: 16, rotate: 10 },
  { content: "♦", speed: 40, offset: { x: 40, y: -60 }, size: 14, rotate: 25 },
  { content: "♣", speed: 25, offset: { x: -50, y: -40 }, size: 18, rotate: -20 },
];

/**
 * オープニングシーン — 全画面パララックス絵本世界
 * ユーザーが最初に見る「世界観」を作る章
 */
export function OpeningScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // パララックスレイヤーの動き
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const midY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const fgY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const titleScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.85]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[600px] overflow-hidden bg-cream"
    >
      {/* Layer 0: 背景グラデーション（最も遅い） */}
      <motion.div
        className="absolute inset-0"
        style={{ y: bgY }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#F7E8C8] via-cream to-paper-mid" />
        {/* 装飾: 遠景の星とスーツ */}
        <div className="absolute inset-0 opacity-[0.06]">
          {["♠", "♥", "♦", "♣", "♠", "♥", "♦", "♣", "♠", "♥"].map((suit, i) => (
            <motion.span
              key={i}
              className="absolute"
              style={{
                left: `${10 + i * 9}%`,
                top: `${15 + (i % 3) * 25}%`,
                fontSize: 12 + (i % 4) * 6,
                color: suit === "♥" || suit === "♦" ? "var(--color-rose)" : "var(--color-deep)",
              }}
              animate={{
                y: [0, -8, 0],
                rotate: [0, (i % 2 === 0 ? 5 : -5), 0],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut" as const,
              }}
            >
              {suit}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Layer 1: 中間装飾 (チップ/カード) */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: midY }}
        aria-hidden="true"
      >
        {/* 左のカード */}
        <motion.div
          className="absolute left-[8%] top-[25%] text-6xl md:text-8xl opacity-10 text-deep"
          animate={{ rotate: [-5, -8, -5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" as const }}
        >
          🂡
        </motion.div>
        {/* 右のチップ風円 */}
        <motion.div
          className="absolute right-[10%] top-[35%] w-16 h-16 md:w-24 md:h-24 rounded-full border-4 border-gold opacity-10"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" as const }}
        />
        {/* 左下の装飾 */}
        <motion.div
          className="absolute left-[15%] bottom-[20%] text-4xl opacity-10 text-rose"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" as const }}
        >
          ♥
        </motion.div>
      </motion.div>

      {/* Layer 2: メインテキスト（前景） */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center px-6"
        style={{ y: fgY, scale: titleScale, opacity: titleOpacity }}
      >
        <motion.span
          className="font-handwritten text-gold text-lg md:text-xl mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Welcome to the storybook casino
        </motion.span>

        <motion.h1
          className="font-display-en font-black text-deep text-center leading-[0.85] tracking-tight"
          style={{ fontSize: "clamp(3rem, 12vw, 9rem)" }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
        >
          ALPA
          <br />
          CASINO
        </motion.h1>

        <motion.p
          className="font-display-jp text-cocoa mt-4 md:mt-6"
          style={{ fontSize: "clamp(1rem, 2.5vw, 1.5rem)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          大阪・心斎橋のアミューズメントカジノ
        </motion.p>

        <motion.p
          className="text-cocoa-sub text-sm md:text-base mt-3 max-w-md text-center leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          ポーカーが初めてでも大丈夫。
          <br className="hidden md:inline" />
          絵本のようなあたたかい空間で、気軽に遊べるお店です。
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="font-handwritten text-sm text-cocoa-muted">
          scroll
        </span>
        <motion.svg
          width="20"
          height="30"
          viewBox="0 0 20 30"
          className="text-cocoa-muted"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" as const }}
        >
          <motion.path
            d="M10 5 L10 20 M5 16 L10 22 L15 16"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          />
        </motion.svg>
      </motion.div>

      {/* Cursor follower (desktop only) */}
      <CursorFollower elements={cursorElements} />
    </section>
  );
}
