"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FloatingDecorations } from "@/components/ui/FloatingDecorations";
import { STORE_INFO } from "@/lib/constants";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-bg-cream to-bg-light">
      <FloatingDecorations />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center px-4 max-w-3xl mx-auto"
      >
        <motion.p
          variants={item}
          className="text-sm font-medium text-primary tracking-widest mb-4"
        >
          大阪・心斎橋のアミューズメントカジノ
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-secondary leading-tight"
        >
          ALPA-CASINO
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-2 font-display text-lg sm:text-xl text-primary font-medium"
        >
          {STORE_INFO.name}
        </motion.p>

        <motion.p
          variants={item}
          className="mt-6 text-base sm:text-lg text-text-secondary leading-relaxed max-w-xl mx-auto"
        >
          ポーカー初心者も大歓迎！
          <br className="sm:hidden" />
          心斎橋駅から徒歩3分の
          <br className="sm:hidden" />
          アミューズメントカジノです。
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/newcustomer">
            <motion.span
              className="inline-block px-8 py-4 bg-primary text-white font-bold rounded-full text-base shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-shadow cursor-pointer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              はじめての方はこちら
            </motion.span>
          </Link>
          <Link href="/system">
            <motion.span
              className="inline-block px-8 py-4 bg-white text-secondary font-bold rounded-full text-base border-2 border-secondary/10 hover:border-primary/30 transition-colors cursor-pointer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              料金システム
            </motion.span>
          </Link>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-8 flex items-center justify-center gap-6 text-sm text-text-muted"
        >
          <span>♠ ポーカー</span>
          <span>♥ 初心者歓迎</span>
          <span>♦ {STORE_INFO.access}</span>
          <span className="hidden sm:inline">♣ {STORE_INFO.hours}</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
