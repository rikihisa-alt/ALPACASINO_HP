"use client";

import { motion } from "framer-motion";

type StepItemProps = {
  step: number;
  title: string;
  description: string;
  delay?: number;
};

export function StepItem({ step, title, description, delay = 0 }: StepItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay, duration: 0.5, ease: "easeOut" as const }}
      className="flex gap-4 sm:gap-6"
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-display font-bold text-lg">
        {step}
      </div>
      <div className="pt-1">
        <h3 className="text-lg font-bold text-secondary">{title}</h3>
        <p className="mt-1 text-text-secondary text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
