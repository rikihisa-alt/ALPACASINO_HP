import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "はじめての方",
  description: "アルパカジノへようこそ！初めてのご来店ガイド。Waitinglistアプリの使い方や来店フローをご案内します。",
};

export default function NewCustomerPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20">
      <h1 className="font-display text-4xl font-bold text-secondary text-center">
        はじめての方
      </h1>
      <p className="mt-4 text-center text-text-secondary">
        準備中です。もうしばらくお待ちください。
      </p>
    </div>
  );
}
