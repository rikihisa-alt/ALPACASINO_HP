import type { Metadata } from "next"
import { GALLERY_IMAGES, wixImage, SNS_LINKS } from "@/lib/constants"

export const metadata: Metadata = {
  title: "ディーラーレッスン",
  description: "プロのディーラースキルを学べるレッスン。テキサスホールデム・ブラックジャック・バカラの3コース。初回1時間無料。",
}

export default function DealerClassPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <img
          src={wixImage(GALLERY_IMAGES[14])}
          alt=""
          className="w-full h-full object-cover opacity-[0.07] grayscale-[20%]"
        />
      </div>

      <div className="relative z-10">
        {/* Page Header */}
        <header className="pt-32 md:pt-40 pb-16 px-5 md:px-8 max-w-[900px] mx-auto">
          <p className="text-xs tracking-widest uppercase text-[var(--color-muted)] mb-4">Dealer</p>
          <h1
            className="font-[family-name:var(--font-serif)] text-[var(--color-green)]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
          >
            ディーラーレッスン
          </h1>
        </header>

        {/* 初回無料 */}
        <section className="px-5 md:px-8 max-w-[900px] mx-auto pb-16">
          <div className="bg-[var(--color-terra)] text-white py-10 px-8 md:px-12">
            <p className="text-xs tracking-widest uppercase opacity-70 mb-2">Trial</p>
            <p
              className="font-[family-name:var(--font-serif)] leading-none"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
            >
              初回無料
            </p>
            <p className="mt-3 text-sm opacity-80">1時間の体験レッスンを無料でお試しいただけます</p>
          </div>
        </section>

        {/* 3コース */}
        <section className="px-5 md:px-8 max-w-[900px] mx-auto pb-20">
          <h2 className="text-xl font-bold text-[var(--color-green)] mb-8">コース一覧</h2>
          <div className="space-y-10">
            {[
              {
                name: "テキサスホールデム",
                price: "¥55,000",
                duration: "約15時間",
                desc: "世界で最もポピュラーなポーカーゲーム。ディーリングの基本からトーナメント運営まで。",
              },
              {
                name: "ブラックジャック",
                price: "¥45,000",
                duration: "約10時間",
                desc: "カード配りからペイアウト計算まで。スムーズなゲーム進行を身につけます。",
              },
              {
                name: "バカラ",
                price: "¥45,000",
                duration: "約10時間",
                desc: "バカラ特有のルールと所作を習得。カジノの花形ゲームをマスター。",
              },
            ].map((course) => (
              <div key={course.name} className="border-t-2 border-[var(--color-green)] pt-6">
                <h3 className="text-2xl font-bold text-[var(--color-fg)]">{course.name}</h3>
                <div className="flex gap-6 mt-3">
                  <span className="font-[family-name:var(--font-serif)] text-3xl text-[var(--color-green)]">
                    {course.price}
                  </span>
                  <span className="text-sm text-[var(--color-muted)] self-end">{course.duration}</span>
                </div>
                <p className="text-sm text-[var(--color-fg)] mt-3 leading-relaxed max-w-[500px]">
                  {course.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 割引 */}
        <section className="bg-[var(--color-green)] text-[var(--color-bg)] py-16 px-5 md:px-8">
          <div className="max-w-[900px] mx-auto">
            <h2 className="text-xl font-bold mb-6">セット割引</h2>
            <dl className="space-y-4 text-sm">
              <div className="flex justify-between border-b border-white/20 pb-3">
                <dt>2種目受講</dt>
                <dd className="font-bold">1万円引き</dd>
              </div>
              <div className="flex justify-between border-b border-white/20 pb-3">
                <dt>3種目セット</dt>
                <dd className="font-[family-name:var(--font-serif)] text-2xl">¥115,000</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-5 md:px-8 max-w-[900px] mx-auto text-center">
          <p className="text-lg font-bold text-[var(--color-fg)] mb-6">
            お問い合わせ・お申し込みはLINEから
          </p>
          <a
            href={SNS_LINKS.line}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-[var(--color-line)] text-white text-sm font-bold rounded-[2px] hover:opacity-90 transition-opacity"
          >
            LINE でお問い合わせ
          </a>
        </section>
      </div>
    </div>
  )
}
