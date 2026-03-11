import type { Metadata } from "next";
import { Zen_Maru_Gothic, Fredoka } from "next/font/google";
import { Header, Footer } from "@/components/layout";
import "./globals.css";

const zenMaruGothic = Zen_Maru_Gothic({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-zen-maru",
  display: "swap",
});

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fredoka",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "アルパカジノ | 大阪・心斎橋のアミューズメントカジノ",
    template: "%s | アルパカジノ",
  },
  description:
    "大阪・心斎橋のアミューズメントカジノ「アルパカジノ」。初心者大歓迎！ポーカーをはじめ、楽しいカジノゲームを体験できます。心斎橋駅から徒歩3分。",
  keywords: [
    "アルパカジノ",
    "アミューズメントカジノ",
    "ポーカー",
    "心斎橋",
    "大阪",
    "テキサスホールデム",
    "初心者",
  ],
  openGraph: {
    title: "アルパカジノ | 大阪・心斎橋のアミューズメントカジノ",
    description:
      "初心者大歓迎！ポーカーをはじめ、楽しいカジノゲームを体験できます。心斎橋駅から徒歩3分。",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${zenMaruGothic.variable} ${fredoka.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
