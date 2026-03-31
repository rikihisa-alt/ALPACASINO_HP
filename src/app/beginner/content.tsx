"use client";

import { motion } from "framer-motion";
import { StorySection } from "@/components/ui/StorySection";
import { ChapterHeading } from "@/components/ui/ChapterHeading";
import { ContentCard } from "@/components/ui/ContentCard";
import { FlowStep } from "@/components/ui/FlowStep";
import { StoryButton } from "@/components/ui/StoryButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { CardSuitScatter } from "@/components/decorative/CardSuitScatter";
import { SNS_LINKS } from "@/lib/constants";
import { springConfigs, exponentialStagger } from "@/lib/animations";

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
      {/* Opening — 本が開くイメージ */}
      <section className="relative min-h-[60vh] flex items-center bg-cream overflow-hidden pt-20">
        <CardSuitScatter />
        <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, rotateX: -10 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
            style={{ perspective: "1000px" }}
          >
            <span className="font-handwritten text-gold text-lg">Lesson</span>
            <h1
              className="font-display-en font-black text-deep leading-[0.9] mt-2"
              style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}
            >
              BEGINNER
            </h1>
            <p className="font-display-jp text-cocoa mt-3" style={{ fontSize: "clamp(1rem, 2.5vw, 1.5rem)" }}>
              ポーカービギナー講習
            </p>
            <p className="text-cocoa-sub mt-4 max-w-lg leading-relaxed">
              ルールがわからなくても大丈夫。スタッフが丁寧にお教えします。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Target Users — 散らばったカード */}
      <WaveDivider variant="suitBorder" fillColor="var(--color-paper)" bgColor="var(--color-cream)" />
      <StorySection bg="paper" layout="fullWidth">
        <ChapterHeading titleEn="FOR YOU" titleJp="こんな方におすすめ" align="center" />
        <div className="mt-8 flex flex-wrap justify-center gap-4 md:gap-5 max-w-4xl mx-auto">
          {targetUsers.map((item, i) => {
            const variants: Array<"tilted" | "torn" | "stacked" | "polaroid" | "plain"> = ["tilted", "torn", "stacked", "polaroid", "tilted"];
            const tilts = [-3, 2, -1.5, 1, 2.5];
            const offsets = ["0", "16px", "0", "20px", "8px"];
            return (
              <motion.div
                key={i}
                className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(33%-14px)]"
                style={{ marginTop: offsets[i] }}
                initial={{ opacity: 0, y: 30, rotate: tilts[i] + 5 }}
                whileInView={{ opacity: 1, y: 0, rotate: tilts[i] }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: exponentialStagger(i, 0.08), ...springConfigs.gentle }}
              >
                <ContentCard variant={variants[i]} tiltDegree={tilts[i]}>
                  <span className="text-3xl block mb-2">{item.emoji}</span>
                  <p className="text-sm font-medium text-cocoa leading-relaxed">{item.text}</p>
                </ContentCard>
              </motion.div>
            );
          })}
        </div>
      </StorySection>

      {/* Counseling Flow */}
      <WaveDivider variant="wave" fillColor="var(--color-cream)" bgColor="var(--color-paper)" />
      <StorySection bg="cream" layout="fullWidth">
        <ChapterHeading titleEn="FLOW" titleJp="講習の流れ" subtitle="約40〜90分で基礎をマスターできます。" align="center" />
        <div className="max-w-2xl mx-auto mt-8">
          {counselingSteps.map((step, i) => (
            <FlowStep key={step.title} step={i + 1} title={step.title} description={step.description} index={i} isLast={i === counselingSteps.length - 1} />
          ))}
        </div>
      </StorySection>

      {/* Beginner Table Highlight */}
      <WaveDivider variant="tornPaper" fillColor="var(--color-paper)" bgColor="var(--color-cream)" />
      <StorySection bg="paper" layout="textRight">
        <ScrollReveal type="rotateIn">
          <ContentCard variant="stacked">
            <div className="text-center py-4">
              <span className="inline-block px-4 py-1 bg-rose text-white text-xs font-bold mb-4" style={{ borderRadius: "4px 8px 6px 10px" }}>
                安心ポイント
              </span>
              <h3 className="font-display-jp text-xl md:text-2xl text-cocoa">
                初心者専用テーブル完備
              </h3>
              <p className="mt-3 text-sm text-cocoa-sub leading-relaxed max-w-sm mx-auto">
                経験者とは別のテーブルで遊べるので、自分のペースで楽しめます。スタッフが常にサポートするので安心です。
              </p>
            </div>
          </ContentCard>
        </ScrollReveal>
        <div>
          <ChapterHeading titleEn="SAFE SPACE" titleJp="自分のペースで楽しめる" />
          <p className="text-cocoa-sub leading-relaxed text-sm">
            初心者テーブルでは、スタッフがルールやマナーを丁寧にフォロー。
            周りもみんな初心者だから、気兼ねなくプレイできます。
          </p>
        </div>
      </StorySection>

      {/* CTA */}
      <section className="bg-deep py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <ScrollReveal type="scaleFromCorner">
            <h2 className="font-display-en font-black text-paper" style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)" }}>
              Start your journey
            </h2>
            <p className="font-display-jp text-paper/80 mt-2">まずは体験してみませんか？</p>
            <p className="text-sm text-paper/60 mt-2">ビギナーセット ¥3,500 で気軽にスタート。</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <StoryButton href={SNS_LINKS.line} label="LINEで予約する" variant="line" external icon="💬" size="lg" />
              <StoryButton href="/system" label="料金を確認する" variant="ghost" className="!text-paper/70 !decoration-gold" />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
