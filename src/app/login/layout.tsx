import { KakaoSdkScript } from '@/shared/ui';

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <KakaoSdkScript />
      {children}
    </>
  );
}
