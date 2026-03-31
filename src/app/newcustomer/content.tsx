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
import { EXTERNAL_LINKS, SNS_LINKS } from "@/lib/constants";
import { springConfigs, exponentialStagger } from "@/lib/animations";

const visitSteps = [
  { title: "Waitinglistアプリをインストール", description: "iOS / Android 対応。来店前にダウンロードしておくとスムーズです。" },
  { title: "アプリでチェックイン", description: "店舗に到着したらアプリからチェックイン。ウェイティングリストに登録されます。" },
  { title: "スタッフがご案内", description: "順番が来たらスタッフがテーブルへご案内します。ルールがわからなくてもOK！" },
  { title: "ゲームを楽しむ！", description: "チップを使ってポーカーを楽しみましょう。わからないことはいつでもスタッフへ。" },
];

const notices = [
  { emoji: "🚫", title: "飲食物の持ち込み不可", description: "店内にドリンクメニューをご用意しています。" },
  { emoji: "🎰", title: "チップのお預かり", description: "遊びきれなかったチップはお預かり可能です。次回ご来店時に。" },
  { emoji: "📱", title: "通話はロビーで", description: "ゲーム中のテーブルでの通話はご遠慮ください。" },
  { emoji: "🤝", title: "マナーを守って楽しく", description: "他のお客様への配慮をお願いします。" },
];

export function NewCustomerContent() {
  return (
    <>
      {/* Opening — ドアが開く演出 */}
      <section className="relative min-h-[60vh] flex items-center bg-cream overflow-hidden pt-20">
        <CardSuitScatter />
        <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <span className="font-handwritten text-gold text-lg">Welcome!</span>
            <h1
              className="font-display-en font-black text-deep leading-[0.9] mt-2"
              style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}
            >
              FIRST VISIT
            </h1>
            <p className="font-display-jp text-cocoa mt-3" style={{ fontSize: "clamp(1rem, 2.5vw, 1.5rem)" }}>
              はじめての方へ
            </p>
            <p className="text-cocoa-sub mt-4 max-w-lg leading-relaxed">
              初めてでも安心！来店からゲームの流れまで、わかりやすくご案内します。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Waitinglist App */}
      <WaveDivider variant="wave" fillColor="var(--color-paper)" bgColor="var(--color-cream)" />
      <StorySection layout="textRight" bg="paper">
        <ScrollReveal type="clipWipe">
          <div className="bg-cream p-6 md:p-10" style={{ borderRadius: "16px 28px 20px 32px" }}>
            <span className="text-5xl block mb-4">📱</span>
            <h3 className="font-display-jp text-lg text-cocoa mb-2">まずはアプリを準備</h3>
            <p className="text-sm text-cocoa-sub leading-relaxed mb-6">
              来店前にWaitinglistアプリをインストールしておくと、待ち時間なくスムーズにご案内できます。
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <StoryButton href={EXTERNAL_LINKS.waitinglistIos} label="App Store" variant="secondary" external icon="🍎" />
              <StoryButton href={EXTERNAL_LINKS.waitinglistAndroid} label="Google Play" variant="secondary" external icon="🤖" />
            </div>
          </div>
        </ScrollReveal>
        <div>
          <ChapterHeading titleEn="STEP 1" titleJp="アプリを準備しよう" subtitle="iOS / Android どちらも対応しています。" />
        </div>
      </StorySection>

      {/* Visit Flow */}
      <WaveDivider variant="tornPaper" fillColor="var(--color-cream)" bgColor="var(--color-paper)" />
      <StorySection bg="cream" layout="fullWidth">
        <ChapterHeading titleEn="FLOW" titleJp="ご来店の流れ" align="center" />
        <div className="max-w-2xl mx-auto mt-8">
          {visitSteps.map((step, i) => (
            <FlowStep key={step.title} step={i + 1} title={step.title} description={step.description} index={i} isLast={i === visitSteps.length - 1} />
          ))}
        </div>
      </StorySection>

      {/* Notices — 散らばったカード */}
      <WaveDivider variant="suitBorder" fillColor="var(--color-paper)" bgColor="var(--color-cream)" />
      <StorySection bg="paper" layout="staggered">
        <ChapterHeading titleEn="NOTICE" titleJp="ご来店時の注意事項" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {notices.map((notice, i) => {
            const variants: Array<"tilted" | "stacked" | "torn" | "polaroid"> = ["tilted", "stacked", "torn", "polaroid"];
            const tilts = [-2, 1.5, -1, 2.5];
            return (
              <motion.div
                key={notice.title}
                style={{ marginTop: i === 1 ? "20px" : i === 3 ? "10px" : "0" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: exponentialStagger(i, 0.1), ...springConfigs.gentle }}
              >
                <ContentCard variant={variants[i]} tiltDegree={tilts[i]}>
                  <span className="text-3xl block mb-3">{notice.emoji}</span>
                  <h3 className="font-display-jp text-base text-cocoa mb-1">{notice.title}</h3>
                  <p className="text-sm text-cocoa-sub leading-relaxed">{notice.description}</p>
                </ContentCard>
              </motion.div>
            );
          })}
        </div>
      </StorySection>

      {/* CTA */}
      <section className="bg-deep py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <ScrollReveal type="scaleFromCorner">
            <h2 className="font-display-en font-black text-paper" style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)" }}>
              Ready to visit?
            </h2>
            <p className="font-display-jp text-paper/80 mt-2">さっそく遊びに来ませんか？</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <StoryButton href={SNS_LINKS.line} label="LINEで予約する" variant="line" external icon="💬" size="lg" />
              <StoryButton href="/system" label="料金システムを見る" variant="ghost" className="!text-paper/70 !decoration-gold" />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
