export const STORE_INFO = {
  name: "アルパカジノ",
  nameEn: "ALPACASINO",
  address: "〒542-0083 大阪府大阪市中央区東心斎橋1丁目16-29 つるのすビル4階",
  access: "心斎橋駅 徒歩3分",
  hours: "13:10〜21:10（ラスト3ゲーム）",
  tel: "050-1246-9521",
  email: "alpacasino.info@gmail.com",
} as const

export const SNS_LINKS = {
  line: "https://page.line.me/344pbmmj",
  twitter: "https://x.com/alpacasino",
  instagram: "https://www.instagram.com/alpacasino/",
  tiktok: "https://www.tiktok.com/@user3evwqjrx81",
} as const

export const NAV_LINKS = [
  { href: "/",            label: "ホーム",              en: "Home" },
  { href: "/newcustomer", label: "はじめての方",         en: "First Visit" },
  { href: "/system",      label: "料金システム",         en: "Price" },
  { href: "/access",      label: "アクセス",            en: "Access" },
  { href: "/beginner",    label: "ビギナー講習",         en: "Beginner" },
  { href: "/rule",        label: "ハウスルール",         en: "Rules" },
  { href: "/kaigyou",     label: "開業サポート",         en: "Business" },
  { href: "/gallery",     label: "ギャラリー",           en: "Gallery" },
  { href: "/recruit",     label: "採用情報",            en: "Recruit" },
  { href: "/dealerclass", label: "ディーラーレッスン",    en: "Dealer" },
] as const

export const GALLERY_IMAGES = [
  "9635ef_adb22b4bfbf54530bbdc60f2c2416fc5~mv2.jpg",
  "9635ef_500a056ac4f740758489e533069c4b5b~mv2.jpg",
  "9635ef_ebd0b97dad114d7181a1c49ca528107a~mv2.jpg",
  "9635ef_f114e4877a074e90987764fc97fd03af~mv2.jpg",
  "9635ef_04fc841b3670422aa0011ac613ae2c8e~mv2.jpg",
  "9635ef_3eb65c999c0648c6aecf031eeaaac888~mv2.jpg",
  "9635ef_e1566dda10234712aaec892332ca8e1d~mv2.jpg",
  "9635ef_02b64c52ab2444e196b414d8f483037c~mv2.jpg",
  "9635ef_82a9f08d1190422dacc5dae88ef925fb~mv2.jpg",
  "9635ef_c0412c168e164b569d438dec73423d6c~mv2.jpg",
  "9635ef_d4ce6ee834d74731b3b81315285b9895~mv2.jpg",
  "9635ef_1fe66ab173d84907a383c210a6c01eec~mv2.jpg",
  "9635ef_0de26c63a24f430d843b2ffd74cbe61a~mv2.jpg",
  "9635ef_0b47c6f34a67456b9960c6a786b4f497~mv2.jpg",
  "9635ef_4dd68b56f7c14bd3a7ed8ef787a2f87b~mv2.jpg",
  "9635ef_ae1142ee14ec454d8ed28d7fb63ff9b9~mv2.jpg",
] as const

export function wixImage(id: string, w = 1200, h = 800): string {
  return `https://static.wixstatic.com/media/${id}/v1/fill/w_${w},h_${h},al_c,q_80,enc_avif,quality_auto/img.jpg`
}
