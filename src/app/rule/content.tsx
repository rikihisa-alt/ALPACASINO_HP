"use client";

import { motion } from "framer-motion";
import { StorySection } from "@/components/ui/StorySection";
import { ContentCard } from "@/components/ui/ContentCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { exponentialStagger, springConfigs } from "@/lib/animations";

type RuleCategory = { title: string; emoji: string; rules: string[] };

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
      "テーブルでの通話はお控えください",
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

const suitIcons = ["♠", "♥", "♦", "♣"];

export function RuleContent() {
  return (
    <>
      {/* Opening — 巻物/羊皮紙風 */}
      <section className="relative min-h-[50vh] flex items-center bg-cream overflow-hidden pt-20">
        <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, scaleY: 0.8, originY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <span className="font-handwritten text-gold text-lg">Rules</span>
            <h1 className="font-display-en font-black text-deep leading-[0.9] mt-2" style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}>
              HOUSE RULES
            </h1>
            <p className="font-display-jp text-cocoa mt-3" style={{ fontSize: "clamp(1rem, 2.5vw, 1.5rem)" }}>ハウスルール</p>
            <p className="text-cocoa-sub mt-4 max-w-lg leading-relaxed">
              みなさまに快適に楽しんでいただくためのルールです。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Rules — 各カテゴリ異なるバリアント */}
      <WaveDivider variant="tornPaper" fillColor="var(--color-paper)" bgColor="var(--color-cream)" />
      <StorySection bg="paper" layout="staggered">
        <div className="space-y-8 md:space-y-10">
          {ruleCategories.map((category, i) => {
            const variants: Array<"stacked" | "tilted" | "torn" | "plain"> = ["stacked", "tilted", "torn", "plain"];
            const tilts = [0, -2, 1.5, 0];
            const marginLeft = [0, "5%", 0, "3%"];
            return (
              <motion.div
                key={category.title}
                style={{ marginLeft: marginLeft[i] }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: exponentialStagger(i, 0.1), ...springConfigs.gentle }}
              >
                <ContentCard variant={variants[i]} tiltDegree={tilts[i]}>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-3xl">{category.emoji}</span>
                    <h3 className="font-display-jp text-lg md:text-xl text-cocoa">{category.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {category.rules.map((rule, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-cocoa-sub">
                        <span
                          className="mt-0.5 flex-shrink-0 text-sm"
                          style={{ color: j % 2 === 0 ? "var(--color-rose)" : "var(--color-deep)" }}
                        >
                          {suitIcons[j % 4]}
                        </span>
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </ContentCard>
              </motion.div>
            );
          })}
        </div>
      </StorySection>

      {/* Note */}
      <WaveDivider variant="wave" fillColor="var(--color-cream)" bgColor="var(--color-paper)" />
      <section className="bg-cream py-12">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <ScrollReveal type="riseUp">
            <p className="text-sm text-cocoa-sub leading-relaxed">
              ルールを守って楽しい時間を過ごしましょう！
              <br />
              ご不明な点はスタッフにお気軽にお尋ねください。
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
