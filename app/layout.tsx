import type { Metadata, Viewport } from "next";
import './globals.css';

import { base, serif } from '@/app/fonts';

export const metadata: Metadata = {
  title: "gamduck",
  description: "게임 할인 정보 모음",
};

export const viewport: Viewport = {
  width: 'device-width',
  userScalable: false,
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${base.className} ${serif.className}`}>
      <body>{children}</body>
    </html>
  );
}
