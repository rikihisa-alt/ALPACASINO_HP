"use client";

import { motion } from "framer-motion";
import { StorySection } from "@/components/ui/StorySection";
import { ContentCard } from "@/components/ui/ContentCard";
import { StoryButton } from "@/components/ui/StoryButton";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { SNS_LINKS } from "@/lib/constants";
import { springConfigs, exponentialStagger } from "@/lib/animations";

const galleryItems = [
  { label: "店内の様子", emoji: "🎰", bg: "from-rose/8 to-gold/5" },
  { label: "ポーカーテーブル", emoji: "🃏", bg: "from-deep/5 to-rose/8" },
  { label: "イベント風景", emoji: "🎉", bg: "from-gold/10 to-rose/5" },
  { label: "アルパカジノの仲間たち", emoji: "🦙", bg: "from-rose/5 to-gold/8" },
  { label: "ドリンクメニュー", emoji: "🍹", bg: "from-gold/5 to-deep/5" },
  { label: "受付・エントランス", emoji: "🚪", bg: "from-deep/5 to-gold/8" },
];

export function GalleryContent() {
  return (
    <>
      {/* Opening — ポラロイド散布 */}
      <section className="relative min-h-[50vh] flex items-center bg-cream overflow-hidden pt-20">
        <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <span className="font-handwritten text-gold text-lg">Photos</span>
            <h1 className="font-display-en font-black text-deep leading-[0.9] mt-2" style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}>
              GALLERY
            </h1>
            <p className="font-display-jp text-cocoa mt-3" style={{ fontSize: "clamp(1rem, 2.5vw, 1.5rem)" }}>ギャラリー</p>
            <p className="text-cocoa-sub mt-4 max-w-lg leading-relaxed">アルパカジノの雰囲気をお届けします。</p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid — ポラロイド風散布レイアウト */}
      <WaveDivider variant="tornPaper" fillColor="var(--color-paper)" bgColor="var(--color-cream)" />
      <StorySection bg="paper" layout="fullWidth">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {galleryItems.map((item, i) => {
            const tilts = [-3, 2, -1.5, 2.5, -2, 1];
            const offsets = [0, 20, 0, 30, 10, 0];
            return (
              <motion.div
                key={i}
                style={{ marginTop: offsets[i] }}
                initial={{ opacity: 0, y: 40, rotate: tilts[i] + 8 }}
                whileInView={{ opacity: 1, y: 0, rotate: tilts[i] }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: exponentialStagger(i, 0.08), ...springConfigs.gentle }}
              >
                <ContentCard variant="polaroid" tiltDegree={tilts[i]}>
                  <div className={`aspect-[4/3] bg-gradient-to-br ${item.bg} flex flex-col items-center justify-center gap-3`}>
                    <span className="text-5xl">{item.emoji}</span>
                    <p className="text-xs text-cocoa-muted">写真準備中</p>
                  </div>
                  <p className="text-center text-sm font-bold text-cocoa mt-2 font-handwritten text-base">{item.label}</p>
                </ContentCard>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          className="text-center text-xs text-cocoa-muted mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          ※ 写真は順次追加予定です。最新の様子はSNSでもご覧いただけます。
        </motion.p>

        <div className="flex justify-center mt-6">
          <StoryButton href={SNS_LINKS.instagram} label="Instagramを見る" variant="primary" external icon="📷" />
        </div>
      </StorySection>
    </>
  );
}
