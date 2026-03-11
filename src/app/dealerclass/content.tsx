"use client";

import { motion } from "framer-motion";
import { PageHero } from "@/components/ui/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { CTAButton } from "@/components/ui/CTAButton";
import { SNS_LINKS } from "@/lib/constants";

type Course = {
  name: string;
  price: string;
  duration: string;
  emoji: string;
};

const courses: Course[] = [
  { name: "テキサスホールデム", price: "¥55,000", duration: "目安15時間", emoji: "🃏" },
  { name: "ブラックジャック", price: "¥45,000", duration: "目安10時間", emoji: "🂡" },
  { name: "バカラ", price: "¥45,000", duration: "目安10時間", emoji: "🎴" },
];

const discounts = [
  { label: "2種目セット", detail: "1万円引き" },
  { label: "3種目セット", detail: "¥115,000（3万円お得）" },
];

export function DealerClassContent() {
  return (
    <>
      <PageHero
        enTitle="DEALER LESSON"
        title="ディーラーレッスン"
        subtitle="プロのディーラースキルを基礎から学べます。初回1時間無料体験あり。"
      />

      {/* Free Trial */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="text-center p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-accent/10 to-primary/5 border-2 border-accent/20"
          >
            <span className="inline-block px-4 py-1 bg-accent text-secondary text-xs font-bold rounded-full mb-4">
              まずはお試し
            </span>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-secondary">
              初回無料<span className="text-primary">1時間</span>
            </h3>
            <p className="mt-4 text-text-secondary">
              まずは無料体験でディーラーの世界を覗いてみませんか？
            </p>
            <div className="mt-8">
              <CTAButton href={SNS_LINKS.line} label="無料体験を予約する" variant="line" external />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-20 bg-bg-light">
        <div className="mx-auto max-w-4xl px-4">
          <SectionTitle enTitle="COURSES" title="コース一覧" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {courses.map((course, i) => (
              <AnimatedCard key={i} delay={i * 0.1} className="p-6 text-center">
                <span className="text-4xl block mb-4">{course.emoji}</span>
                <h3 className="text-lg font-bold text-secondary">{course.name}</h3>
                <p className="font-display text-3xl font-bold text-primary mt-3">{course.price}</p>
                <p className="text-sm text-text-muted mt-2">{course.duration}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Discounts */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4">
          <SectionTitle enTitle="DISCOUNT" title="セット割引" />
          <div className="space-y-4">
            {discounts.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" as const }}
                className="flex items-center justify-between p-5 rounded-xl bg-bg-light border border-primary/5"
              >
                <span className="font-bold text-secondary">{d.label}</span>
                <span className="font-display text-lg font-bold text-primary">{d.detail}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-bg-cream">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
          >
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-secondary mb-4">
              お問い合わせ
            </h2>
            <p className="text-text-secondary mb-8">
              お試し無料体験・各コース受講のご相談はLINEからお気軽にどうぞ。
            </p>
            <CTAButton href={SNS_LINKS.line} label="LINEで相談する" variant="line" external />
          </motion.div>
        </div>
      </section>
    </>
  );
}
