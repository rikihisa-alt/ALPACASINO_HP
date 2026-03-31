"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StorySection } from "@/components/ui/StorySection";
import { ChapterHeading } from "@/components/ui/ChapterHeading";
import { ContentCard } from "@/components/ui/ContentCard";
import { StoryButton } from "@/components/ui/StoryButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { SNS_LINKS } from "@/lib/constants";
import { springConfigs } from "@/lib/animations";

type PriceItem = { label: string; price: string; note?: string };

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
      {/* Opening — 巨大価格数字 */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-cream overflow-hidden pt-20">
        <div className="relative z-10 text-center px-5">
          <motion.span
            className="font-handwritten text-gold text-lg md:text-xl block mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Price from
          </motion.span>
          <motion.div
            className="font-display-en font-black text-deep leading-[0.85]"
            style={{ fontSize: "clamp(4rem, 15vw, 12rem)" }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          >
            ¥3,380
          </motion.div>
          <motion.p
            className="text-cocoa-sub mt-4 text-sm md:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            エントリーフィー + 1ゲーム参加 + チップ追加1回 + ドリンクの場合
          </motion.p>
          <motion.p
            className="font-display-jp text-cocoa mt-6"
            style={{ fontSize: "clamp(1rem, 2.5vw, 1.5rem)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            料金システム
          </motion.p>
        </div>
        {/* 装飾チップ */}
        <motion.div
          className="absolute right-[10%] top-[20%] w-20 h-20 rounded-full border-4 border-gold/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" as const }}
        />
        <motion.div
          className="absolute left-[8%] bottom-[25%] w-12 h-12 rounded-full border-3 border-rose/15"
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" as const }}
        />
      </section>

      {/* Price Table */}
      <WaveDivider variant="wave" fillColor="var(--color-paper)" bgColor="var(--color-cream)" />
      <StorySection bg="paper" layout="fullWidth">
        <ChapterHeading titleEn="PRICING" titleJp="料金表" align="center" />

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-10">
          {(["weekday", "weekend"] as const).map((t) => (
            <motion.button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className={`px-6 py-3 font-bold text-sm transition-all ${
                tab === t
                  ? "bg-rose text-white shadow-[3px_3px_0_var(--color-rose-dark)]"
                  : "bg-paper-mid text-cocoa-sub hover:text-cocoa"
              }`}
              style={{ borderRadius: "8px 16px 12px 20px" }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={springConfigs.snappy}
            >
              {t === "weekday" ? "平日" : "土日祝"}
            </motion.button>
          ))}
        </div>

        {/* Price List */}
        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, x: 20, rotate: 1 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              exit={{ opacity: 0, x: -20, rotate: -1 }}
              transition={{ duration: 0.4, ...springConfigs.gentle }}
            >
              <ContentCard variant="stacked">
                {prices.map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between py-4 ${
                      i !== prices.length - 1 ? "border-b border-cream" : ""
                    }`}
                  >
                    <div>
                      <p className="font-bold text-cocoa text-sm md:text-base">{item.label}</p>
                      {item.note && <p className="text-xs text-cocoa-muted mt-0.5">{item.note}</p>}
                    </div>
                    <p className="font-display-en font-black text-xl text-rose">{item.price}</p>
                  </div>
                ))}
              </ContentCard>
            </motion.div>
          </AnimatePresence>
        </div>
      </StorySection>

      {/* Beginner Set */}
      <WaveDivider variant="tornPaper" fillColor="var(--color-cream)" bgColor="var(--color-paper)" />
      <StorySection bg="cream" layout="textLeft">
        <div>
          <ChapterHeading titleEn="BEGINNER SET" titleJp="ポーカービギナーセット" />
          <ScrollReveal type="clipWipe">
            <p className="text-cocoa-sub leading-relaxed">
              初心者限定テーブルで40〜90分プレイ可能。
              ルール説明からスタートするので、まったくの初心者でも安心です。
            </p>
          </ScrollReveal>
          <div className="mt-6">
            <StoryButton href={SNS_LINKS.line} label="LINEで予約する" variant="line" external icon="💬" size="lg" />
          </div>
        </div>
        <ScrollReveal type="dealCard" delay={0.2}>
          <ContentCard variant="polaroid">
            <div className="text-center py-6">
              <span className="inline-block px-4 py-1 bg-gold text-cocoa text-xs font-bold mb-4" style={{ borderRadius: "4px 8px 6px 10px" }}>
                初心者限定
              </span>
              <p className="font-display-en font-black text-deep" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}>
                ¥3,500
              </p>
              <p className="text-sm text-cocoa-sub mt-2">ルール説明 + テーブルプレイ</p>
            </div>
          </ContentCard>
        </ScrollReveal>
      </StorySection>

      {/* Note */}
      <section className="bg-paper-mid py-10">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <p className="text-xs text-cocoa-muted leading-relaxed">
            ※料金は全て税込です。※ゲーム内容や時間帯によって料金が異なる場合があります。
            <br />
            ※当店はアミューズメント施設です。換金・景品交換は一切行っておりません。
          </p>
        </div>
      </section>
    </>
  );
}
