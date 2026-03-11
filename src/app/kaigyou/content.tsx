"use client";

import { motion } from "framer-motion";
import { PageHero } from "@/components/ui/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { CTAButton } from "@/components/ui/CTAButton";
import { EXTERNAL_LINKS } from "@/lib/constants";

const challenges = [
  { emoji: "📋", title: "許認可", description: "風営法の許可申請、必要書類の準備に不安がある。" },
  { emoji: "🏢", title: "物件探し", description: "カジノに適した物件が見つからない、立地条件がわからない。" },
  { emoji: "🎨", title: "内装デザイン", description: "カジノの雰囲気を出す内装、必要な設備がわからない。" },
  { emoji: "👥", title: "スタッフ採用", description: "ディーラーの採用・教育、シフト管理のノウハウがない。" },
  { emoji: "💰", title: "料金設定", description: "適切な料金体系、収益モデルの設計に悩んでいる。" },
  { emoji: "📢", title: "集客", description: "開業後のマーケティング、SNS運用、リピーター施策がわからない。" },
];

export function KaigyouContent() {
  return (
    <>
      <PageHero
        enTitle="BUSINESS SUPPORT"
        title="開業サポート"
        subtitle="アミューズメントカジノの開業に関するお悩みを、SET UP CASINOが解決します。"
      />

      {/* Challenges */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <SectionTitle
            enTitle="CHALLENGES"
            title="こんなお悩みはありませんか？"
            subtitle="アミューズメントカジノ開業には多くの課題があります。"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((item, i) => (
              <AnimatedCard key={i} delay={i * 0.08} className="p-6">
                <span className="text-3xl block mb-3">{item.emoji}</span>
                <h3 className="text-base font-bold text-secondary mb-1">{item.title}</h3>
                <p className="text-sm text-text-secondary">{item.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* SET UP CASINO */}
      <section className="py-20 bg-bg-light">
        <div className="mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="text-center p-8 sm:p-12 rounded-3xl bg-white border border-primary/10 shadow-sm"
          >
            <p className="font-display text-sm font-semibold tracking-widest text-primary mb-3">
              SOLUTION
            </p>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-secondary">
              SET UP CASINO
            </h3>
            <p className="mt-4 text-text-secondary leading-relaxed max-w-lg mx-auto">
              アルパカジノの運営ノウハウを活かし、
              アミューズメントカジノの開業をトータルサポート。
              許認可から集客まで、すべてお任せください。
            </p>
            <div className="mt-8">
              <CTAButton href={EXTERNAL_LINKS.setupCasino} label="SET UP CASINO を見る" variant="primary" external />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
