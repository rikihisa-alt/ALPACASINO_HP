"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHero } from "@/components/ui/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { CTAButton } from "@/components/ui/CTAButton";
import { SNS_LINKS } from "@/lib/constants";

type PriceItem = {
  label: string;
  price: string;
  note?: string;
};

const weekdayPrices: PriceItem[] = [
  { label: "エントリーフィー", price: "¥1,100", note: "入場料" },
  { label: "1ゲーム参加", price: "¥1,100〜" },
  { label: "チップ追加（1回）", price: "¥1,100〜" },
  { label: "ドリンク", price: "¥0〜", note: "ソフトドリンク無料" },
];

const weekendPrices: PriceItem[] = [
  { label: "エントリーフィー", price: "¥1,100", note: "入場料" },
  { label: "1ゲーム参加", price: "¥1,100〜" },
  { label: "チップ追加（1回）", price: "¥1,100〜" },
  { label: "ドリンク", price: "¥0〜", note: "ソフトドリンク無料" },
];

export function SystemContent() {
  const [tab, setTab] = useState<"weekday" | "weekend">("weekday");
  const prices = tab === "weekday" ? weekdayPrices : weekendPrices;

  return (
    <>
      <PageHero
        enTitle="PRICE SYSTEM"
        title="料金システム"
        subtitle="目安 3,380円〜 で遊べます。初心者の方にはお得なビギナーセットもご用意。"
      />

      {/* Price Highlight */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="text-center p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10"
          >
            <p className="text-sm font-medium text-primary mb-2">目安プレイ料金</p>
            <p className="font-display text-5xl sm:text-6xl font-bold text-secondary">
              ¥3,380<span className="text-2xl">〜</span>
            </p>
            <p className="mt-3 text-text-secondary text-sm">
              エントリーフィー + 1ゲーム参加 + チップ追加1回 + ドリンクの場合
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tab Price Table */}
      <section className="py-20 bg-bg-light">
        <div className="mx-auto max-w-4xl px-4">
          <SectionTitle enTitle="PRICING" title="料金表" />

          {/* Tabs */}
          <div className="flex justify-center gap-2 mb-10">
            {(["weekday", "weekend"] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                className={`px-6 py-3 rounded-full font-bold text-sm transition-all ${
                  tab === t
                    ? "bg-primary text-white shadow-lg shadow-primary/25"
                    : "bg-white text-text-secondary hover:text-primary border border-primary/10"
                }`}
              >
                {t === "weekday" ? "平日" : "土日祝"}
              </button>
            ))}
          </div>

          {/* Price List */}
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl overflow-hidden border border-primary/5"
            >
              {prices.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between px-6 py-5 ${
                    i !== prices.length - 1 ? "border-b border-gray-100" : ""
                  }`}
                >
                  <div>
                    <p className="font-bold text-secondary">{item.label}</p>
                    {item.note && <p className="text-xs text-text-muted mt-0.5">{item.note}</p>}
                  </div>
                  <p className="font-display text-xl font-bold text-primary">{item.price}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Beginner Set */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <AnimatedCard className="p-8 sm:p-12 bg-gradient-to-br from-accent/5 to-primary/5 border-2 border-accent/20">
            <div className="text-center">
              <span className="inline-block px-4 py-1 bg-accent text-secondary text-xs font-bold rounded-full mb-4">
                初心者限定
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-secondary">
                ポーカービギナーセット
              </h3>
              <p className="font-display text-4xl sm:text-5xl font-bold text-primary mt-4">
                ¥3,500
              </p>
              <p className="mt-4 text-text-secondary leading-relaxed">
                初心者限定テーブルで40〜90分プレイ可能。
                <br />
                ルール説明からスタートするので、まったくの初心者でも安心です。
              </p>
              <div className="mt-8">
                <CTAButton href={SNS_LINKS.line} label="LINEで予約する" variant="line" external />
              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Note */}
      <section className="py-16 bg-bg-cream">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="text-xs text-text-muted">
            ※料金は全て税込です。※ゲーム内容や時間帯によって料金が異なる場合があります。
            <br />
            ※当店はアミューズメント施設です。換金・景品交換は一切行っておりません。
          </p>
        </div>
      </section>
    </>
  );
}
