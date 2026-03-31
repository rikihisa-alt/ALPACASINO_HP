import type { Metadata } from "next"
import Link from "next/link"
import { GALLERY_IMAGES, wixImage, SNS_LINKS } from "@/lib/constants"

export const metadata: Metadata = {
  title: "料金システム",
  description: "アルパカジノの料金プラン。初回セット¥3,380〜、フリードリンク付きで手軽にポーカーを楽しめます。",
}

export default function SystemPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <img
          src={wixImage(GALLERY_IMAGES[4])}
          alt=""
          className="w-full h-full object-cover opacity-[0.07] grayscale-[20%]"
        />
      </div>

      <div className="relative z-10">
        {/* Page Header */}
        <header className="pt-32 md:pt-40 pb-8 px-5 md:px-8 max-w-[900px] mx-auto">
          <p className="text-xs tracking-widest uppercase text-[var(--color-muted)] mb-4">Price</p>
          <h1
            className="font-[family-name:var(--font-serif)] text-[var(--color-green)]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
          >
            料金システム
          </h1>
        </header>

        {/* Giant Price */}
        <section className="px-5 md:px-8 max-w-[900px] mx-auto pb-20">
          <div className="flex items-baseline gap-3 flex-wrap">
            <span
              className="font-[family-name:var(--font-serif)] text-[var(--color-green)] leading-none"
              style={{ fontSize: "clamp(5rem, 14vw, 10rem)" }}
            >
              &yen;3,380
            </span>
            <span className="text-xl text-[var(--color-muted)]">から</span>
          </div>
          <p className="mt-2 text-sm text-[var(--color-muted)]">初回セット / フリードリンク付</p>
        </section>

        {/* Price Plans */}
        <section className="px-5 md:px-8 max-w-[900px] mx-auto pb-20">
          <div className="space-y-12">
            {/* 初回セット */}
            <div className="border-t-2 border-[var(--color-green)] pt-6">
              <h2 className="text-2xl font-bold text-[var(--color-green)]">初回セット</h2>
              <p className="font-[family-name:var(--font-serif)] text-4xl text-[var(--color-fg)] mt-2">&yen;3,380</p>
              <ul className="mt-4 text-sm text-[var(--color-fg)] space-y-1 leading-relaxed">
                <li>3時間プレイ</li>
                <li>フリードリンク付</li>
                <li>チップ1万点</li>
              </ul>
            </div>

            {/* ポーカービギナーセット */}
            <div className="border-t-2 border-[var(--color-green)] pt-6">
              <h2 className="text-2xl font-bold text-[var(--color-green)]">ポーカービギナーセット</h2>
              <p className="font-[family-name:var(--font-serif)] text-4xl text-[var(--color-fg)] mt-2">&yen;3,500</p>
              <ul className="mt-4 text-sm text-[var(--color-fg)] space-y-1 leading-relaxed">
                <li>初心者限定テーブル（40〜90分）</li>
                <li>フリードリンク付</li>
                <li>ルール・マナーのレクチャー込み</li>
              </ul>
              <p className="mt-3 text-xs text-[var(--color-muted)]">※初心者の方限定プランです</p>
            </div>

            {/* メンバー料金 */}
            <div className="border-t-2 border-[var(--color-green)] pt-6">
              <h2 className="text-2xl font-bold text-[var(--color-green)]">メンバー料金</h2>
              <p className="font-[family-name:var(--font-serif)] text-4xl text-[var(--color-fg)] mt-2">
                &yen;2,750<span className="text-lg text-[var(--color-muted)]">/h〜</span>
              </p>
              <p className="mt-4 text-sm text-[var(--color-fg)] leading-relaxed">
                2回目以降のご利用はメンバー料金が適用されます。フリードリンク付。
              </p>
            </div>

            {/* その他 */}
            <div className="border-t-2 border-[var(--color-border)] pt-6">
              <h2 className="text-lg font-bold text-[var(--color-fg)]">その他</h2>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between border-b border-[var(--color-border)] pb-2">
                  <dt>延長料金</dt>
                  <dd className="font-bold">¥550 / 30分</dd>
                </div>
                <div className="flex justify-between border-b border-[var(--color-border)] pb-2">
                  <dt>トーナメント参加費</dt>
                  <dd className="font-bold">イベントにより異なる</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-5 md:px-8 max-w-[900px] mx-auto text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/newcustomer"
              className="px-8 py-3 bg-[var(--color-terra)] text-white text-sm font-bold rounded-[2px] hover:opacity-90 transition-opacity"
            >
              はじめての方へ
            </Link>
            <a
              href={SNS_LINKS.line}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-[var(--color-line)] text-white text-sm font-bold rounded-[2px] hover:opacity-90 transition-opacity"
            >
              LINE で予約する
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
