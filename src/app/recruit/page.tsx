import type { Metadata } from "next"
import { GALLERY_IMAGES, wixImage } from "@/lib/constants"

export const metadata: Metadata = {
  title: "採用情報",
  description: "アルパカジノの採用情報。週1日〜OK、時給1,130〜1,500円。一緒に楽しい空間を作りませんか？",
}

export default function RecruitPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <img
          src={wixImage(GALLERY_IMAGES[12])}
          alt=""
          className="w-full h-full object-cover opacity-[0.07] grayscale-[20%]"
        />
      </div>

      <div className="relative z-10">
        {/* Page Header */}
        <header className="pt-32 md:pt-40 pb-16 px-5 md:px-8 max-w-[900px] mx-auto">
          <p className="text-xs tracking-widest uppercase text-[var(--color-muted)] mb-4">Recruit</p>
          <h1
            className="font-[family-name:var(--font-serif)] text-[var(--color-green)]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
          >
            採用情報
          </h1>
          <p className="mt-6 text-[var(--color-fg)] max-w-[500px] leading-[2]">
            アルパカジノで働きたいという想いを持った方を募集しています。
            ポーカーが好きな方、接客が好きな方、大歓迎です。
          </p>
        </header>

        {/* 募集概要 */}
        <section className="px-5 md:px-8 max-w-[900px] mx-auto pb-20">
          <h2 className="text-xl font-bold text-[var(--color-green)] mb-8">募集概要</h2>
          <dl className="space-y-6">
            <div className="border-t border-[var(--color-border)] pt-4 grid grid-cols-[120px_1fr] md:grid-cols-[160px_1fr] gap-4">
              <dt className="text-sm font-bold text-[var(--color-green)]">勤務形態</dt>
              <dd className="text-sm text-[var(--color-fg)]">シフト制（週1日〜OK）</dd>
            </div>
            <div className="border-t border-[var(--color-border)] pt-4 grid grid-cols-[120px_1fr] md:grid-cols-[160px_1fr] gap-4">
              <dt className="text-sm font-bold text-[var(--color-green)]">時給</dt>
              <dd className="text-sm text-[var(--color-fg)]">1,130〜1,500円</dd>
            </div>
            <div className="border-t border-[var(--color-border)] pt-4 grid grid-cols-[120px_1fr] md:grid-cols-[160px_1fr] gap-4">
              <dt className="text-sm font-bold text-[var(--color-green)]">交通費</dt>
              <dd className="text-sm text-[var(--color-fg)]">500円/日支給</dd>
            </div>
            <div className="border-t border-[var(--color-border)] pt-4 grid grid-cols-[120px_1fr] md:grid-cols-[160px_1fr] gap-4">
              <dt className="text-sm font-bold text-[var(--color-green)]">勤務地</dt>
              <dd className="text-sm text-[var(--color-fg)]">大阪市中央区東心斎橋（心斎橋駅 徒歩3分）</dd>
            </div>
          </dl>
        </section>

        {/* 応募 CTA */}
        <section className="bg-[var(--color-green)] text-[var(--color-bg)] py-20 px-5 md:px-8">
          <div className="max-w-[900px] mx-auto text-center">
            <h2
              className="font-[family-name:var(--font-serif)]"
              style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}
            >
              一緒に働きませんか？
            </h2>
            <p className="mt-4 text-sm opacity-80">
              応募は en-gage からお願いします
            </p>
            <a
              href="https://en-gage.net/alpacasino/work_2220711/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 px-10 py-4 bg-[var(--color-terra)] text-white text-sm font-bold rounded-[2px] hover:opacity-90 transition-opacity"
            >
              en-gage で応募する
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
