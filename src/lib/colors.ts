/**
 * アルパカジノ カラーパレット — "Storybook Casino"
 * 絵本のような暖かみ × カジノの深み
 */
export const colors = {
  /** メイン背景 — 絵本の紙のようなクリーム */
  cream: "#F2E6D0",
  /** 明るい紙 */
  paper: "#FAF5ED",
  /** 中間の紙 */
  paperMid: "#EDE3D3",

  /** 深い色 — ミッドナイトグリーン（カジノの夜） */
  deep: "#1A3A3A",
  deepLight: "#244848",
  deepDark: "#122C2C",

  /** アクセント — テラコッタローズ（CTA・エネルギー） */
  rose: "#D4654A",
  roseLight: "#E07D65",
  roseDark: "#B8523B",

  /** ハイライト — アンティークゴールド（チップ・装飾） */
  gold: "#C9A84C",
  goldLight: "#D9BE6E",
  goldDark: "#A88B3A",

  /** テキスト — ココア（暖かみのあるダーク） */
  cocoa: "#2A1F1A",
  cocoaSub: "#6B5E52",
  cocoaMuted: "#9C8E80",

  /** テキスト白 */
  textLight: "#FAF5ED",

  /** トランプスーツ */
  suitRed: "#D4654A",
  suitBlack: "#1A3A3A",

  /** LINE */
  line: "#06C755",
} as const;

export type ColorKey = keyof typeof colors;
