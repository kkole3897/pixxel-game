import BaseHeader from '../layouts/base-header';

export default function GameLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <BaseHeader />
      {children}
    </>
  );
}
