import type { Metadata } from "next";
import { SystemContent } from "./content";

export const metadata: Metadata = {
  title: "料金システム",
  description: "アルパカジノの料金システム。目安3,380円から遊べます。平日・土日祝の料金やビギナーセットをご紹介。",
};

export default function SystemPage() {
  return <SystemContent />;
}
