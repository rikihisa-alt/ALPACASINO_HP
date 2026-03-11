"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { STORE_INFO, SNS_LINKS } from "@/lib/constants";

export function InfoSection() {
  return (
    <section className="py-20 lg:py-28 bg-bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative aspect-[4/3] rounded-2xl bg-secondary/5 overflow-hidden flex items-center justify-center"
          >
            <div className="text-center text-text-muted">
              <p className="text-4xl mb-2">📍</p>
              <p className="text-sm">Google Map</p>
              <p className="text-xs mt-1">{STORE_INFO.access}</p>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary mb-8">
              ACCESS
            </h2>

            <dl className="space-y-4">
              <div>
                <dt className="text-sm font-bold text-primary">住所</dt>
                <dd className="mt-1 text-text-secondary">
                  {STORE_INFO.address}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-bold text-primary">営業時間</dt>
                <dd className="mt-1 text-text-secondary">{STORE_INFO.hours}</dd>
              </div>
              <div>
                <dt className="text-sm font-bold text-primary">電話番号</dt>
                <dd className="mt-1">
                  <Link
                    href={`tel:${STORE_INFO.tel}`}
                    className="text-text-secondary hover:text-primary transition-colors"
                  >
                    {STORE_INFO.tel}
                  </Link>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-bold text-primary">アクセス</dt>
                <dd className="mt-1 text-text-secondary">
                  {STORE_INFO.access}
                </dd>
              </div>
            </dl>

            <div className="mt-8 flex gap-3">
              <Link
                href={SNS_LINKS.line}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.span
                  className="inline-block px-6 py-3 bg-[#06C755] text-white font-bold rounded-full text-sm cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  LINE で予約
                </motion.span>
              </Link>
              <Link href="/access">
                <motion.span
                  className="inline-block px-6 py-3 bg-secondary text-white font-bold rounded-full text-sm cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  アクセス詳細
                </motion.span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
