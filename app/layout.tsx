import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "gamduck",
  description: "게임 할인 정보 모음",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
