import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ポーカービギナー講習",
  description: "ポーカー初心者向けの講習。ルールからマナーまで丁寧にお教えします。初心者専用テーブルもあります。",
};

export default function BeginnerPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20">
      <h1 className="font-display text-4xl font-bold text-secondary text-center">
        ポーカービギナー講習
      </h1>
      <p className="mt-4 text-center text-text-secondary">
        準備中です。もうしばらくお待ちください。
      </p>
    </div>
  );
}
