"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { springConfigs, hoverEffects } from "@/lib/animations";

type ButtonVariant = "primary" | "secondary" | "line" | "ghost";
type ButtonSize = "md" | "lg";

interface StoryButtonProps {
  href: string;
  label: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  external?: boolean;
  icon?: string;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-rose text-white hover:bg-rose-dark shadow-[4px_4px_0_var(--color-rose-dark)]",
  secondary:
    "bg-transparent text-cocoa border-2 border-cocoa hover:bg-cocoa hover:text-paper",
  line: "bg-line text-white hover:brightness-110 shadow-[4px_4px_0_#049E42]",
  ghost:
    "bg-transparent text-cocoa-sub hover:text-cocoa underline decoration-gold underline-offset-4",
};

const sizeStyles: Record<ButtonSize, string> = {
  md: "px-6 py-3 text-sm md:text-base",
  lg: "px-8 py-4 text-base md:text-lg",
};

/**
 * ストーリーボタン — 有機的角丸・影付き・Spring物理
 * テンプレ的な丸角ボタンではなく、手作り感のあるUI
 */
export function StoryButton({
  href,
  label,
  variant = "primary",
  size = "md",
  external = false,
  icon,
  className = "",
}: StoryButtonProps) {
  const isGhost = variant === "ghost";

  const content = (
    <motion.span
      className={`
        inline-flex items-center gap-2 font-bold
        ${isGhost ? "" : "rounded-[8px_16px_12px_20px]"}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        cursor-pointer
        transition-colors duration-200
        ${className}
      `}
      whileHover={isGhost ? undefined : { ...hoverEffects.lift, rotate: -1 }}
      whileTap={{ scale: 0.97 }}
      transition={springConfigs.snappy}
    >
      {icon && <span className="text-lg">{icon}</span>}
      {label}
    </motion.span>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return <Link href={href}>{content}</Link>;
}
