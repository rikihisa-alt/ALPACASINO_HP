"use client";

import { motion } from "framer-motion";
import { StorySection } from "@/components/ui/StorySection";
import { ChapterHeading } from "@/components/ui/ChapterHeading";
import { ContentCard } from "@/components/ui/ContentCard";
import { StoryButton } from "@/components/ui/StoryButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { EXTERNAL_LINKS } from "@/lib/constants";
import { springConfigs, exponentialStagger } from "@/lib/animations";

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
      {/* Opening — 設計図スタイル */}
      <section className="relative min-h-[60vh] flex items-center bg-cream overflow-hidden pt-20">
        <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <span className="font-handwritten text-gold text-lg">Business</span>
            <h1 className="font-display-en font-black text-deep leading-[0.9] mt-2" style={{ fontSize: "clamp(2rem, 7vw, 5rem)" }}>
              BUSINESS
              <br />
              SUPPORT
            </h1>
            <p className="font-display-jp text-cocoa mt-3" style={{ fontSize: "clamp(1rem, 2.5vw, 1.5rem)" }}>開業サポート</p>
            <p className="text-cocoa-sub mt-4 max-w-lg leading-relaxed">
              アミューズメントカジノの開業に関するお悩みを、SET UP CASINOが解決します。
            </p>
          </motion.div>
        </div>
        {/* 設計図風装飾 */}
        <div className="absolute right-[5%] top-[20%] hidden lg:block" aria-hidden="true">
          <motion.svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            className="opacity-[0.08]"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          >
            <motion.rect
              x="20"
              y="20"
              width="160"
              height="160"
              fill="none"
              stroke="var(--color-deep)"
              strokeWidth="1"
              strokeDasharray="4 4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
            />
            <motion.line
              x1="20"
              y1="100"
              x2="180"
              y2="100"
              stroke="var(--color-deep)"
              strokeWidth="0.5"
              strokeDasharray="4 4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 1 }}
            />
            <motion.line
              x1="100"
              y1="20"
              x2="100"
              y2="180"
              stroke="var(--color-deep)"
              strokeWidth="0.5"
              strokeDasharray="4 4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 1.2 }}
            />
          </motion.svg>
        </div>
      </section>

      {/* Challenges — 散らばったカード */}
      <WaveDivider variant="suitBorder" fillColor="var(--color-paper)" bgColor="var(--color-cream)" />
      <StorySection bg="paper" layout="staggered">
        <ChapterHeading titleEn="CHALLENGES" titleJp="こんなお悩みはありませんか？" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {challenges.map((item, i) => {
            const variants: Array<"tilted" | "torn" | "stacked" | "polaroid" | "plain" | "tilted"> = ["tilted", "torn", "stacked", "polaroid", "tilted", "torn"];
            const tilts = [-2, 1.5, -1, 2.5, 1, -1.5];
            const offsets = [0, 16, 0, 20, 8, 0];
            return (
              <motion.div
                key={item.title}
                style={{ marginTop: offsets[i] }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: exponentialStagger(i, 0.08), ...springConfigs.gentle }}
              >
                <ContentCard variant={variants[i]} tiltDegree={tilts[i]}>
                  <span className="text-3xl block mb-3">{item.emoji}</span>
                  <h3 className="font-display-jp text-base text-cocoa mb-1">{item.title}</h3>
                  <p className="text-sm text-cocoa-sub leading-relaxed">{item.description}</p>
                </ContentCard>
              </motion.div>
            );
          })}
        </div>
      </StorySection>

      {/* SET UP CASINO */}
      <WaveDivider variant="wave" fillColor="var(--color-deep)" bgColor="var(--color-paper)" />
      <section className="bg-deep py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <ScrollReveal type="clipCircle">
            <span className="font-handwritten text-gold text-lg block mb-3">Solution</span>
            <h2 className="font-display-en font-black text-paper" style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}>
              SET UP CASINO
            </h2>
            <p className="text-paper/70 mt-4 leading-relaxed max-w-lg mx-auto">
              アルパカジノの運営ノウハウを活かし、アミューズメントカジノの開業をトータルサポート。
              許認可から集客まで、すべてお任せください。
            </p>
            <div className="mt-10">
              <StoryButton href={EXTERNAL_LINKS.setupCasino} label="SET UP CASINO を見る" variant="primary" external icon="🚀" size="lg" />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
