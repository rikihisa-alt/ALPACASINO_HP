"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { StorySection } from "@/components/ui/StorySection";
import { ChapterHeading } from "@/components/ui/ChapterHeading";
import { ContentCard } from "@/components/ui/ContentCard";
import { FlowStep } from "@/components/ui/FlowStep";
import { StoryButton } from "@/components/ui/StoryButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { STORE_INFO, SNS_LINKS } from "@/lib/constants";

const accessSteps = [
  { title: "心斎橋駅 6番出口を出る", description: "地下鉄御堂筋線・長堀鶴見緑地線の心斎橋駅が最寄りです。" },
  { title: "東へ向かう", description: "御堂筋を背にして心斎橋筋商店街方面へ進みます。" },
  { title: "東心斎橋の通りへ", description: "東心斎橋の通りを進んでください。" },
  { title: "つるのすビル4階", description: "つるのすビルの4階がアルパカジノです。" },
];

export function AccessContent() {
  return (
    <>
      {/* Opening */}
      <section className="relative min-h-[50vh] flex items-center bg-cream overflow-hidden pt-20">
        <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <span className="font-handwritten text-gold text-lg">Find us</span>
            <h1 className="font-display-en font-black text-deep leading-[0.9] mt-2" style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}>
              ACCESS
            </h1>
            <p className="font-display-jp text-cocoa mt-3" style={{ fontSize: "clamp(1rem, 2.5vw, 1.5rem)" }}>アクセス</p>
            <p className="text-cocoa-sub mt-4">心斎橋駅から徒歩3分。お気軽にお越しください。</p>
          </motion.div>
        </div>
      </section>

      {/* Map + Info */}
      <WaveDivider variant="wave" fillColor="var(--color-paper)" bgColor="var(--color-cream)" />
      <StorySection bg="paper" layout="textLeft">
        <div>
          <ChapterHeading titleEn="MAP" titleJp="地図" />
          <ScrollReveal type="clipCircle">
            <div className="overflow-hidden" style={{ borderRadius: "16px 28px 20px 32px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.424!2d135.5055!3d34.6725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e7157f1c1e8d%3A0x0!2z44Ki44Or44OR44Kr44K444OO!5e0!3m2!1sja!2sjp!4v1"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="アルパカジノ Google Map"
                className="grayscale-[30%] contrast-[1.1]"
              />
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal type="rotateIn" delay={0.2}>
          <ContentCard variant="stacked">
            <h3 className="font-display-en font-black text-lg text-deep mb-4">Store Info</h3>
            <dl className="space-y-3">
              {[
                { label: "店舗名", value: `${STORE_INFO.name}（${STORE_INFO.nameEn}）`, icon: "🦙" },
                { label: "住所", value: STORE_INFO.address, icon: "📍" },
                { label: "営業時間", value: STORE_INFO.hours, icon: "🕐" },
                { label: "電話", value: STORE_INFO.tel, icon: "📞", href: `tel:${STORE_INFO.tel}` },
                { label: "メール", value: STORE_INFO.email, icon: "✉️", href: `mailto:${STORE_INFO.email}` },
              ].map((info) => (
                <div key={info.label} className="flex items-start gap-3">
                  <span className="text-lg flex-shrink-0">{info.icon}</span>
                  <div>
                    <dt className="text-xs text-cocoa-muted">{info.label}</dt>
                    <dd className="text-sm text-cocoa">
                      {info.href ? (
                        <Link href={info.href} className="hover:text-rose transition-colors">
                          {info.value}
                        </Link>
                      ) : (
                        info.value
                      )}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
            <div className="mt-6">
              <StoryButton href={SNS_LINKS.line} label="LINEで予約" variant="line" external icon="💬" />
            </div>
          </ContentCard>
        </ScrollReveal>
      </StorySection>

      {/* Directions */}
      <WaveDivider variant="suitBorder" fillColor="var(--color-cream)" bgColor="var(--color-paper)" />
      <StorySection bg="cream" layout="fullWidth">
        <ChapterHeading titleEn="DIRECTIONS" titleJp="道順" subtitle="心斎橋駅から徒歩約3分です。" align="center" />
        <div className="max-w-2xl mx-auto mt-8">
          {accessSteps.map((step, i) => (
            <FlowStep key={step.title} step={i + 1} title={step.title} description={step.description} index={i} isLast={i === accessSteps.length - 1} />
          ))}
        </div>
      </StorySection>

      {/* Note */}
      <section className="bg-paper-mid py-10">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <p className="text-xs text-cocoa-muted">
            ※当店はアミューズメント施設です。換金・景品交換は一切行っておりません。
          </p>
        </div>
      </section>
    </>
  );
}
