"use client";

import { motion } from "framer-motion";
import { PageHero } from "@/components/ui/PageHero";
import { SNS_LINKS } from "@/lib/constants";
import { CTAButton } from "@/components/ui/CTAButton";

const galleryItems = [
  { label: "店内の様子", emoji: "🎰", color: "from-primary/10 to-accent/5" },
  { label: "ポーカーテーブル", emoji: "🃏", color: "from-secondary/10 to-primary/5" },
  { label: "イベント風景", emoji: "🎉", color: "from-accent/10 to-primary/5" },
  { label: "アルパカジノの仲間たち", emoji: "🦙", color: "from-primary/5 to-accent/10" },
  { label: "ドリンクメニュー", emoji: "🍹", color: "from-accent/5 to-secondary/10" },
  { label: "受付・エントランス", emoji: "🚪", color: "from-secondary/5 to-primary/10" },
];

export function GalleryContent() {
  return (
    <>
      <PageHero
        enTitle="GALLERY"
        title="ギャラリー"
        subtitle="アルパカジノの雰囲気をお届けします。"
      />

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" as const }}
              >
                <motion.div
                  className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${item.color} border border-primary/5 flex flex-col items-center justify-center gap-3 cursor-pointer`}
                  whileHover={{ scale: 1.03, y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <span className="text-5xl">{item.emoji}</span>
                  <p className="text-sm font-bold text-secondary">{item.label}</p>
                  <p className="text-xs text-text-muted">写真準備中</p>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center text-sm text-text-muted mt-12"
          >
            ※ 写真は順次追加予定です。最新の様子はSNSでもご覧いただけます。
          </motion.p>

          <div className="flex justify-center mt-6">
            <CTAButton href={SNS_LINKS.instagram} label="Instagramを見る" variant="primary" external />
          </div>
        </div>
      </section>
    </>
  );
}
