import type { Metadata } from "next";
import { DealerClassContent } from "./content";

export const metadata: Metadata = {
  title: "ディーラーレッスン",
  description: "プロのディーラースキルを学べるレッスン。テキサスホールデム・ブラックジャック・バカラの3コース。初回1時間無料。",
};

export default function DealerClassPage() {
  return <DealerClassContent />;
}
