import type { Metadata } from "next"
import { Zen_Maru_Gothic, DM_Serif_Display } from "next/font/google"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import "./globals.css"

const zenMaru = Zen_Maru_Gothic({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-body",
  display: "swap",
})

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "ALPACASINO — 心斎橋のアミューズメントポーカールーム",
    template: "%s | ALPACASINO",
  },
  description: "大阪・心斎橋のアミューズメントポーカールーム。初心者歓迎、手ぶらで気軽にポーカーを楽しめます。",
  openGraph: {
    title: "ALPACASINO — 心斎橋のアミューズメントポーカールーム",
    description: "初心者歓迎。手ぶらで気軽にポーカーを楽しめるアミューズメント施設です。",
    locale: "ja_JP",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${zenMaru.variable} ${dmSerif.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
