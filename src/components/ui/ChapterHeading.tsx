"use client";

import { motion } from "framer-motion";
import { springConfigs } from "@/lib/animations";

interface ChapterHeadingProps {
  /** チャプター番号やラベル (Caveat手書き風) */
  chapter?: string;
  /** 英語大見出し (Fraunces, 超大型) */
  titleEn: string;
  /** 日本語タイトル (Dela Gothic One) */
  titleJp?: string;
  /** サブタイトル (Zen Maru Gothic) */
  subtitle?: string;
  /** 配置 */
  align?: "left" | "center";
  /** ライトテーマ（ダーク背景用） */
  light?: boolean;
}

/**
 * チャプターヘッディング
 * EN大タイトル → JP中タイトル → サブタイトル の階層構造
 * 手書きチャプター番号が個性を演出
 */
export function ChapterHeading({
  chapter,
  titleEn,
  titleJp,
  subtitle,
  align = "left",
  light = false,
}: ChapterHeadingProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";
  const textColor = light ? "text-[var(--color-paper)]" : "text-cocoa";
  const subColor = light ? "text-[var(--color-cocoa-muted)]" : "text-cocoa-sub";

  return (
    <div className={`mb-8 md:mb-12 ${alignClass}`}>
      {chapter && (
        <motion.span
          className={`font-handwritten text-lg md:text-xl text-gold inline-block mb-2`}
          initial={{ opacity: 0, x: -20, rotate: -3 }}
          whileInView={{ opacity: 1, x: 0, rotate: -2 }}
          viewport={{ once: true }}
          transition={springConfigs.floaty}
        >
          {chapter}
        </motion.span>
      )}
      <motion.h2
        className={`font-display-en font-black leading-[0.9] tracking-tight ${textColor}`}
        style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
      >
        {titleEn}
      </motion.h2>
      {titleJp && (
        <motion.p
          className={`font-display-jp mt-2 md:mt-3 ${textColor}`}
          style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
        >
          {titleJp}
        </motion.p>
      )}
      {subtitle && (
        <motion.p
          className={`mt-3 md:mt-4 text-base md:text-lg leading-relaxed max-w-2xl ${subColor} ${
            align === "center" ? "mx-auto" : ""
          }`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
