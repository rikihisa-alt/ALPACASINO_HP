import type { Metadata } from "next";
import { GalleryContent } from "./content";

export const metadata: Metadata = {
  title: "ギャラリー",
  description: "アルパカジノの店内写真やイベントの様子をご紹介します。",
};

export default function GalleryPage() {
  return <GalleryContent />;
}
