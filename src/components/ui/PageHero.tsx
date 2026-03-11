"use client";

import { motion } from "framer-motion";
import { FloatingDecorations } from "./FloatingDecorations";

type PageHeroProps = {
  title: string;
  subtitle: string;
  enTitle?: string;
};

export function PageHero({ title, subtitle, enTitle }: PageHeroProps) {
  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-b from-bg-cream to-bg-light overflow-hidden">
      <FloatingDecorations />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        {enTitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" as const }}
            className="font-display text-sm font-semibold tracking-widest text-primary mb-3"
          >
            {enTitle}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" as const }}
          className="font-display text-4xl sm:text-5xl font-bold text-secondary"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" as const }}
          className="mt-4 text-text-secondary text-base sm:text-lg leading-relaxed"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
