import type { Metadata } from "next";
import { Inter_Tight, Manrope } from "next/font/google";
import "./globals.css";

const display = Inter_Tight({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700", "800", "900"],
  variable: "--font-display",
});

const body = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Figure Craft — преміум 3D фігурки на замовлення",
  description:
    "Студія колекційних 3D фігурок по всесвітам кіно, ігор та коміксів.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
