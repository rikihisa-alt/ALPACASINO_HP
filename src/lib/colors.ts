/**
 * アルパカジノ カラーパレット
 * ポップで可愛い × カジノの高級感を両立させた配色
 */
export const colors = {
  /** メインカラー — あたたかみのあるコーラルピンク */
  primary: "#FF6B8A",
  primaryLight: "#FF8FA8",
  primaryDark: "#E5456A",

  /** サブカラー — 深みのあるネイビー（カジノらしさ） */
  secondary: "#1B2A4A",
  secondaryLight: "#2D4066",
  secondaryDark: "#111D35",

  /** アクセント — ゴールド（チップ・高級感） */
  accent: "#F5C842",
  accentLight: "#FFD966",
  accentDark: "#D4A832",

  /** 背景色 */
  bgLight: "#FFF8F0",
  bgCream: "#FFF3E8",
  bgDark: "#1B2A4A",

  /** テキスト */
  textPrimary: "#2D2D2D",
  textSecondary: "#666666",
  textLight: "#FFFFFF",
  textMuted: "#999999",

  /** トランプスーツ */
  suitRed: "#E5456A",
  suitBlack: "#1B2A4A",

  /** ステータス */
  success: "#4CAF50",
  warning: "#FF9800",
  error: "#F44336",
  info: "#2196F3",
} as const;

export type ColorKey = keyof typeof colors;
