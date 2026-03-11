"use client";

import { motion } from "framer-motion";
import { PageHero } from "@/components/ui/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { StepItem } from "@/components/ui/StepItem";
import { CTAButton } from "@/components/ui/CTAButton";
import { SNS_LINKS } from "@/lib/constants";

const targetUsers = [
  { emoji: "📺", text: "YouTubeで動画を見て実際に遊んでみたい" },
  { emoji: "❓", text: "役もルールもわからないけどポーカーを体験してみたい" },
  { emoji: "📱", text: "アプリで遊んだことはあるけど実際のテーブルは未経験" },
  { emoji: "😟", text: "多少プレイしたことはあるがルール・マナーに不安がある" },
  { emoji: "👫", text: "友人にポーカーを教えたいので信頼できる場所を探している" },
];

const counselingSteps = [
  { title: "ヒアリング", description: "ポーカー経験やどんなことを学びたいかをスタッフがお聞きします。" },
  { title: "ルール説明", description: "ハンドの強さ、ベットの仕方、ゲームの流れを丁寧に解説します。" },
  { title: "デモプレイ", description: "実際のテーブルでスタッフと一緒にプレイ。わからないことはその場で質問OK。" },
  { title: "初心者テーブルへ", description: "慣れてきたら初心者専用テーブルでリアルなゲームを体験！" },
];

export function BeginnerContent() {
  return (
    <>
      <PageHero
        enTitle="BEGINNER LESSON"
        title="ポーカービギナー講習"
        subtitle="ルールがわからなくても大丈夫。スタッフが丁寧にお教えします。"
      />

      {/* Target Users */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <SectionTitle enTitle="FOR YOU" title="こんな方におすすめ" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {targetUsers.map((item, i) => (
              <AnimatedCard key={i} delay={i * 0.08} className="p-6">
                <span className="text-3xl block mb-3">{item.emoji}</span>
                <p className="text-sm font-medium text-secondary leading-relaxed">{item.text}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Counseling Flow */}
      <section className="py-20 bg-bg-light">
        <div className="mx-auto max-w-3xl px-4">
          <SectionTitle enTitle="FLOW" title="講習の流れ" subtitle="約40〜90分で基礎をマスターできます。" />
          <div className="space-y-8">
            {counselingSteps.map((step, i) => (
              <StepItem key={i} step={i + 1} title={step.title} description={step.description} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Beginner Table Highlight */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="text-center p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10"
          >
            <span className="inline-block px-4 py-1 bg-primary text-white text-xs font-bold rounded-full mb-4">
              安心ポイント
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-secondary">
              初心者専用テーブル完備
            </h3>
            <p className="mt-4 text-text-secondary leading-relaxed max-w-lg mx-auto">
              経験者とは別のテーブルで遊べるので、
              自分のペースで楽しめます。
              スタッフが常にサポートするので安心です。
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-bg-cream">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
          >
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-secondary mb-4">
              まずは体験してみませんか？
            </h2>
            <p className="text-text-secondary mb-8">ビギナーセット ¥3,500 で気軽にスタート。</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href={SNS_LINKS.line} label="LINEで予約する" variant="line" external />
              <CTAButton href="/system" label="料金を確認する" variant="secondary" />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
