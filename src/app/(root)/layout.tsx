import { BaseHeader, BaseBottomNavigation } from '@/app/layouts';

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
