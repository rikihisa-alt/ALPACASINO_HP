---
name: feature-build
description: アルパカジノHPのページ・コンポーネント・機能を実装する。「〇〇ページを作って」「〇〇コンポーネントを実装して」「アニメーションを追加して」「フォームを作って」と言ったときに使う。Next.js + TypeScript + Framer Motion 前提。
---

# Feature Build — アルパカジノHP

## 実装前に必ずやること
1. CLAUDE.md の Design Rules・Animation Rules・Coding Rules を確認する
2. 既存の類似コンポーネントが src/components/ にないか確認する
3. 実装方針を説明してから着手する（推測で作り始めない）

## コンポーネントの置き場所

src/components/ui/        汎用パーツ（Button, Card, Badge など）
src/components/sections/  セクション単位（Hero, Pricing など）
src/components/layout/    Header, Footer, Navigation
src/features/             機能を持つもの（フォームなど）
src/app/[path]/page.tsx   ページ本体（薄く保つ）

## アニメーション実装パターン

### stagger reveal（ページロード）

```tsx
"use client"
import { motion } from "framer-motion"

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
}

<motion.div variants={container} initial="hidden" animate="show">
  <motion.div variants={item}>コンテンツ1</motion.div>
  <motion.div variants={item}>コンテンツ2</motion.div>
</motion.div>
```

### スクロールトリガー

```tsx
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-80px" }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
  コンテンツ
</motion.div>
```

### ホバー（カード）

```tsx
<motion.div
  whileHover={{ scale: 1.03, y: -4 }}
  transition={{ type: "spring", stiffness: 300, damping: 20 }}
>
  カード
</motion.div>
```

### フローティング装飾（トランプマーク）

```tsx
"use client"
import { motion } from "framer-motion"

const suits = ["♠", "♥", "♦", "♣"]

export function FloatingDecorations() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {suits.map((suit, i) => (
        <motion.span
          key={i}
          className="absolute text-2xl opacity-10 select-none"
          style={{ left: `${20 + i * 20}%`, top: `${10 + i * 15}%` }}
          animate={{ y: [0, -16, 0], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
        >
          {suit}
        </motion.span>
      ))}
    </div>
  )
}
```

## 実装後に必ずやること
1. npm run typecheck で型エラーがないか確認
2. npm run lint を通す
3. モバイル（375px）とデスクトップ（1280px）で表示確認
4. アニメーションがカクつかないか確認（特にモバイル）
5. 禁止ワード（賭博・賭ける・稼ぐ）が入っていないか確認

## やってはいけないこと
- Inter・Arial・Roboto を使う
- any 型を使う
- アニメーションで見やすさを犠牲にする
- "use client" を不必要につける
- <img> タグを使う（next/image を使う）
- <a> タグを使う（next/link を使う）
- Wixの画像URLを直接参照する
