import { BaseHeader, BaseBottomNavigation } from '@/src/app/layouts';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <BaseHeader />
      <div className="layout">{children}</div>
      <BaseBottomNavigation />
    </>
  );
}
