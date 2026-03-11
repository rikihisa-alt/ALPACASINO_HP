"use client";

import { motion } from "framer-motion";

type AnimatedCardProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

export function AnimatedCard({ children, delay = 0, className = "" }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay, duration: 0.5, ease: "easeOut" as const }}
    >
      <motion.div
        className={`rounded-2xl bg-white border border-primary/5 shadow-sm ${className}`}
        whileHover={{ scale: 1.02, y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
