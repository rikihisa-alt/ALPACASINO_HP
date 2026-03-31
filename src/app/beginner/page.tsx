import type { Metadata } from "next"
import { GALLERY_IMAGES, wixImage, SNS_LINKS } from "@/lib/constants"

export const metadata: Metadata = {
  title: "ポーカービギナー講習",
  description: "ポーカー初心者向けの講習。ルールからマナーまで丁寧にお教えします。初心者専用テーブルもあります。",
}

export default function BeginnerPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <img
          src={wixImage(GALLERY_IMAGES[6])}
          alt=""
          className="w-full h-full object-cover opacity-[0.07] grayscale-[20%]"
        />
      </div>

      <div className="relative z-10">
        {/* Page Header */}
        <header className="pt-32 md:pt-40 pb-16 px-5 md:px-8 max-w-[900px] mx-auto">
          <p className="text-xs tracking-widest uppercase text-[var(--color-muted)] mb-4">Beginner</p>
          <h1
            className="font-[family-name:var(--font-serif)] text-[var(--color-green)]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
          >
            ポーカービギナー講習
          </h1>
          <p className="mt-6 text-[var(--color-fg)] max-w-[500px] leading-[2]">
            ルールを知らなくても大丈夫。一から丁寧にお教えします。
          </p>
        </header>

        {/* こんな人におすすめ */}
        <section className="px-5 md:px-8 max-w-[900px] mx-auto pb-20">
          <h2 className="text-xl font-bold text-[var(--color-green)] mb-8">こんな人におすすめ</h2>
          <ul className="space-y-5">
            {[
              "YouTubeでポーカーを見て、実際にやってみたい",
              "役もルールもわからないけど、体験してみたい",
              "アプリで遊んだことはあるけど、実テーブルは未経験",
              "プレイ経験は少しあるけど、ルールに不安がある",
              "友人に教えたい場所を探している",
            ].map((text, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="font-[family-name:var(--font-serif)] text-2xl text-[var(--color-green)] opacity-30 leading-none shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[var(--color-fg)] leading-relaxed">{text}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* カウンセリングの流れ */}
        <section className="bg-[var(--color-green)] text-[var(--color-bg)] py-16 px-5 md:px-8">
          <div className="max-w-[900px] mx-auto">
            <h2 className="text-xl font-bold mb-8">カウンセリングの流れ</h2>
            <div className="space-y-8">
              {[
                { step: "STEP 1", title: "ヒアリング", desc: "ポーカーの経験やどんな遊び方をしたいかをお聞きします。" },
                { step: "STEP 2", title: "ルール説明", desc: "ハンドの強さ、ベットの仕方、基本的な流れをお教えします。" },
                { step: "STEP 3", title: "模擬プレイ", desc: "スタッフと一緒に、少人数テーブルで実際にプレイしてみます。" },
                { step: "STEP 4", title: "実践デビュー", desc: "慣れたら通常テーブルへ。もちろんサポートは続きます。" },
              ].map((item) => (
                <div key={item.step} className="flex gap-6 items-start">
                  <span className="text-xs tracking-widest opacity-50 shrink-0 pt-1">{item.step}</span>
                  <div>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-sm opacity-80 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 初心者専用テーブル */}
        <section className="px-5 md:px-8 max-w-[900px] mx-auto py-20">
          <h2 className="text-xl font-bold text-[var(--color-green)] mb-4">初心者専用テーブルあり</h2>
          <p className="text-sm text-[var(--color-fg)] leading-[2] max-w-[600px]">
            経験者と同じテーブルは不安という方のために、初心者専用テーブルをご用意しています。
            同じレベルの方同士で、リラックスしてプレイできます。
          </p>
        </section>

        {/* CTA */}
        <section className="py-16 px-5 md:px-8 max-w-[900px] mx-auto text-center">
          <p className="text-lg font-bold text-[var(--color-fg)] mb-6">
            まずはLINEでお気軽にご相談ください
          </p>
          <a
            href={SNS_LINKS.line}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-[var(--color-line)] text-white text-sm font-bold rounded-[2px] hover:opacity-90 transition-opacity"
          >
            LINE で相談する
          </a>
        </section>
      </div>
    </div>
  )
}
