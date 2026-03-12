"use client";

import { motion } from "framer-motion";
import { StorySection } from "@/components/ui/StorySection";
import { ChapterHeading } from "@/components/ui/ChapterHeading";
import { ContentCard } from "@/components/ui/ContentCard";
import { StoryButton } from "@/components/ui/StoryButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { CardSuitScatter } from "@/components/decorative/CardSuitScatter";
import { EXTERNAL_LINKS } from "@/lib/constants";
import { springConfigs, exponentialStagger } from "@/lib/animations";

const appeals = [
  { emoji: "🃏", title: "ポーカーが好きな仲間と働ける", description: "ポーカーを通じて日々成長できる環境です。" },
  { emoji: "📚", title: "ディーラースキルが身につく", description: "未経験でもイチからディーラー技術を学べます。" },
  { emoji: "🤝", title: "お客様との距離が近い", description: "「ありがとう」の言葉が直接もらえるお仕事です。" },
  { emoji: "⏰", title: "シフトの融通がきく", description: "週1日からOK。学業や他のお仕事との両立も可能です。" },
];

const jobDetails = [
  { label: "勤務形態", value: "シフト制（週1日〜OK）" },
  { label: "時給", value: "¥1,130〜¥1,500" },
  { label: "交通費", value: "500円/日 支給" },
  { label: "勤務地", value: "大阪・心斎橋" },
];

export function RecruitContent() {
  return (
    <>
      {/* Opening */}
      <section className="relative min-h-[60vh] flex items-center bg-cream overflow-hidden pt-20">
        <CardSuitScatter />
        <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <span className="font-handwritten text-gold text-lg">Join us</span>
            <h1 className="font-display-en font-black text-deep leading-[0.9] mt-2" style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}>
              RECRUIT
            </h1>
            <p className="font-display-jp text-cocoa mt-3" style={{ fontSize: "clamp(1rem, 2.5vw, 1.5rem)" }}>採用情報</p>
          </motion.div>
          {/* 手書き注釈 */}
          <motion.div
            className="absolute right-[10%] top-[40%] hidden lg:block font-handwritten text-gold text-xl"
            style={{ rotate: "-8deg" }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ delay: 0.8, ...springConfigs.floaty }}
          >
            一緒に楽しい空間を ✨
          </motion.div>
        </div>
      </section>

      {/* Message */}
      <WaveDivider variant="wave" fillColor="var(--color-paper)" bgColor="var(--color-cream)" />
      <StorySection bg="paper" layout="centered">
        <ScrollReveal type="clipCircle">
          <p className="text-lg text-cocoa-sub leading-relaxed text-center">
            アルパカジノは、
            <span className="font-bold text-cocoa">「アルパカジノで働きたい」</span>
            という想いを持った方を求めています。
            ポーカーが好き、人と接するのが好き、楽しい空間を作りたい。
            そんなあなたをお待ちしています。
          </p>
        </ScrollReveal>
      </StorySection>

      {/* Appeals — 散らばったカード */}
      <WaveDivider variant="tornPaper" fillColor="var(--color-cream)" bgColor="var(--color-paper)" />
      <StorySection bg="cream" layout="staggered">
        <ChapterHeading titleEn="WHY US" titleJp="アルパカジノで働く魅力" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {appeals.map((item, i) => {
            const variants: Array<"tilted" | "stacked" | "torn" | "polaroid"> = ["tilted", "torn", "stacked", "polaroid"];
            const tilts = [-2, 1.5, -1.5, 2];
            return (
              <motion.div
                key={item.title}
                style={{ marginTop: i === 1 ? "24px" : i === 3 ? "12px" : "0" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: exponentialStagger(i, 0.1), ...springConfigs.gentle }}
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

      {/* Job Details */}
      <WaveDivider variant="suitBorder" fillColor="var(--color-paper)" bgColor="var(--color-cream)" />
      <StorySection bg="paper" layout="textLeft">
        <div>
          <ChapterHeading titleEn="DETAILS" titleJp="募集要項" />
          <div className="mt-6">
            <StoryButton href={EXTERNAL_LINKS.recruit} label="応募ページへ" variant="primary" external icon="📝" size="lg" />
          </div>
        </div>
        <ScrollReveal type="rotateIn">
          <ContentCard variant="stacked">
            {jobDetails.map((item, i) => (
              <div key={i} className={`flex items-center justify-between py-4 ${i !== jobDetails.length - 1 ? "border-b border-cream" : ""}`}>
                <span className="text-sm font-bold text-rose">{item.label}</span>
                <span className="text-cocoa font-medium text-sm">{item.value}</span>
              </div>
            ))}
          </ContentCard>
        </ScrollReveal>
      </StorySection>
    </>
  );
}
