import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ディーラーレッスン",
  description: "プロのディーラースキルを学べるレッスン。テキサスホールデム・ブラックジャック・バカラの3コース。初回1時間無料。",
};

export default function DealerClassPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20">
      <h1 className="font-display text-4xl font-bold text-secondary text-center">
        ディーラーレッスン
      </h1>
      <p className="mt-4 text-center text-text-secondary">
        準備中です。もうしばらくお待ちください。
      </p>
    </div>
  );
}
