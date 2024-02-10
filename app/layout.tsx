import type { Metadata, Viewport } from "next";

import './globals.css';
import { base, serif } from '@/app/fonts';
import { BaseHeader } from './components/base-header';
import { BottomNavigation } from './components/bottom-navigation';

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
    <html lang="ko" className={`${base.variable} ${serif.variable}`}>
      <body>
        <div className="page">
          <BaseHeader />
          <div className="layout">{children}</div>
          <BottomNavigation />
        </div>
      </body>
    </html>
  );
}
