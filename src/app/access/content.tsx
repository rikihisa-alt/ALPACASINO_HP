"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PageHero } from "@/components/ui/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CTAButton } from "@/components/ui/CTAButton";
import { STORE_INFO, SNS_LINKS } from "@/lib/constants";

const accessSteps = [
  "心斎橋駅 6番出口を出て東へ",
  "御堂筋を背にして心斎橋筋商店街方面へ",
  "東心斎橋の通りを進む",
  "つるのすビル4階がアルパカジノです",
];

export function AccessContent() {
  return (
    <>
      <PageHero
        enTitle="ACCESS"
        title="アクセス"
        subtitle="心斎橋駅から徒歩3分。お気軽にお越しください。"
      />

      {/* Map + Info */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Google Maps */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" as const }}
              className="aspect-[4/3] rounded-2xl overflow-hidden border border-primary/5"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.424!2d135.5055!3d34.6725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e7157f1c1e8d%3A0x0!2z44Ki44Or44OR44Kr44K444OO!5e0!3m2!1sja!2sjp!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="アルパカジノ Google Map"
              />
            </motion.div>

            {/* Store Info */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" as const }}
            >
              <SectionTitle title="店舗情報" align="left" />
              <dl className="space-y-5">
                <div>
                  <dt className="text-sm font-bold text-primary">店舗名</dt>
                  <dd className="mt-1 text-secondary font-medium">{STORE_INFO.name}（{STORE_INFO.nameEn}）</dd>
                </div>
                <div>
                  <dt className="text-sm font-bold text-primary">住所</dt>
                  <dd className="mt-1 text-text-secondary">{STORE_INFO.address}</dd>
                </div>
                <div>
                  <dt className="text-sm font-bold text-primary">営業時間</dt>
                  <dd className="mt-1 text-text-secondary">{STORE_INFO.hours}</dd>
                </div>
                <div>
                  <dt className="text-sm font-bold text-primary">電話番号</dt>
                  <dd className="mt-1">
                    <Link href={`tel:${STORE_INFO.tel}`} className="text-secondary hover:text-primary transition-colors font-medium">
                      {STORE_INFO.tel}
                    </Link>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-bold text-primary">メール</dt>
                  <dd className="mt-1">
                    <Link href={`mailto:${STORE_INFO.email}`} className="text-text-secondary hover:text-primary transition-colors">
                      {STORE_INFO.email}
                    </Link>
                  </dd>
                </div>
              </dl>

              <div className="mt-8 flex gap-3">
                <CTAButton href={SNS_LINKS.line} label="LINEで予約" variant="line" external />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="py-20 bg-bg-light">
        <div className="mx-auto max-w-3xl px-4">
          <SectionTitle enTitle="DIRECTIONS" title="道順" subtitle="心斎橋駅から徒歩約3分です。" />
          <div className="space-y-4">
            {accessSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4, ease: "easeOut" as const }}
                className="flex items-center gap-4 p-4 rounded-xl bg-white border border-primary/5"
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-display font-bold text-sm">
                  {i + 1}
                </span>
                <p className="text-sm font-medium text-secondary">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amusement Note */}
      <section className="py-16 bg-bg-cream">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="text-xs text-text-muted">
            ※当店はアミューズメント施設です。換金・景品交換は一切行っておりません。
          </p>
        </div>
      </section>
    </>
  );
}
