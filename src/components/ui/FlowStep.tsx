"use client";

import { motion } from "framer-motion";
import { springConfigs, exponentialStagger } from "@/lib/animations";

interface FlowStepProps {
  step: number;
  title: string;
  description: string;
  index: number;
  /** 最後のステップかどうか（接続線の表示制御） */
  isLast?: boolean;
}

/**
 * フローステップ — ストーリー型
 * 大きな番号 + 手書きラベル + 本文のレイアウト
 * SVGパス接続で物語の流れを表現
 */
export function FlowStep({
  step,
  title,
  description,
  index,
  isLast = false,
}: FlowStepProps) {
  const delay = exponentialStagger(index, 0.12);
  const isEven = index % 2 === 0;

  return (
    <div className="relative">
      <motion.div
        className={`flex items-start gap-5 md:gap-8 ${
          isEven ? "" : "md:flex-row-reverse md:text-right"
        }`}
        initial={{ opacity: 0, x: isEven ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ delay, ...springConfigs.gentle }}
      >
        {/* Step number */}
        <div className="flex-shrink-0">
          <motion.div
            className="w-14 h-14 md:w-18 md:h-18 bg-rose text-white flex items-center justify-center font-display-en font-black text-2xl md:text-3xl"
            style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={springConfigs.bouncy}
          >
            {step}
          </motion.div>
        </div>

        {/* Content */}
        <div className="pt-1">
          <h3 className="font-display-jp text-lg md:text-xl mb-2 text-cocoa">
            {title}
          </h3>
          <p className="text-cocoa-sub leading-relaxed text-sm md:text-base">
            {description}
          </p>
        </div>
      </motion.div>

      {/* 接続線（SVG曲線） */}
      {!isLast && (
        <motion.svg
          className={`w-full h-12 md:h-16 my-2 ${isEven ? "" : "scale-x-[-1]"}`}
          viewBox="0 0 200 40"
          preserveAspectRatio="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.3 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.3, duration: 0.8 }}
        >
          <motion.path
            d="M 30 5 Q 100 35 170 5"
            fill="none"
            stroke="var(--color-gold)"
            strokeWidth="2"
            strokeDasharray="6 4"
          />
        </motion.svg>
      )}
    </div>
  );
}
