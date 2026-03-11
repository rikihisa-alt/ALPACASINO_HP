import type { Metadata } from "next";
import { RuleContent } from "./content";

export const metadata: Metadata = {
  title: "ハウスルール",
  description: "アルパカジノのハウスルール。快適に遊んでいただくためのルールをご案内します。",
};

export default function RulePage() {
  return <RuleContent />;
}
