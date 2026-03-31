"use client";

import { motion } from "framer-motion";
import { StorySection } from "@/components/ui/StorySection";
import { ChapterHeading } from "@/components/ui/ChapterHeading";
import { ContentCard } from "@/components/ui/ContentCard";
import { StoryButton } from "@/components/ui/StoryButton";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { STORE_INFO, SNS_LINKS } from "@/lib/constants";

export function ChapterVisitUs() {
  return (
    <>
      <WaveDivider
        variant="tornPaper"
        fillColor="var(--color-cream)"
        bgColor="var(--color-deep)"
      />

      <StorySection layout="textLeft" bg="cream">
        {/* Left side: Map */}
        <div>
          <ChapterHeading
            chapter="Chapter 5"
            titleEn="VISIT US"
            titleJp="遊びに来てね"
          />

          <ScrollReveal type="clipCircle">
            <motion.div
              className="relative overflow-hidden mt-6"
              style={{ borderRadius: "16px 28px 20px 32px" }}
              whileHover={{ rotate: 0 }}
              initial={{ rotate: -1 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.4!2d135.505!3d34.672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDQwJzE5LjIiTiAxMzXCsDMwJzE4LjAiRQ!5e0!3m2!1sja!2sjp!4v1"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="アルパカジノ 地図"
                className="grayscale-[30%] contrast-[1.1]"
              />
            </motion.div>
          </ScrollReveal>
        </div>

        {/* Right side: Store info card */}
        <div className="flex flex-col gap-6">
          <ScrollReveal type="rotateIn" delay={0.2}>
            <ContentCard variant="stacked">
              <h3 className="font-display-en font-black text-xl text-deep mb-4">
                Store Info
              </h3>
              <dl className="space-y-3">
                {[
                  { label: "住所", value: STORE_INFO.address, icon: "📍" },
                  { label: "営業時間", value: STORE_INFO.hours, icon: "🕐" },
                  { label: "アクセス", value: STORE_INFO.access, icon: "🚶" },
                  { label: "電話", value: STORE_INFO.tel, icon: "📞" },
                ].map((info) => (
                  <div key={info.label} className="flex items-start gap-3">
                    <span className="text-lg flex-shrink-0">{info.icon}</span>
                    <div>
                      <dt className="text-xs text-cocoa-muted">
                        {info.label}
                      </dt>
                      <dd className="text-sm text-cocoa">{info.value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </ContentCard>
          </ScrollReveal>

          <ScrollReveal type="riseUp" delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-3">
              <StoryButton
                href={SNS_LINKS.line}
                label="LINEで予約する"
                variant="line"
                icon="💬"
                external
                size="lg"
              />
              <StoryButton
                href="/access"
                label="アクセス詳細"
                variant="ghost"
              />
            </div>
          </ScrollReveal>
        </div>
      </StorySection>
    </>
  );
}
