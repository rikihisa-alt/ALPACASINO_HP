"use client";

import { motion } from "framer-motion";

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  enTitle?: string;
  align?: "center" | "left";
};

export function SectionTitle({ title, subtitle, enTitle, align = "center" }: SectionTitleProps) {
  const textAlign = align === "center" ? "text-center" : "text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" as const }}
      className={`mb-12 ${textAlign}`}
    >
      {enTitle && (
        <p className="font-display text-sm font-semibold tracking-widest text-primary mb-2">
          {enTitle}
        </p>
      )}
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-text-secondary leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
