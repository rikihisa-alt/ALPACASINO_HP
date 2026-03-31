import type { Metadata } from "next"
import { GALLERY_IMAGES, wixImage } from "@/lib/constants"

export const metadata: Metadata = {
  title: "ハウスルール",
  description: "アルパカジノのハウスルール。快適に遊んでいただくためのルールをご案内します。",
}

export default function RulePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <img
          src={wixImage(GALLERY_IMAGES[8])}
          alt=""
          className="w-full h-full object-cover opacity-[0.07] grayscale-[20%]"
        />
      </div>

      <div className="relative z-10">
        {/* Page Header */}
        <header className="pt-32 md:pt-40 pb-16 px-5 md:px-8 max-w-[900px] mx-auto">
          <p className="text-xs tracking-widest uppercase text-[var(--color-muted)] mb-4">Rules</p>
          <h1
            className="font-[family-name:var(--font-serif)] text-[var(--color-green)]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
          >
            ハウスルール
          </h1>
          <p className="mt-6 text-[var(--color-fg)] max-w-[500px] leading-[2]">
            皆さまが快適にお過ごしいただけるよう、以下のルールをお守りください。
          </p>
        </header>

        {/* チップ・ゲームのルール */}
        <section className="px-5 md:px-8 max-w-[900px] mx-auto pb-16">
          <div className="border-l-4 border-[var(--color-green)] pl-6">
            <h2 className="text-xl font-bold text-[var(--color-green)] mb-6">チップ・ゲームのルール</h2>
            <ul className="space-y-3 text-sm text-[var(--color-fg)] leading-[2]">
              <li>チップはゲーム内のみ有効です。現金への換金はできません。</li>
              <li>チップのお預かりが可能です（次回来店時に引き出せます）。</li>
              <li>テーブルへの途中参加・離脱は自由です。</li>
              <li>ゲームの種類・レートはスタッフにご確認ください。</li>
              <li>ディーラーの判断が最終決定となります。</li>
            </ul>
          </div>
        </section>

        {/* マナー・禁止事項 */}
        <section className="px-5 md:px-8 max-w-[900px] mx-auto pb-16">
          <div className="border-l-4 border-[var(--color-terra)] pl-6">
            <h2 className="text-xl font-bold text-[var(--color-terra)] mb-6">マナー・禁止事項</h2>
            <ul className="space-y-3 text-sm text-[var(--color-fg)] leading-[2]">
              <li>他のプレイヤーへの暴言・威圧的な態度は禁止です。</li>
              <li>進行中のハンドに対するアドバイス・口出しはご遠慮ください。</li>
              <li>カードを故意に見せる行為は禁止です。</li>
              <li>携帯電話のプレイ中の使用はお控えください。</li>
              <li>チップのスプラッシュ（投げ入れ）はおやめください。</li>
              <li>泥酔状態でのプレイはお断りする場合があります。</li>
            </ul>
          </div>
        </section>

        {/* 店内利用ルール */}
        <section className="px-5 md:px-8 max-w-[900px] mx-auto pb-20">
          <div className="border-l-4 border-[var(--color-green)] pl-6">
            <h2 className="text-xl font-bold text-[var(--color-green)] mb-6">店内利用ルール</h2>
            <ul className="space-y-3 text-sm text-[var(--color-fg)] leading-[2]">
              <li>飲食物のお持ち込みはご遠慮ください（フリードリンク完備）。</li>
              <li>店内は禁煙です。喫煙は指定の場所でお願いします。</li>
              <li>写真・動画の撮影はスタッフにお声がけください。</li>
              <li>貴重品の管理はお客様ご自身でお願いいたします。</li>
              <li>他のお客様のご迷惑になる行為はお控えください。</li>
            </ul>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="bg-[var(--color-green)] text-[var(--color-bg)] py-12 px-5 md:px-8">
          <div className="max-w-[900px] mx-auto">
            <p className="text-sm leading-relaxed opacity-80">
              ※当店はアミューズメント施設です。実際の金銭を賭けることは一切ございません。
              ルールに違反された場合は、退店をお願いする場合がございます。
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
