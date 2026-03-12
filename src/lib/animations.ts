/**
 * アニメーション設計 — Storybook Casino
 * 単純なfade/slideは禁止。物理ベース・スクロール連動・カーソル反応を使う。
 */

/** Spring設定 — 要素タイプごとに異なる物理挙動 */
export const springConfigs = {
  /** ボタン — キビキビ */
  snappy: { type: "spring" as const, stiffness: 400, damping: 25 },
  /** カード — しなやか */
  gentle: { type: "spring" as const, stiffness: 200, damping: 30 },
  /** 装飾 — ふわふわ */
  floaty: { type: "spring" as const, stiffness: 100, damping: 15 },
  /** バウンス */
  bouncy: { type: "spring" as const, stiffness: 300, damping: 10 },
} as const;

/**
 * 非均一スタッガー遅延を生成
 * 指数関数的に遅延が増加し、自然な動きに
 */
export function exponentialStagger(index: number, base: number = 0.08): number {
  return base * Math.pow(1.3, index);
}

/**
 * スクロール連動リビール バリアント
 * 各セクションで異なるrevealTypeを使う
 */
export const revealVariants = {
  /** 円形クリップ展開 */
  clipCircle: {
    hidden: { clipPath: "circle(0% at 50% 50%)" },
    visible: {
      clipPath: "circle(75% at 50% 50%)",
      transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] as const },
    },
  },
  /** 左からワイプ */
  clipWipe: {
    hidden: { clipPath: "inset(0 100% 0 0)" },
    visible: {
      clipPath: "inset(0 0% 0 0)",
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
    },
  },
  /** コーナーからスケール */
  scaleFromCorner: {
    hidden: { scale: 0, opacity: 0, originX: 0, originY: 1 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { ...springConfigs.gentle, delay: 0.1 },
    },
  },
  /** 回転して登場 */
  rotateIn: {
    hidden: { rotate: -8, opacity: 0, y: 60 },
    visible: {
      rotate: 0,
      opacity: 1,
      y: 0,
      transition: { ...springConfigs.gentle },
    },
  },
  /** 下からぬるっと */
  riseUp: {
    hidden: { y: 80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  },
  /** スケール＋回転（カードが置かれる感じ） */
  dealCard: {
    hidden: { scale: 0.3, rotate: 15, opacity: 0, y: -100 },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      y: 0,
      transition: { ...springConfigs.bouncy },
    },
  },
} as const;

/** ホバー効果 — 要素タイプごとに異なる反応 */
export const hoverEffects = {
  /** ボタン — 持ち上がり＋影拡大 */
  lift: {
    y: -4,
    scale: 1.03,
    transition: springConfigs.snappy,
  },
  /** カード — 傾き修正＋浮き上がり */
  levelOut: {
    rotate: 0,
    y: -8,
    scale: 1.02,
    transition: springConfigs.gentle,
  },
  /** 画像 — 少し拡大 */
  grow: {
    scale: 1.05,
    transition: springConfigs.gentle,
  },
  /** テキストリンク — 色変化のみ（motion不要、CSS推奨） */
} as const;

/** コンテナ用スタッガーバリアント */
export function createStaggerContainer(delayChildren: number = 0.2) {
  return {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren,
        staggerChildren: 0.12,
      },
    },
  } as const;
}
