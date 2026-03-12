"use client";

import { motion } from "framer-motion";
import { StoryButton } from "@/components/ui/StoryButton";
import { springConfigs } from "@/lib/animations";

export function ClosingCTA() {
  return (
    <section className="relative bg-deep py-16 md:py-20 overflow-hidden">
      {/* 装飾スーツ */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {["♠", "♥", "♦", "♣"].map((suit, i) => (
          <motion.span
            key={i}
            className="absolute opacity-[0.06]"
            style={{
              left: `${15 + i * 22}%`,
              top: `${20 + (i % 2) * 40}%`,
              fontSize: 40 + i * 10,
              color:
                suit === "♥" || suit === "♦"
                  ? "var(--color-rose)"
                  : "var(--color-paper)",
            }}
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut" as const,
            }}
          >
            {suit}
          </motion.span>
        ))}
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-5 text-center">
        <motion.h2
          className="font-display-en font-black text-paper leading-[0.9]"
          style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        >
          Ready to play?
        </motion.h2>

        <motion.p
          className="font-display-jp text-paper/80 mt-3 md:mt-4"
          style={{ fontSize: "clamp(0.9rem, 2vw, 1.2rem)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          あなたの物語が、ここから始まります
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, ...springConfigs.gentle }}
        >
          <StoryButton
            href="/newcustomer"
            label="はじめての方へ"
            variant="primary"
            size="lg"
            icon="✨"
          />
          <StoryButton
            href="/system"
            label="料金を確認する"
            variant="ghost"
            className="!text-paper/70 !decoration-gold"
          />
        </motion.div>
      </div>
    </section>
  );
}
