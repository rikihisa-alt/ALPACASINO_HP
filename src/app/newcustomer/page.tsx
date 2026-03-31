import type { Metadata } from "next"
import { GALLERY_IMAGES, wixImage, SNS_LINKS } from "@/lib/constants"

export const metadata: Metadata = {
  title: "はじめての方へ",
  description: "アルパカジノがはじめての方へ。来店の流れ・持ち物・注意事項をご案内します。",
}

export default function NewCustomerPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <img
          src={wixImage(GALLERY_IMAGES[0])}
          alt=""
          className="w-full h-full object-cover opacity-[0.07] grayscale-[20%]"
        />
      </div>

      <div className="relative z-10">
        {/* Page Header */}
        <header className="pt-32 md:pt-40 pb-16 px-5 md:px-8 max-w-[900px] mx-auto">
          <p className="text-xs tracking-widest uppercase text-[var(--color-muted)] mb-4">First Visit</p>
          <h1
            className="font-[family-name:var(--font-serif)] text-[var(--color-green)]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
          >
            はじめての方へ
          </h1>
          <p className="mt-6 text-[var(--color-fg)] max-w-[500px] leading-[2]">
            初めてでも安心。手ぶらで来て、そのまま遊べます。
          </p>
        </header>

        {/* Waitinglist App */}
        <section className="px-5 md:px-8 max-w-[900px] mx-auto pb-16">
          <h2 className="text-xl font-bold text-[var(--color-green)] mb-4">
            事前準備：Waitinglist アプリ
          </h2>
          <p className="text-sm text-[var(--color-fg)] leading-[2] max-w-[600px]">
            ご来店前に「Waitinglist」アプリのダウンロードをお願いしています。
            席の予約・待ち状況の確認ができるアプリです。
            iOS / Android 対応。ダウンロードは無料です。
          </p>
          <p className="text-sm text-[var(--color-muted)] mt-3">
            ※当日店頭でもご案内可能ですので、必須ではありません。
          </p>
        </section>

        {/* Visit Flow */}
        <section className="px-5 md:px-8 max-w-[900px] mx-auto pb-20">
          <h2 className="text-xl font-bold text-[var(--color-green)] mb-8">
            来店フロー
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "手ぶらで来店", desc: "予約不要。心斎橋駅から徒歩3分、ビル4階にお越しください。" },
              { step: "02", title: "ルール案内", desc: "スタッフがポーカーのルールを丁寧にご説明します。未経験でも大丈夫。" },
              { step: "03", title: "ゲーム開始", desc: "フリードリンクを片手に、テーブルへ。自分のペースで楽しめます。" },
            ].map((item) => (
              <div key={item.step} className="border-t-2 border-[var(--color-green)] pt-6">
                <span className="font-[family-name:var(--font-serif)] text-4xl text-[var(--color-green)] opacity-30">
                  {item.step}
                </span>
                <h3 className="text-lg font-bold mt-2 text-[var(--color-fg)]">{item.title}</h3>
                <p className="text-sm text-[var(--color-muted)] mt-2 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Notes */}
        <section className="bg-[var(--color-green)] text-[var(--color-bg)] py-16 px-5 md:px-8">
          <div className="max-w-[900px] mx-auto">
            <h2 className="text-xl font-bold mb-6">ご注意事項</h2>
            <ul className="space-y-4 text-sm leading-relaxed">
              <li className="flex gap-3">
                <span className="text-[var(--color-terra)] font-bold shrink-0">01</span>
                <span>飲食物のお持ち込みはご遠慮ください（フリードリンク完備）</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--color-terra)] font-bold shrink-0">02</span>
                <span>チップのお預かりが可能です（次回ご来店時にご利用いただけます）</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--color-terra)] font-bold shrink-0">03</span>
                <span>店内撮影はスタッフにお声がけください</span>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-5 md:px-8 max-w-[900px] mx-auto text-center">
          <p className="text-lg font-bold text-[var(--color-fg)] mb-6">
            ご質問・ご予約はLINEから
          </p>
          <a
            href={SNS_LINKS.line}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-[var(--color-line)] text-white text-sm font-bold rounded-[2px] hover:opacity-90 transition-opacity"
          >
            LINE で予約する
          </a>
        </section>
      </div>
    </div>
  )
}
