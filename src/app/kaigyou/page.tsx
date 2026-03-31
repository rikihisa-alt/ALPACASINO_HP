import type { Metadata } from "next";
import { KaigyouContent } from "./content";

export const metadata: Metadata = {
  title: "開業サポート",
  description: "アミューズメントカジノの開業をサポート。許認可・物件・内装・採用・集客まで、SET UP CASINOがお手伝いします。",
};

export default function KaigyouPage() {
  return <KaigyouContent />;
}
