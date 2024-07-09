import type { Metadata, Viewport } from 'next';
import cn from 'classnames';

import '@/app/styles/globals.css';
import { base, serif } from '@/shared/fonts';
import { ReactQueryProvider } from '@/app/providers';
import { PrevPageStoreProvider } from '@/features/restore-prev-page';

export const metadata: Metadata = {
  metadataBase: new URL('https://pixxelgame.com'),
  title: 'Pixxel Game',
  description: '여러 게임 스토어의 할인 정보를 한번에 모아보세요',
  openGraph: {
    title: 'Pixxel Game',
    description: '여러 게임 스토어의 할인 정보를 한번에 모아보세요',
    images: ['/og_v1.png'],
  },
  twitter: {
    title: 'Pixxel Game',
    description: '여러 게임 스토어의 할인 정보를 한번에 모아보세요',
    images: ['/og_v1.png'],
  },
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
    <html lang="ko" className={cn(base.variable, serif.variable)}>
      <body>
        <ReactQueryProvider>
          <PrevPageStoreProvider>
            <div className="page">{children}</div>
          </PrevPageStoreProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
