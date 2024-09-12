import { BaseHeader } from '@/widgets/base-header';

export default function PolicyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <BaseHeader />
      <div className="layout">{children}</div>
    </>
  );
}
