import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "開業サポート",
  description: "アミューズメントカジノの開業をサポート。許認可・物件・内装・採用・集客まで、SET UP CASINOがお手伝いします。",
};

export default function KaigyouPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20">
      <h1 className="font-display text-4xl font-bold text-secondary text-center">
        開業サポート
      </h1>
      <p className="mt-4 text-center text-text-secondary">
        準備中です。もうしばらくお待ちください。
      </p>
    </div>
  );
}
