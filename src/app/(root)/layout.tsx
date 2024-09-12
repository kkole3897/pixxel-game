import { BaseBottomNavigation } from '@/app/layouts';
import { BaseHeader } from '@/widgets/base-header';
import { SearchGameModal } from '@/widgets/search-game-modal';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <BaseHeader rightSlot={<SearchGameModal />} />
      <div className="layout">{children}</div>
      <BaseBottomNavigation />
    </>
  );
}
