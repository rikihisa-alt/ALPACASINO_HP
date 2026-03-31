import Link from "next/link"
import { STORE_INFO, SNS_LINKS, NAV_LINKS } from "@/lib/constants"

export function Footer() {
  const snsItems = [
    { href: SNS_LINKS.line, label: "LINE" },
    { href: SNS_LINKS.twitter, label: "X" },
    { href: SNS_LINKS.instagram, label: "IG" },
    { href: SNS_LINKS.tiktok, label: "TikTok" },
  ]

  return (
    <footer className="bg-[var(--color-fg)] text-[var(--color-bg)]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-16 md:py-20">
        {/* Top: Logo + SNS */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
          {/* Brand */}
          <div className="max-w-sm">
            <Link href="/">
              <span className="font-[family-name:var(--font-serif)] text-3xl md:text-4xl tracking-tight">
                ALPACASINO
              </span>
            </Link>
            <p className="text-sm mt-3 opacity-60 leading-relaxed">
              大阪・心斎橋のアミューズメントポーカールーム。
              <br />
              初心者歓迎、手ぶらで気軽にポーカーを楽しめます。
            </p>
            <p className="text-xs mt-3 opacity-40">
              ※当店はアミューズメント施設です
            </p>
          </div>

          {/* Navigation */}
          <nav className="grid grid-cols-2 gap-x-12 gap-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm opacity-60 hover:opacity-100 transition-opacity py-1"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Store Info + SNS */}
          <div>
            <dl className="space-y-3 text-sm">
              <div>
                <dt className="text-xs opacity-40 mb-0.5">住所</dt>
                <dd className="text-xs leading-relaxed opacity-80">{STORE_INFO.address}</dd>
              </div>
              <div>
                <dt className="text-xs opacity-40 mb-0.5">営業時間</dt>
                <dd className="opacity-80">{STORE_INFO.hours}</dd>
              </div>
              <div>
                <dt className="text-xs opacity-40 mb-0.5">TEL</dt>
                <dd className="opacity-80">{STORE_INFO.tel}</dd>
              </div>
            </dl>

            {/* SNS Links */}
            <div className="flex gap-3 mt-6">
              {snsItems.map((sns) => (
                <a
                  key={sns.label}
                  href={sns.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center text-xs font-bold bg-[var(--color-green)] text-[var(--color-bg)] rounded-[2px] hover:bg-[var(--color-terra)] transition-colors"
                >
                  {sns.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-6 border-t border-white/10">
          <p className="text-xs opacity-40 text-center">
            &copy; {new Date().getFullYear()} {STORE_INFO.name} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
