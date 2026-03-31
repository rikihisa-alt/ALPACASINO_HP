"use client";

import { motion } from "framer-motion";
import { StorySection } from "@/components/ui/StorySection";
import { ChapterHeading } from "@/components/ui/ChapterHeading";
import { FlowStep } from "@/components/ui/FlowStep";
import { StoryButton } from "@/components/ui/StoryButton";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const steps = [
  {
    title: "Waitinglistアプリをインストール",
    description:
      "App StoreまたはGoogle Playで「Waitinglist」をダウンロード。事前登録で当日スムーズに。",
  },
  {
    title: "お店にチェックイン",
    description:
      "心斎橋駅から徒歩3分。つるのすビル4階がアルパカジノです。アプリでチェックインしましょう。",
  },
  {
    title: "スタッフがご案内",
    description:
      "初めての方にはルールから丁寧にお教えします。わからないことは何でも聞いてください。",
  },
  {
    title: "ゲームを楽しむ！",
    description:
      "チップを使って本格ポーカー体験。勝っても負けても、楽しい時間をお過ごしください。",
  },
];

export function ChapterBeginners() {
  return (
    <>
      <WaveDivider
        variant="suitBorder"
        fillColor="var(--color-paper)"
        bgColor="var(--color-paper-mid)"
      />

      <StorySection bg="paper" layout="fullWidth">
        <ChapterHeading
          chapter="Chapter 3"
          titleEn="FOR BEGINNERS"
          titleJp="はじめてでも安心"
          subtitle="ポーカーが初めて？心配いりません。4つのステップで、あなたも今日からプレイヤーです。"
          align="center"
        />

        <div className="max-w-2xl mx-auto mt-8 md:mt-12">
          {steps.map((step, i) => (
            <FlowStep
              key={step.title}
              step={i + 1}
              title={step.title}
              description={step.description}
              index={i}
              isLast={i === steps.length - 1}
            />
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal type="scaleFromCorner" delay={0.5}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 md:mt-16">
            <StoryButton
              href="/newcustomer"
              label="はじめての方はこちら"
              variant="primary"
              size="lg"
            />
            <StoryButton
              href="/system"
              label="料金システムを見る"
              variant="secondary"
            />
          </div>
        </ScrollReveal>

        {/* アミューズメント注記 */}
        <motion.p
          className="text-center text-xs text-cocoa-muted mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          ※当店はアミューズメント施設です。実際のお金を賭けることはありません。
        </motion.p>
      </StorySection>
    </>
  );
}
