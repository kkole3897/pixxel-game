import type { Metadata, Viewport } from 'next';

import '@/src/app/styles/globals.css';
import { base, serif } from '@/src/app/fonts';
import { BaseHeader, BaseBottomNavigation } from '@/src/app/layouts';
import { ReactQueryProvider } from '@/src/app/providers';

export const metadata: Metadata = {
  title: 'gamduck',
  description: '게임 할인 정보 모음',
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
        <ReactQueryProvider>
          <div className="page">
            <BaseHeader />
            <div className="layout">{children}</div>
            <BaseBottomNavigation />
          </div>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
