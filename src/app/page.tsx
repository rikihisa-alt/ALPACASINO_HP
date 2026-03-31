import Link from "next/link"
import { GALLERY_IMAGES, wixImage, SNS_LINKS } from "@/lib/constants"

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-5">
        {/* Background photo */}
        <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
          <img
            src={wixImage(GALLERY_IMAGES[2])}
            alt=""
            className="w-full h-full object-cover opacity-[0.07] grayscale-[20%]"
          />
        </div>

        <div className="relative z-10 text-center">
          <h1
            className="font-[family-name:var(--font-serif)] text-[var(--color-green)] leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(3.5rem, 12vw, 10rem)" }}
          >
            ALPA
            <br />
            CASINO
          </h1>

          <p
            className="mt-6 text-[var(--color-fg)] font-bold"
            style={{ fontSize: "clamp(1rem, 2.5vw, 1.5rem)" }}
          >
            いちばん気軽な、ポーカールーム。
          </p>

          <a
            href={SNS_LINKS.line}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-10 px-10 py-4 bg-[var(--color-line)] text-white text-sm font-bold rounded-[2px] hover:opacity-90 transition-opacity"
          >
            LINE で予約する
          </a>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <span className="w-[1px] h-8 bg-[var(--color-fg)] animate-pulse" />
        </div>
      </section>

      {/* ── About ── */}
      <section className="max-w-[900px] mx-auto px-5 md:px-8 py-24 md:py-32">
        <h2
          className="font-[family-name:var(--font-serif)] text-[var(--color-green)]"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
        >
          知らないまま、どうぞ。
        </h2>

        <div className="mt-8 max-w-[600px]">
          <p className="text-[var(--color-fg)] leading-[2]">
            ポーカーのルールを知らなくても大丈夫。
            アルパカジノは、大阪・心斎橋にあるアミューズメントポーカールーム。
            手ぶらで来て、ドリンク片手に、その場でルールを覚えながら遊べます。
          </p>
          <p className="text-[var(--color-fg)] leading-[2] mt-4">
            友だちと来ても、ひとりで来ても。
            はじめての人がいちばん楽しめる場所を目指しています。
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/newcustomer"
            className="px-8 py-3 bg-[var(--color-terra)] text-white text-sm font-bold rounded-[2px] hover:opacity-90 transition-opacity"
          >
            はじめての方へ
          </Link>
          <Link
            href="/system"
            className="px-8 py-3 border border-[var(--color-green)] text-[var(--color-green)] text-sm font-bold rounded-[2px] hover:bg-[var(--color-green)] hover:text-white transition-colors"
          >
            料金を見る
          </Link>
        </div>
      </section>

      {/* ── Price Callout ── */}
      <section className="bg-[var(--color-green)] text-[var(--color-bg)] py-20 md:py-28 px-5">
        <div className="max-w-[900px] mx-auto">
          <p className="text-sm tracking-widest uppercase opacity-60 mb-4">First Visit</p>
          <div className="flex items-baseline gap-3 flex-wrap">
            <span
              className="font-[family-name:var(--font-serif)] leading-none"
              style={{ fontSize: "clamp(4rem, 10vw, 8rem)" }}
            >
              &yen;3,380
            </span>
            <span className="text-lg opacity-80">から</span>
          </div>
          <p className="mt-4 text-sm opacity-70 leading-relaxed">
            初回セット / 3時間 / フリードリンク付
          </p>
          <Link
            href="/system"
            className="inline-block mt-8 px-8 py-3 border border-[var(--color-bg)] text-[var(--color-bg)] text-sm font-bold rounded-[2px] hover:bg-[var(--color-bg)] hover:text-[var(--color-green)] transition-colors"
          >
            料金の詳細
          </Link>
        </div>
      </section>

      {/* ── Amusement Disclaimer ── */}
      <section className="max-w-[900px] mx-auto px-5 md:px-8 py-16">
        <p className="text-xs text-[var(--color-muted)] leading-relaxed">
          ※当店はアミューズメント施設です。実際の金銭を賭けることは一切ございません。
        </p>
      </section>
    </>
  )
}
