import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "料金システム",
  description: "アルパカジノの料金システム。目安3,380円から遊べます。平日・土日祝の料金やビギナーセットをご紹介。",
};

export default function SystemPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20">
      <h1 className="font-display text-4xl font-bold text-secondary text-center">
        料金システム
      </h1>
      <p className="mt-4 text-center text-text-secondary">
        準備中です。もうしばらくお待ちください。
      </p>
    </div>
  );
}
