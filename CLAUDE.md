# アルパカジノ 新HP

## Purpose
大阪・心斎橋のアミューズメントカジノ「アルパカジノ」の公式HP。
可愛くて遊び心があり、アニメーションに溢れた「センスのいいポーカー屋さん」のサイト。
初心者が「楽しそう・入りやすそう」と感じることが最優先。

## Stack
- Next.js 14（App Router） + TypeScript
- Tailwind CSS + CSS Modules（アニメーション）
- Framer Motion（アニメーションライブラリ）
- React Hook Form（フォーム）
- Vercel（デプロイ） + GitHub

## Repo Map
src/
├── app/              ルーティング（各ページのpage.tsx）
├── components/
│   ├── ui/           汎用UIコンポーネント（Button, Card など）
│   ├── sections/     ページ内セクション単位のコンポーネント
│   └── layout/       Header, Footer, Navigation
├── features/         ページ固有の機能（フォームなど）
├── lib/              ユーティリティ・定数・型定義
└── styles/           グローバルCSS・アニメーション定義

## Pages
/ トップ
/newcustomer はじめての方
/system 料金システム
/beginner ポーカービギナー講習
/dealerclass ディーラーレッスン
/gallery ギャラリー
/recruit 採用情報
/kaigyou 開業サポート
/rule ハウスルール
/access アクセス

## Design Rules
- フォント: 日本語は Zen Maru Gothic、英語見出しは個性的なディスプレイフォント
- Inter・Arial・Roboto は絶対に使わない
- アニメーション: Framer Motion を使う
- カラーは src/lib/colors.ts で一元管理する
- レスポンシブ: モバイルファーストで実装する（375px〜）

## Animation Rules
- ページロード: staggered reveal（要素が順番にふわっと登場）
- スクロール: whileInView で見えたら動く（viewport={{ once: true }}）
- ホバー: ボタン・カード・画像すべてにホバーエフェクト
- 装飾: トランプマーク（♠♥♦♣）・チップをフローティングで使う
- 見やすさを犠牲にするアニメーションは絶対に入れない

## Coding Rules
- any 禁止。型は必ず明示する
- Server Component と Client Component を明確に分ける
- "use client" は Framer Motion・フォーム・インタラクションが必要なものだけ
- 画像は next/image を使う（<img> タグ禁止）
- リンクは next/link を使う（<a> タグ禁止）
- コンポーネントは1ファイル200行を目安に分割する
- Wixの画像URLを直接参照しない

## Commands
- dev:   npm run dev
- build: npm run build
- lint:  npm run lint
- type:  npm run typecheck

## Important
- 「賭博」「賭ける」「稼ぐ」などの表現は絶対に使わない
- アミューズメント施設であることを必ずページ内に明記する
- フォームの個人情報はサーバーサイドで処理する
- 不明点は推測で実装せず、先に確認する
