import type { Metadata } from "next";
import { BeginnerContent } from "./content";

export const metadata: Metadata = {
  title: "ポーカービギナー講習",
  description: "ポーカー初心者向けの講習。ルールからマナーまで丁寧にお教えします。初心者専用テーブルもあります。",
};

export default function BeginnerPage() {
  return <BeginnerContent />;
}
