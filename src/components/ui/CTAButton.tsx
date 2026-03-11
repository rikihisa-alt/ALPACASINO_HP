"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type CTAButtonProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "line";
  external?: boolean;
};

export function CTAButton({ href, label, variant = "primary", external = false }: CTAButtonProps) {
  const styles = {
    primary: "bg-primary text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30",
    secondary: "bg-secondary text-white shadow-lg shadow-secondary/25",
    line: "bg-[#06C755] text-white shadow-lg shadow-[#06C755]/25",
  };

  const linkProps = external ? { target: "_blank" as const, rel: "noopener noreferrer" } : {};

  return (
    <Link href={href} {...linkProps}>
      <motion.span
        className={`inline-block px-8 py-4 font-bold rounded-full text-base transition-shadow cursor-pointer ${styles[variant]}`}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {label}
      </motion.span>
    </Link>
  );
}
