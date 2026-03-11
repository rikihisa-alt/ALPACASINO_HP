import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "採用情報",
  description: "アルパカジノの採用情報。週1日〜OK、時給1,130〜1,500円。一緒に楽しい空間を作りませんか？",
};

export default function RecruitPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20">
      <h1 className="font-display text-4xl font-bold text-secondary text-center">
        採用情報
      </h1>
      <p className="mt-4 text-center text-text-secondary">
        準備中です。もうしばらくお待ちください。
      </p>
    </div>
  );
}
