"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { STORE_INFO, SNS_LINKS, NAV_LINKS } from "@/lib/constants";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { springConfigs } from "@/lib/animations";

export function Footer() {
  return (
    <footer className="relative">
      {/* 有機的上端 */}
      <WaveDivider
        variant="tornPaper"
        fillColor="var(--color-deep)"
        bgColor="transparent"
        flip
        animate={false}
      />

      <div className="bg-deep text-[var(--color-paper)] -mt-px">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20">
          {/* 非対称3カラム */}
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1.5fr] gap-12 md:gap-8">
            {/* Brand */}
            <div>
              <motion.h3
                className="font-display-en font-black text-3xl md:text-4xl tracking-tight mb-4"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                ALPA-CASINO
              </motion.h3>
              <p className="font-display-jp text-sm mb-4 text-[var(--color-cocoa-muted)]">
                {STORE_INFO.name}
              </p>
              <p className="text-sm leading-relaxed text-[var(--color-cocoa-muted)] max-w-xs">
                大阪・心斎橋のアミューズメントカジノ。
                初心者大歓迎、ポーカーを楽しめるお店です。
              </p>
              <p className="text-xs mt-3 text-[var(--color-cocoa-muted)] opacity-70">
                ※当店はアミューズメント施設です
              </p>
            </div>

            {/* Navigation */}
            <nav>
              <h4 className="font-handwritten text-gold text-lg mb-4">Pages</h4>
              <ul className="space-y-2">
                {NAV_LINKS.slice(0, 6).map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>
                      <motion.span
                        className="text-sm text-[var(--color-cocoa-muted)] hover:text-[var(--color-paper)] transition-colors cursor-pointer inline-block"
                        whileHover={{ x: 4 }}
                        transition={springConfigs.snappy}
                      >
                        {link.label}
                      </motion.span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Store Info */}
            <div>
              <h4 className="font-handwritten text-gold text-lg mb-4">
                Store Info
              </h4>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-[var(--color-cocoa-muted)] text-xs mb-0.5">
                    住所
                  </dt>
                  <dd className="text-[var(--color-paper)] text-xs leading-relaxed">
                    {STORE_INFO.address}
                  </dd>
                </div>
                <div>
                  <dt className="text-[var(--color-cocoa-muted)] text-xs mb-0.5">
                    営業時間
                  </dt>
                  <dd className="text-[var(--color-paper)]">
                    {STORE_INFO.hours}
                  </dd>
                </div>
                <div>
                  <dt className="text-[var(--color-cocoa-muted)] text-xs mb-0.5">
                    アクセス
                  </dt>
                  <dd className="text-[var(--color-paper)]">
                    {STORE_INFO.access}
                  </dd>
                </div>
              </dl>

              {/* SNS */}
              <div className="flex gap-3 mt-6">
                {[
                  { href: SNS_LINKS.twitter, label: "X" },
                  { href: SNS_LINKS.instagram, label: "IG" },
                  { href: SNS_LINKS.tiktok, label: "TT" },
                  { href: SNS_LINKS.line, label: "LINE" },
                ].map((sns) => (
                  <motion.a
                    key={sns.label}
                    href={sns.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center text-xs font-bold text-deep bg-gold hover:bg-gold-light transition-colors"
                    style={{ borderRadius: "8px 14px 10px 16px" }}
                    whileHover={{ rotate: -5, scale: 1.1 }}
                    transition={springConfigs.bouncy}
                  >
                    {sns.label}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-16 pt-6 border-t border-[var(--color-deep-light)]">
            <p className="text-xs text-[var(--color-cocoa-muted)] text-center">
              &copy; {new Date().getFullYear()} {STORE_INFO.name} All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
