"use client";

import { motion } from "framer-motion";
import { StorySection } from "@/components/ui/StorySection";
import { ChapterHeading } from "@/components/ui/ChapterHeading";
import { ContentCard } from "@/components/ui/ContentCard";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { springConfigs, exponentialStagger } from "@/lib/animations";

const highlights = [
  {
    icon: "🎰",
    title: "アミューズメントカジノ",
    description: "本物のカジノ機材で本格的な雰囲気を楽しめる、エンターテイメント施設です。",
    variant: "tilted" as const,
    tilt: -3,
  },
  {
    icon: "🔰",
    title: "初心者大歓迎",
    description: "ルールが分からなくても、スタッフが丁寧にお教えします。手ぶらでOK。",
    variant: "stacked" as const,
    tilt: 0,
  },
  {
    icon: "📍",
    title: "心斎橋駅すぐ",
    description: "心斎橋駅から徒歩3分。お仕事帰りや観光のついでにお気軽にどうぞ。",
    variant: "torn" as const,
    tilt: 2,
  },
];

export function ChapterWhatIs() {
  return (
    <>
      <WaveDivider variant="tornPaper" fillColor="var(--color-cream)" bgColor="var(--color-paper)" />

      <StorySection layout="textLeft" bg="cream">
        {/* Text side (60%) */}
        <div>
          <ChapterHeading
            chapter="Chapter 1"
            titleEn="WHAT IS"
            titleJp="アルパカジノって？"
            subtitle="「カジノ」って聞くとちょっと怖い？大丈夫、ここはみんなが笑って遊べるアミューズメント施設。お金を賭けることは一切ありません。"
          />
          <ScrollReveal type="clipWipe" delay={0.3}>
            <p className="text-cocoa-sub leading-relaxed mt-4">
              本格的なカジノ機材を使いながら、チップはすべて遊び用。
              ドリンクを片手に、新しい友達とテーブルを囲む——
              そんな「ちょっと特別な遊び場」です。
            </p>
          </ScrollReveal>
        </div>

        {/* Illustration side (40%) — 3カードを非均一に配置 */}
        <div className="relative min-h-[400px] flex flex-col gap-5">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              style={{
                marginLeft: i === 1 ? "20%" : i === 2 ? "10%" : "0",
              }}
              initial={{ opacity: 0, x: 40, rotate: item.tilt + 5 }}
              whileInView={{ opacity: 1, x: 0, rotate: item.tilt }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: exponentialStagger(i, 0.15),
                ...springConfigs.gentle,
              }}
            >
              <ContentCard variant={item.variant} tiltDegree={item.tilt}>
                <div className="flex items-start gap-3">
                  <span className="text-3xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <h3 className="font-display-jp text-base md:text-lg text-cocoa mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-cocoa-sub leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ContentCard>
            </motion.div>
          ))}
        </div>
      </StorySection>
    </>
  );
}
