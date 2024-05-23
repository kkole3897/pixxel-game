import { KakaoSdkScript } from '@/shared/ui/kakao-sdk-script';

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
