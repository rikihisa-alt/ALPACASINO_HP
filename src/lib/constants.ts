export const STORE_INFO = {
  name: "アルパカジノ",
  nameEn: "ALPA-CASINO",
  address: "〒542-0083 大阪府大阪市中央区東心斎橋1丁目16-29 つるのすビル4階",
  access: "心斎橋駅3分",
  hours: "13:10〜21:10（ラスト3ゲーム）",
  tel: "050-1246-9521",
  email: "alpacasino.info@gmail.com",
} as const;

export const SNS_LINKS = {
  line: "https://page.line.me/344pbmmj",
  twitter: "https://x.com/alpacasino",
  instagram: "https://www.instagram.com/alpacasino/",
  tiktok: "https://www.tiktok.com/@user3evwqjrx81",
} as const;

export const EXTERNAL_LINKS = {
  waitinglistIos: "https://apps.apple.com/jp/app/waitinglist/id6474965583",
  waitinglistAndroid: "https://play.google.com/store/apps/details?id=com.waitinglist.waitinglist",
  recruit: "https://en-gage.net/alpacasino/work_2220711/",
  setupCasino: "https://www.setupcasino.net/",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "ホーム" },
  { href: "/newcustomer", label: "はじめての方" },
  { href: "/system", label: "料金システム" },
  { href: "/beginner", label: "ビギナー講習" },
  { href: "/dealerclass", label: "ディーラーレッスン" },
  { href: "/gallery", label: "ギャラリー" },
  { href: "/recruit", label: "採用情報" },
  { href: "/access", label: "アクセス" },
] as const;
