import type { Metadata } from "next"
import { GALLERY_IMAGES, wixImage, STORE_INFO, SNS_LINKS } from "@/lib/constants"

export const metadata: Metadata = {
  title: "アクセス",
  description: "アルパカジノへのアクセス。心斎橋駅から徒歩3分。営業時間・住所・電話番号をご確認いただけます。",
}

export default function AccessPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <img
          src={wixImage(GALLERY_IMAGES[3])}
          alt=""
          className="w-full h-full object-cover opacity-[0.07] grayscale-[20%]"
        />
      </div>

      <div className="relative z-10">
        {/* Page Header */}
        <header className="pt-32 md:pt-40 pb-16 px-5 md:px-8 max-w-[900px] mx-auto">
          <p className="text-xs tracking-widest uppercase text-[var(--color-muted)] mb-4">Access</p>
          <h1
            className="font-[family-name:var(--font-serif)] text-[var(--color-green)]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
          >
            アクセス
          </h1>
        </header>

        {/* Google Maps */}
        <section className="px-5 md:px-8 max-w-[900px] mx-auto pb-16">
          <div className="aspect-video w-full bg-[var(--color-border)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.459!2d135.505!3d34.673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e7157b4a4e01%3A0x1234567890abcdef!2z44Ki44Or44OR44Kr44K444OO!5e0!3m2!1sja!2sjp!4v1700000000000!5m2!1sja!2sjp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="アルパカジノの地図"
            />
          </div>
        </section>

        {/* Store Info */}
        <section className="px-5 md:px-8 max-w-[900px] mx-auto pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <dl className="space-y-6">
              <div>
                <dt className="text-xs text-[var(--color-muted)] tracking-widest uppercase mb-1">Address</dt>
                <dd className="text-sm text-[var(--color-fg)] leading-relaxed">{STORE_INFO.address}</dd>
              </div>
              <div>
                <dt className="text-xs text-[var(--color-muted)] tracking-widest uppercase mb-1">Hours</dt>
                <dd className="text-sm text-[var(--color-fg)]">{STORE_INFO.hours}</dd>
              </div>
              <div>
                <dt className="text-xs text-[var(--color-muted)] tracking-widest uppercase mb-1">Tel</dt>
                <dd className="text-sm text-[var(--color-fg)]">{STORE_INFO.tel}</dd>
              </div>
              <div>
                <dt className="text-xs text-[var(--color-muted)] tracking-widest uppercase mb-1">Email</dt>
                <dd className="text-sm text-[var(--color-fg)]">{STORE_INFO.email}</dd>
              </div>
            </dl>

            <div>
              <h2 className="text-lg font-bold text-[var(--color-green)] mb-4">来店方法</h2>
              <ol className="space-y-3 text-sm text-[var(--color-fg)] leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-[var(--color-green)] font-bold shrink-0">1.</span>
                  <span>御堂筋線「心斎橋駅」6番出口を出る</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[var(--color-green)] font-bold shrink-0">2.</span>
                  <span>心斎橋筋商店街を南へ進む</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[var(--color-green)] font-bold shrink-0">3.</span>
                  <span>東心斎橋方面へ徒歩約3分</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[var(--color-green)] font-bold shrink-0">4.</span>
                  <span>つるのすビル4階がアルパカジノです</span>
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-5 md:px-8 max-w-[900px] mx-auto">
          <div className="flex flex-wrap gap-4">
            <a
              href={SNS_LINKS.line}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-[var(--color-line)] text-white text-sm font-bold rounded-[2px] hover:opacity-90 transition-opacity"
            >
              LINE で予約する
            </a>
            <a
              href={`tel:${STORE_INFO.tel}`}
              className="px-8 py-3 border border-[var(--color-green)] text-[var(--color-green)] text-sm font-bold rounded-[2px] hover:bg-[var(--color-green)] hover:text-white transition-colors"
            >
              電話で問い合わせ
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
