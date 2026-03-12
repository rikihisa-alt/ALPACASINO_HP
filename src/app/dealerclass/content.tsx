"use client";

import { motion } from "framer-motion";
import { StorySection } from "@/components/ui/StorySection";
import { ChapterHeading } from "@/components/ui/ChapterHeading";
import { ContentCard } from "@/components/ui/ContentCard";
import { StoryButton } from "@/components/ui/StoryButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { CardSuitScatter } from "@/components/decorative/CardSuitScatter";
import { SNS_LINKS } from "@/lib/constants";
import { springConfigs, exponentialStagger } from "@/lib/animations";

const courses = [
  { name: "テキサスホールデム", price: "¥55,000", duration: "目安15時間", emoji: "🃏", tilt: -3 },
  { name: "ブラックジャック", price: "¥45,000", duration: "目安10時間", emoji: "🂡", tilt: 2 },
  { name: "バカラ", price: "¥45,000", duration: "目安10時間", emoji: "🎴", tilt: -1.5 },
];

const discounts = [
  { label: "2種目セット", detail: "1万円引き" },
  { label: "3種目セット", detail: "¥115,000（3万円お得）" },
];

export function DealerClassContent() {
  return (
    <>
      {/* Opening — カードが扇状展開 */}
      <section className="relative min-h-[60vh] flex items-center bg-cream overflow-hidden pt-20">
        <CardSuitScatter />
        <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <span className="font-handwritten text-gold text-lg">Dealer Lesson</span>
            <h1 className="font-display-en font-black text-deep leading-[0.9] mt-2" style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}>
              DEALER
            </h1>
            <p className="font-display-jp text-cocoa mt-3" style={{ fontSize: "clamp(1rem, 2.5vw, 1.5rem)" }}>ディーラーレッスン</p>
            <p className="text-cocoa-sub mt-4 max-w-lg leading-relaxed">プロのディーラースキルを基礎から学べます。初回1時間無料体験あり。</p>
          </motion.div>
        </div>
        {/* 扇状カード装飾 */}
        <div className="absolute right-[5%] top-[30%] hidden lg:flex gap-0">
          {["-20deg", "-5deg", "10deg", "25deg"].map((rot, i) => (
            <motion.div
              key={i}
              className="w-12 h-16 bg-paper border-2 border-cream absolute origin-bottom"
              style={{ borderRadius: "4px", rotate: rot, left: 0, bottom: 0 }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 0.2, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.15, ...springConfigs.bouncy }}
            />
          ))}
        </div>
      </section>

      {/* Free Trial */}
      <WaveDivider variant="wave" fillColor="var(--color-paper)" bgColor="var(--color-cream)" />
      <StorySection bg="paper" layout="textLeft">
        <div>
          <ChapterHeading titleEn="FREE TRIAL" titleJp="初回無料体験" />
          <p className="text-cocoa-sub leading-relaxed">まずは無料体験でディーラーの世界を覗いてみませんか？1時間の体験でカード技術の基礎を学べます。</p>
          <div className="mt-6">
            <StoryButton href={SNS_LINKS.line} label="無料体験を予約する" variant="line" external icon="💬" size="lg" />
          </div>
        </div>
        <ScrollReveal type="dealCard">
          <ContentCard variant="polaroid">
            <div className="text-center py-6">
              <span className="inline-block px-4 py-1 bg-gold text-cocoa text-xs font-bold mb-4" style={{ borderRadius: "4px 8px 6px 10px" }}>まずはお試し</span>
              <p className="font-display-en font-black text-deep text-4xl md:text-5xl">FREE</p>
              <p className="text-sm text-cocoa-sub mt-2">初回1時間 無料体験</p>
            </div>
          </ContentCard>
        </ScrollReveal>
      </StorySection>

      {/* Courses — 各カード異なるバリアント */}
      <WaveDivider variant="tornPaper" fillColor="var(--color-cream)" bgColor="var(--color-paper)" />
      <StorySection bg="cream" layout="staggered">
        <ChapterHeading titleEn="COURSES" titleJp="コース一覧" align="center" />
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {courses.map((course, i) => {
            const variants: Array<"tilted" | "stacked" | "torn"> = ["tilted", "stacked", "torn"];
            return (
              <motion.div
                key={course.name}
                className="w-full sm:w-[calc(33%-16px)] min-w-[240px]"
                initial={{ opacity: 0, y: 40, rotate: course.tilt + 5 }}
                whileInView={{ opacity: 1, y: 0, rotate: course.tilt }}
                viewport={{ once: true }}
                transition={{ delay: exponentialStagger(i, 0.12), ...springConfigs.gentle }}
              >
                <ContentCard variant={variants[i]} tiltDegree={course.tilt}>
                  <div className="text-center">
                    <span className="text-4xl block mb-3">{course.emoji}</span>
                    <h3 className="font-display-jp text-lg text-cocoa">{course.name}</h3>
                    <p className="font-display-en font-black text-2xl text-rose mt-3">{course.price}</p>
                    <p className="text-xs text-cocoa-muted mt-2">{course.duration}</p>
                  </div>
                </ContentCard>
              </motion.div>
            );
          })}
        </div>
      </StorySection>

      {/* Discounts */}
      <WaveDivider variant="suitBorder" fillColor="var(--color-paper)" bgColor="var(--color-cream)" />
      <StorySection bg="paper" layout="centered">
        <ChapterHeading titleEn="DISCOUNT" titleJp="セット割引" align="center" />
        <div className="w-full max-w-lg space-y-4 mt-6">
          {discounts.map((d, i) => (
            <ScrollReveal key={i} type="clipWipe" delay={i * 0.15}>
              <div className="flex items-center justify-between p-5 bg-cream" style={{ borderRadius: "8px 16px 12px 20px" }}>
                <span className="font-bold text-cocoa">{d.label}</span>
                <span className="font-display-en font-black text-lg text-rose">{d.detail}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </StorySection>

      {/* CTA */}
      <section className="bg-deep py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <ScrollReveal type="scaleFromCorner">
            <h2 className="font-display-en font-black text-paper" style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)" }}>
              Become a dealer
            </h2>
            <p className="font-display-jp text-paper/80 mt-2">お問い合わせはLINEからお気軽に</p>
            <div className="mt-8">
              <StoryButton href={SNS_LINKS.line} label="LINEで相談する" variant="line" external icon="💬" size="lg" />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
