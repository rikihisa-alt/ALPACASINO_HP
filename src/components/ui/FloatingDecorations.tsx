"use client";

import { motion } from "framer-motion";

const suits = [
  { char: "♠", color: "text-suit-black" },
  { char: "♥", color: "text-suit-red" },
  { char: "♦", color: "text-suit-red" },
  { char: "♣", color: "text-suit-black" },
];

export function FloatingDecorations() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {suits.map((suit, i) => (
        <motion.span
          key={i}
          className={`absolute text-3xl opacity-[0.07] select-none ${suit.color}`}
          style={{ left: `${15 + i * 22}%`, top: `${8 + i * 18}%` }}
          animate={{ y: [0, -20, 0], rotate: [0, 12, -12, 0] }}
          transition={{
            duration: 4 + i * 0.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {suit.char}
        </motion.span>
      ))}
    </div>
  );
}
