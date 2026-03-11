import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ギャラリー",
  description: "アルパカジノの店内写真やイベントの様子をご紹介します。",
};

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20">
      <h1 className="font-display text-4xl font-bold text-secondary text-center">
        ギャラリー
      </h1>
      <p className="mt-4 text-center text-text-secondary">
        準備中です。もうしばらくお待ちください。
      </p>
    </div>
  );
}
