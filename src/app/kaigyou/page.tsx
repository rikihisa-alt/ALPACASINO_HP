import type { Metadata } from "next"
import { GALLERY_IMAGES, wixImage } from "@/lib/constants"

export const metadata: Metadata = {
  title: "開業サポート",
  description: "アミューズメントカジノの開業をサポート。許認可・物件・内装・採用・集客まで、SET UP CASINOがお手伝いします。",
}

export default function KaigyouPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <img
          src={wixImage(GALLERY_IMAGES[10])}
          alt=""
          className="w-full h-full object-cover opacity-[0.07] grayscale-[20%]"
        />
      </div>

      <div className="relative z-10">
        {/* Page Header */}
        <header className="pt-32 md:pt-40 pb-16 px-5 md:px-8 max-w-[900px] mx-auto">
          <p className="text-xs tracking-widest uppercase text-[var(--color-muted)] mb-4">Business</p>
          <h1
            className="font-[family-name:var(--font-serif)] text-[var(--color-green)]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
          >
            開業サポート
          </h1>
          <p className="mt-6 text-[var(--color-fg)] max-w-[600px] leading-[2]">
            アミューズメントカジノの開業には、さまざまな課題があります。
            私たちの経験とノウハウで、あなたの開業をサポートします。
          </p>
        </header>

        {/* 課題一覧 */}
        <section className="px-5 md:px-8 max-w-[900px] mx-auto pb-20">
          <h2 className="text-xl font-bold text-[var(--color-green)] mb-8">
            アミューズメントカジノ開業の課題
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "許認可", desc: "風営法に基づく許可申請、各種届出の準備が必要です。" },
              { title: "物件", desc: "立地選定、用途地域の確認、賃貸契約のポイントをサポート。" },
              { title: "内装", desc: "テーブル配置、照明設計、お客様動線の最適化をご提案。" },
              { title: "採用", desc: "ディーラー・スタッフの採用・研修プランを提供。" },
              { title: "料金設計", desc: "収益モデルに基づいた料金体系の設計をアドバイス。" },
              { title: "集客", desc: "SNS運用、イベント企画、リピーター獲得の戦略をサポート。" },
            ].map((item) => (
              <div key={item.title} className="border-t-2 border-[var(--color-green)] pt-4">
                <h3 className="font-bold text-[var(--color-fg)]">{item.title}</h3>
                <p className="text-sm text-[var(--color-muted)] mt-1 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SET UP CASINO */}
        <section className="bg-[var(--color-green)] text-[var(--color-bg)] py-20 px-5 md:px-8">
          <div className="max-w-[900px] mx-auto">
            <p className="text-xs tracking-widest uppercase opacity-60 mb-4">Partner Service</p>
            <h2
              className="font-[family-name:var(--font-serif)]"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              SET UP CASINO
            </h2>
            <p className="mt-6 text-sm opacity-80 leading-[2] max-w-[500px]">
              アミューズメントカジノの開業に特化したコンサルティングサービス。
              許認可から集客まで、ワンストップでサポートします。
            </p>
            <a
              href="https://www.setupcasino.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 px-10 py-4 bg-[var(--color-terra)] text-white text-sm font-bold rounded-[2px] hover:opacity-90 transition-opacity"
            >
              SET UP CASINO を見る
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
