import type { Metadata } from "next";
import { RecruitContent } from "./content";

export const metadata: Metadata = {
  title: "採用情報",
  description: "アルパカジノの採用情報。週1日〜OK、時給1,130〜1,500円。一緒に楽しい空間を作りませんか？",
};

export default function RecruitPage() {
  return <RecruitContent />;
}
