"use client";

import { type ReactNode } from "react";

type LayoutVariant =
  | "textLeft"
  | "textRight"
  | "fullWidth"
  | "staggered"
  | "scattered"
  | "centered";

type BgVariant = "paper" | "cream" | "dark" | "mid";

interface StorySectionProps {
  children: ReactNode;
  layout?: LayoutVariant;
  bg?: BgVariant;
  className?: string;
  id?: string;
}

const bgClasses: Record<BgVariant, string> = {
  paper: "bg-paper",
  cream: "bg-cream",
  dark: "bg-deep text-[var(--color-paper)]",
  mid: "bg-paper-mid",
};

const layoutClasses: Record<LayoutVariant, string> = {
  textLeft: "grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 lg:gap-16 items-center",
  textRight: "grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8 lg:gap-16 items-center",
  fullWidth: "flex flex-col",
  staggered: "flex flex-col gap-12 lg:gap-20",
  scattered: "relative min-h-[600px]",
  centered: "flex flex-col items-center text-center max-w-3xl mx-auto",
};

/**
 * ストーリーセクション — 非均一レイアウトラッパー
 * 各インスタンスで異なるlayoutプロップを使い、均一グリッドを回避する
 */
export function StorySection({
  children,
  layout = "fullWidth",
  bg = "paper",
  className = "",
  id,
}: StorySectionProps) {
  return (
    <section
      id={id}
      className={`relative py-16 md:py-24 lg:py-32 overflow-hidden paper-texture ${bgClasses[bg]} ${className}`}
    >
      <div
        className={`mx-auto max-w-6xl px-5 md:px-8 ${layoutClasses[layout]}`}
      >
        {children}
      </div>
    </section>
  );
}
