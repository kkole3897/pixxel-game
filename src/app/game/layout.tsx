import { BaseHeader } from '@/widgets/base-header';
import { SearchGameModal } from '@/widgets/search-game-modal';

export default function GameLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <BaseHeader rightSlot={<SearchGameModal />} />
      {children}
    </>
  );
}
