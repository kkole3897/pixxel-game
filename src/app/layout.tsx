import type { Metadata, Viewport } from 'next';

import '@/app/styles/globals.css';
import { base, serif } from '@/shared/fonts';
import { ReactQueryProvider } from '@/app/providers';

export const metadata: Metadata = {
  title: 'Pixxel Gamez',
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
    <html lang="ko">
      <body>
        <ReactQueryProvider>
          <div className="page">{children}</div>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
