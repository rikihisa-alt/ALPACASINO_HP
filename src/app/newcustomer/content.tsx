"use client";

import { motion } from "framer-motion";
import { PageHero } from "@/components/ui/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { StepItem } from "@/components/ui/StepItem";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { CTAButton } from "@/components/ui/CTAButton";
import { EXTERNAL_LINKS, SNS_LINKS } from "@/lib/constants";

const visitSteps = [
  { title: "Waitinglistアプリをインストール", description: "iOS / Android 対応。来店前にダウンロードしておくとスムーズです。" },
  { title: "アプリでチェックイン", description: "店舗に到着したらアプリからチェックイン。ウェイティングリストに登録されます。" },
  { title: "スタッフがご案内", description: "順番が来たらスタッフがテーブルへご案内します。ルールがわからなくてもOK！" },
  { title: "ゲームを楽しむ！", description: "チップを使ってポーカーを楽しみましょう。わからないことはいつでもスタッフへ。" },
];

const notices = [
  { emoji: "🚫", title: "飲食物の持ち込み不可", description: "店内にドリンクメニューをご用意しています。" },
  { emoji: "🎰", title: "チップのお預かり", description: "遊びきれなかったチップはお預かり可能です。次回ご来店時にお使いいただけます。" },
  { emoji: "📱", title: "通話はロビーで", description: "ゲーム中のテーブルでの通話はご遠慮ください。" },
  { emoji: "🤝", title: "マナーを守って楽しく", description: "他のお客様への配慮をお願いします。スタッフが丁寧にサポートします。" },
];

export function NewCustomerContent() {
  return (
    <>
      <PageHero
        enTitle="FIRST VISIT"
        title="はじめての方"
        subtitle="初めてでも安心！来店からゲームの流れまで、わかりやすくご案内します。"
      />

      {/* Waitinglist App */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <SectionTitle
            enTitle="STEP 1"
            title="Waitinglistアプリを準備"
            subtitle="来店前にアプリをインストールしておくと、待ち時間なくスムーズにご案内できます。"
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href={EXTERNAL_LINKS.waitinglistIos} label="App Store" variant="secondary" external />
            <CTAButton href={EXTERNAL_LINKS.waitinglistAndroid} label="Google Play" variant="secondary" external />
          </div>
        </div>
      </section>

      {/* Visit Flow */}
      <section className="py-20 bg-bg-light">
        <div className="mx-auto max-w-3xl px-4">
          <SectionTitle enTitle="FLOW" title="ご来店の流れ" />
          <div className="space-y-8">
            {visitSteps.map((step, i) => (
              <StepItem key={i} step={i + 1} title={step.title} description={step.description} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Notices */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <SectionTitle enTitle="NOTICE" title="ご来店時の注意事項" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {notices.map((notice, i) => (
              <AnimatedCard key={i} delay={i * 0.1} className="p-6">
                <span className="text-3xl block mb-3">{notice.emoji}</span>
                <h3 className="text-base font-bold text-secondary mb-1">{notice.title}</h3>
                <p className="text-sm text-text-secondary">{notice.description}</p>
              </AnimatedCard>
            ))}
          </div>
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
              さっそく遊びに来ませんか？
            </h2>
            <p className="text-text-secondary mb-8">LINEからお気軽にお問い合わせください。</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href={SNS_LINKS.line} label="LINEで予約する" variant="line" external />
              <CTAButton href="/system" label="料金システムを見る" />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
