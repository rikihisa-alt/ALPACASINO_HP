"use client";

import { motion } from "framer-motion";
import { PageHero } from "@/components/ui/PageHero";

type RuleCategory = {
  title: string;
  emoji: string;
  rules: string[];
};

const ruleCategories: RuleCategory[] = [
  {
    title: "基本マナー",
    emoji: "🤝",
    rules: [
      "他のプレイヤーへのリスペクトを忘れずに",
      "ゲーム中の暴言・威圧的な言動は禁止です",
      "ディーラーの判断に従ってください",
      "初心者の方にも優しく接しましょう",
    ],
  },
  {
    title: "ゲーム中のルール",
    emoji: "🃏",
    rules: [
      "ゲーム中のスマートフォン使用はご遠慮ください",
      "テーブルでの通話はお控えください（ロビーをご利用ください）",
      "チップはテーブル上で見えるように置いてください",
      "アクションは口頭で明確に宣言してください",
    ],
  },
  {
    title: "店内ルール",
    emoji: "🏠",
    rules: [
      "飲食物の持ち込みはご遠慮ください",
      "店内は禁煙です（喫煙所あり）",
      "貴重品の管理はご自身でお願いします",
      "スタッフの指示に従ってください",
    ],
  },
  {
    title: "チップについて",
    emoji: "🎰",
    rules: [
      "チップのお預かりが可能です（次回ご来店時に使えます）",
      "チップの譲渡・売買は禁止です",
      "当店はアミューズメント施設のため、換金・景品交換は一切行っておりません",
    ],
  },
];

export function RuleContent() {
  return (
    <>
      <PageHero
        enTitle="HOUSE RULES"
        title="ハウスルール"
        subtitle="みなさまに快適に楽しんでいただくためのルールです。"
      />

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <div className="space-y-10">
            {ruleCategories.map((category, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" as const }}
                className="p-6 sm:p-8 rounded-2xl bg-bg-light border border-primary/5"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl">{category.emoji}</span>
                  <h3 className="font-display text-xl font-bold text-secondary">{category.title}</h3>
                </div>
                <ul className="space-y-3">
                  {category.rules.map((rule, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-text-secondary">
                      <span className="text-primary mt-0.5 flex-shrink-0">♦</span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-16 bg-bg-cream">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm text-text-secondary leading-relaxed"
          >
            ルールを守って楽しい時間を過ごしましょう！
            <br />
            ご不明な点はスタッフにお気軽にお尋ねください。
          </motion.p>
        </div>
      </section>
    </>
  );
}
