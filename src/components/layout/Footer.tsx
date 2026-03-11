import Link from "next/link";
import { STORE_INFO, SNS_LINKS, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-secondary text-text-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <span className="font-display text-2xl font-bold text-primary">
              ALPA-CASINO
            </span>
            <p className="mt-3 text-sm text-text-light/70 leading-relaxed">
              大阪・心斎橋のアミューズメントカジノ。
              <br />
              初心者大歓迎！楽しいポーカー体験を。
            </p>
            <p className="mt-2 text-xs text-text-light/50">
              ※当店はアミューズメント施設です。
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-bold text-accent mb-4">ページ</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-light/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Store Info */}
          <div>
            <h3 className="text-sm font-bold text-accent mb-4">店舗情報</h3>
            <ul className="space-y-2 text-sm text-text-light/70">
              <li>{STORE_INFO.address}</li>
              <li>営業時間: {STORE_INFO.hours}</li>
              <li>
                TEL:{" "}
                <Link
                  href={`tel:${STORE_INFO.tel}`}
                  className="hover:text-primary transition-colors"
                >
                  {STORE_INFO.tel}
                </Link>
              </li>
              <li>{STORE_INFO.access}</li>
            </ul>
          </div>

          {/* SNS */}
          <div>
            <h3 className="text-sm font-bold text-accent mb-4">SNS</h3>
            <div className="flex gap-3">
              <Link
                href={SNS_LINKS.line}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-primary/20 transition-colors text-sm"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LINE"
              >
                LINE
              </Link>
              <Link
                href={SNS_LINKS.twitter}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-primary/20 transition-colors text-sm"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
              >
                X
              </Link>
              <Link
                href={SNS_LINKS.instagram}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-primary/20 transition-colors text-sm"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                IG
              </Link>
              <Link
                href={SNS_LINKS.tiktok}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-primary/20 transition-colors text-sm"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                TT
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-xs text-text-light/50">
            &copy; {new Date().getFullYear()} {STORE_INFO.name} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
