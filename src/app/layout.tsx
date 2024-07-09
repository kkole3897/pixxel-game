import type { Metadata, Viewport } from 'next';
import cn from 'classnames';

import '@/app/styles/globals.css';
import { base, serif } from '@/shared/fonts';
import { ReactQueryProvider } from '@/app/providers';
import { PrevPageStoreProvider } from '@/features/restore-prev-page';

export const metadata: Metadata = {
  title: 'Pixxel Game',
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
