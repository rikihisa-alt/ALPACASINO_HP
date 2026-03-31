import type { Metadata } from "next"
import { GALLERY_IMAGES, wixImage, SNS_LINKS } from "@/lib/constants"

export const metadata: Metadata = {
  title: "ギャラリー",
  description: "アルパカジノの店内写真やイベントの様子をご紹介します。",
}

export default function GalleryPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <img
          src={wixImage(GALLERY_IMAGES[1])}
          alt=""
          className="w-full h-full object-cover opacity-[0.07] grayscale-[20%]"
        />
      </div>

      <div className="relative z-10">
        {/* Page Header */}
        <header className="pt-32 md:pt-40 pb-16 px-5 md:px-8 max-w-[1200px] mx-auto">
          <p className="text-xs tracking-widest uppercase text-[var(--color-muted)] mb-4">Gallery</p>
          <h1
            className="font-[family-name:var(--font-serif)] text-[var(--color-green)]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
          >
            ギャラリー
          </h1>
        </header>

        {/* Photo Grid - Asymmetric masonry-like */}
        <section className="px-5 md:px-8 max-w-[1200px] mx-auto pb-20">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            {GALLERY_IMAGES.map((id, i) => {
              // Vary heights for masonry effect
              const heights = ["h-64", "h-80", "h-56", "h-72", "h-96", "h-60"]
              const heightClass = heights[i % heights.length]

              return (
                <div key={i} className={`mb-4 break-inside-avoid overflow-hidden`}>
                  <img
                    src={wixImage(id, 600, 600)}
                    alt={`アルパカジノ店内写真 ${i + 1}`}
                    className={`w-full ${heightClass} object-cover hover:scale-105 transition-transform duration-500`}
                  />
                </div>
              )
            })}
          </div>
        </section>

        {/* Instagram CTA */}
        <section className="py-16 px-5 md:px-8 max-w-[900px] mx-auto text-center">
          <p className="text-lg font-bold text-[var(--color-fg)] mb-6">
            もっと写真を見る
          </p>
          <a
            href={SNS_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 border border-[var(--color-green)] text-[var(--color-green)] text-sm font-bold rounded-[2px] hover:bg-[var(--color-green)] hover:text-white transition-colors"
          >
            Instagram をフォロー
          </a>
        </section>
      </div>
    </div>
  )
}
