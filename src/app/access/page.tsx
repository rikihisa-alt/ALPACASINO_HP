import type { Metadata } from "next";
import { AccessContent } from "./content";

export const metadata: Metadata = {
  title: "アクセス",
  description: "アルパカジノへのアクセス。心斎橋駅から徒歩3分。大阪市中央区東心斎橋1丁目16-29 つるのすビル4階。",
};

export default function AccessPage() {
  return <AccessContent />;
}
