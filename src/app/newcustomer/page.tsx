import type { Metadata } from "next";
import { NewCustomerContent } from "./content";

export const metadata: Metadata = {
  title: "はじめての方",
  description: "アルパカジノへようこそ！初めてのご来店ガイド。Waitinglistアプリの使い方や来店フローをご案内します。",
};

export default function NewCustomerPage() {
  return <NewCustomerContent />;
}
