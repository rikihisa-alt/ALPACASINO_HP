"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Feature = {
  emoji: string;
  title: string;
  description: string;
  href: string;
  linkLabel: string;
};

const features: Feature[] = [
  {
    emoji: "🃏",
    title: "初心者大歓迎",
    description:
      "ルールがわからなくても大丈夫。スタッフが丁寧にお教えします。初心者専用テーブルもあります。",
    href: "/newcustomer",
    linkLabel: "はじめての方",
  },
  {
    emoji: "🎓",
    title: "ビギナー講習",
    description:
      "ポーカーのルールからマナーまで、初心者向けの講習をご用意。実際のテーブルで楽しく学べます。",
    href: "/beginner",
    linkLabel: "講習について",
  },
  {
    emoji: "💰",
    title: "お手頃料金",
    description:
      "目安3,380円から遊べます。ポーカービギナーセットなら3,500円で初心者限定テーブルを体験。",
    href: "/system",
    linkLabel: "料金を見る",
  },
  {
    emoji: "🎰",
    title: "ディーラーレッスン",
    description:
      "プロのディーラースキルを学べるレッスン。初回1時間無料でお試しいただけます。",
    href: "/dealerclass",
    linkLabel: "レッスン詳細",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary">
            ALPA-CASINO の特徴
          </h2>
          <p className="mt-4 text-text-secondary">
            楽しい × 学べる × お手頃。それがアルパカジノ。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: i * 0.1,
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              <motion.div
                className="h-full p-6 rounded-2xl bg-bg-light border border-primary/5 flex flex-col"
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <span className="text-4xl mb-4 block">{feature.emoji}</span>
                <h3 className="text-lg font-bold text-secondary mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed flex-1">
                  {feature.description}
                </p>
                <Link
                  href={feature.href}
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark transition-colors"
                >
                  {feature.linkLabel}
                  <span className="ml-1">→</span>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
