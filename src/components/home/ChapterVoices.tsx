"use client";

import { motion } from "framer-motion";
import { ChapterHeading } from "@/components/ui/ChapterHeading";
import { ContentCard } from "@/components/ui/ContentCard";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { CardSuitScatter } from "@/components/decorative/CardSuitScatter";
import { exponentialStagger, springConfigs } from "@/lib/animations";

const voices = [
  {
    quote: "ポーカー初めてだったけど、スタッフさんが優しくて楽しかった！",
    who: "20代女性 / 初来店",
    tilt: -3,
    variant: "tilted" as const,
  },
  {
    quote: "仕事帰りにふらっと寄れるのがいい。常連さんも気さくで居心地が良い。",
    who: "30代男性 / 常連",
    tilt: 2,
    variant: "stacked" as const,
  },
  {
    quote: "友達と来たら盛り上がりすぎて、気づいたら閉店時間でした（笑）",
    who: "20代男性 / 3回目",
    tilt: -1.5,
    variant: "torn" as const,
  },
  {
    quote: "海外でポーカーしたくて練習に。本格的な設備で勉強になります。",
    who: "40代男性 / 月2回",
    tilt: 3,
    variant: "tilted" as const,
  },
];

export function ChapterVoices() {
  return (
    <>
      <WaveDivider
        variant="wave"
        fillColor="var(--color-deep)"
        bgColor="var(--color-paper)"
      />

      <section className="relative bg-deep py-20 md:py-32 overflow-hidden">
        <CardSuitScatter />

        <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8">
          <ChapterHeading
            chapter="Chapter 4"
            titleEn="VOICES"
            titleJp="お客さまの声"
            align="center"
            light
          />

          {/* 散らばったカードレイアウト */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {voices.map((voice, i) => (
              <motion.div
                key={i}
                style={{
                  marginTop: i === 1 ? "40px" : i === 3 ? "20px" : "0",
                }}
                initial={{
                  opacity: 0,
                  y: 50,
                  rotate: voice.tilt + 8,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotate: voice.tilt,
                }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  delay: exponentialStagger(i, 0.12),
                  ...springConfigs.gentle,
                }}
              >
                <ContentCard variant={voice.variant} tiltDegree={voice.tilt}>
                  <blockquote className="text-cocoa leading-relaxed text-sm md:text-base">
                    &ldquo;{voice.quote}&rdquo;
                  </blockquote>
                  <p className="mt-3 text-xs text-cocoa-muted font-handwritten text-lg">
                    — {voice.who}
                  </p>
                </ContentCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
