import { RequestNewGameFunnel } from '@/widgets/request-new-game-funnel';
import { GeneratedStoreIdentifierStoreProvider } from '@/features/request-new-game';

export default function RequestNewGamePage() {
  return (
    <GeneratedStoreIdentifierStoreProvider>
      <RequestNewGameFunnel />
    </GeneratedStoreIdentifierStoreProvider>
  );
}
