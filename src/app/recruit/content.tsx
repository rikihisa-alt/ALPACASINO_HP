"use client";

import { motion } from "framer-motion";
import { PageHero } from "@/components/ui/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { CTAButton } from "@/components/ui/CTAButton";
import { EXTERNAL_LINKS } from "@/lib/constants";

const jobDetails = [
  { label: "勤務形態", value: "シフト制（週1日〜OK）" },
  { label: "時給", value: "¥1,130〜¥1,500" },
  { label: "交通費", value: "500円/日 支給" },
  { label: "勤務地", value: "大阪・心斎橋" },
];

const appeals = [
  { emoji: "🃏", title: "ポーカーが好きな仲間と働ける", description: "ポーカーを通じて日々成長できる環境です。" },
  { emoji: "📚", title: "ディーラースキルが身につく", description: "未経験でもイチからディーラー技術を学べます。" },
  { emoji: "🤝", title: "お客様との距離が近い", description: "「ありがとう」の言葉が直接もらえるお仕事です。" },
  { emoji: "⏰", title: "シフトの融通がきく", description: "週1日からOK。学業や他のお仕事との両立も可能です。" },
];

export function RecruitContent() {
  return (
    <>
      <PageHero
        enTitle="RECRUIT"
        title="採用情報"
        subtitle="アルパカジノで一緒に楽しい空間を作りませんか？"
      />

      {/* Message */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="text-center"
          >
            <p className="text-lg text-text-secondary leading-relaxed">
              アルパカジノは、
              <span className="font-bold text-secondary">「アルパカジノで働きたい」</span>
              という想いを持った方を求めています。
              ポーカーが好き、人と接するのが好き、楽しい空間を作りたい。
              そんなあなたをお待ちしています。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Appeals */}
      <section className="py-20 bg-bg-light">
        <div className="mx-auto max-w-4xl px-4">
          <SectionTitle enTitle="APPEAL" title="アルパカジノで働く魅力" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {appeals.map((item, i) => (
              <AnimatedCard key={i} delay={i * 0.1} className="p-6">
                <span className="text-3xl block mb-3">{item.emoji}</span>
                <h3 className="text-base font-bold text-secondary mb-1">{item.title}</h3>
                <p className="text-sm text-text-secondary">{item.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Job Details */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4">
          <SectionTitle enTitle="DETAILS" title="募集要項" />
          <div className="bg-bg-light rounded-2xl overflow-hidden border border-primary/5">
            {jobDetails.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4, ease: "easeOut" as const }}
                className={`flex items-center justify-between px-6 py-5 ${
                  i !== jobDetails.length - 1 ? "border-b border-white" : ""
                }`}
              >
                <span className="text-sm font-bold text-primary">{item.label}</span>
                <span className="text-secondary font-medium">{item.value}</span>
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
              応募はこちら
            </h2>
            <p className="text-text-secondary mb-8">
              詳しい募集内容・応募フォームは外部サイトからご確認いただけます。
            </p>
            <CTAButton href={EXTERNAL_LINKS.recruit} label="応募ページへ" variant="primary" external />
          </motion.div>
        </div>
      </section>
    </>
  );
}
