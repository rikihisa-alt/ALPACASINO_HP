"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChapterHeading } from "@/components/ui/ChapterHeading";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { springConfigs } from "@/lib/animations";

const experiences = [
  {
    emoji: "🃏",
    title: "テキサスホールデム",
    subtitle: "Texas Hold'em",
    description: "世界で最も人気のあるポーカー。2枚の手札と5枚の共通カードで勝負する、奥深い心理戦。",
    bgColor: "from-rose/10 to-transparent",
  },
  {
    emoji: "🎲",
    title: "トーナメント",
    subtitle: "Tournaments",
    description: "定期開催のトーナメントで腕試し。初心者向けのビギナートーナメントも毎週開催中。",
    bgColor: "from-gold/10 to-transparent",
  },
  {
    emoji: "🍸",
    title: "ドリンク＆空間",
    subtitle: "Drinks & Atmosphere",
    description: "おしゃれな店内でドリンクを楽しみながらプレイ。落ち着いた空間で、ゆっくりと過ごせます。",
    bgColor: "from-deep/5 to-transparent",
  },
  {
    emoji: "👥",
    title: "コミュニティ",
    subtitle: "Community",
    description: "常連さんから初心者まで、ポーカーを通じて新しい仲間との出会いが生まれる場所。",
    bgColor: "from-rose/10 to-transparent",
  },
];

/**
 * Chapter 2: EXPERIENCE — 横スクロールショーケース
 * デスクトップ: スティッキー横スクロール
 * モバイル: 縦スタッガーレイアウト
 */
export function ChapterExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <>
      <WaveDivider variant="wave" fillColor="var(--color-paper-mid)" bgColor="var(--color-cream)" />

      <section className="bg-paper-mid paper-texture">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <ChapterHeading
            chapter="Chapter 2"
            titleEn="EXPERIENCE"
            titleJp="アルパカジノの楽しみ方"
          />
        </div>

        {/* Desktop: Horizontal scroll */}
        <div ref={containerRef} className="hidden lg:block relative h-[300vh]">
          <div className="sticky top-0 h-screen flex items-center overflow-hidden">
            <motion.div className="flex gap-8 pl-[10vw]" style={{ x }}>
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.title}
                  className={`flex-shrink-0 w-[70vw] max-w-[500px] bg-gradient-to-br ${exp.bgColor} bg-paper p-8 md:p-12 relative`}
                  style={{
                    borderRadius: "20px 32px 24px 36px",
                    rotate: i % 2 === 0 ? -1 : 1.5,
                  }}
                  whileHover={{ rotate: 0, scale: 1.02, y: -10 }}
                  transition={springConfigs.gentle}
                >
                  <span className="text-5xl md:text-6xl block mb-6">
                    {exp.emoji}
                  </span>
                  <span className="font-handwritten text-gold text-sm">
                    {exp.subtitle}
                  </span>
                  <h3 className="font-display-jp text-xl md:text-2xl text-cocoa mt-1 mb-4">
                    {exp.title}
                  </h3>
                  <p className="text-cocoa-sub leading-relaxed text-sm md:text-base">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Mobile: Vertical staggered */}
        <div className="lg:hidden px-5 pb-16 space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              className={`bg-gradient-to-br ${exp.bgColor} bg-paper p-6 relative`}
              style={{
                borderRadius: "16px 24px 20px 28px",
                marginLeft: i % 2 === 0 ? "0" : "8%",
                marginRight: i % 2 === 0 ? "8%" : "0",
              }}
              initial={{ opacity: 0, y: 30, rotate: i % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -1 : 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, ...springConfigs.gentle }}
            >
              <span className="text-4xl block mb-4">{exp.emoji}</span>
              <span className="font-handwritten text-gold text-sm">
                {exp.subtitle}
              </span>
              <h3 className="font-display-jp text-lg text-cocoa mt-1 mb-3">
                {exp.title}
              </h3>
              <p className="text-cocoa-sub leading-relaxed text-sm">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
