import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from '@tanstack/react-query';

import * as styles from './page.css';
import { GameDescription, PriceHistoryFetcher } from '@/widgets/game-detail';
import { Core } from '@/shared/api';
import { createClient } from '@/shared/lib/supabase/server';
import { gameQueryKeys } from '@/entities/game';
import { GameCatalogSection, ReviewSection } from '@/widgets/game-detail';
import { wishListQueryKeys } from '@/entities/wish-list';

export default async function GameDetailPage({
  params,
}: {
  params: { gameId: string };
}) {
  const core = new Core(createClient());
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: gameQueryKeys.detail(params.gameId).queryKey,
    queryFn: () => core.games.getGame(params.gameId),
  });
  await queryClient.prefetchQuery({
    queryKey: gameQueryKeys.lowestPriceRanks(params.gameId).queryKey,
    queryFn: () => core.games.getLowestPriceRanks(params.gameId),
  });
  await queryClient.prefetchQuery({
    queryKey: wishListQueryKeys.getWishlistItemByGamePublicId(params.gameId)
      .queryKey,
    queryFn: () => core.wishlist.getWishlistItemByGamePublicId(params.gameId),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className={styles.container}>
        <GameCatalogSection
          gamePublicId={params.gameId}
          className={styles.contentBox}
        />
        <section className={styles.contentBox}>
          <h3 className={styles.contentTitle}>최저가추이</h3>
          <PriceHistoryFetcher gamePublicId={params.gameId} />
        </section>
        <section className={styles.contentBox}>
          <h3 className={styles.contentTitle}>게임 설명</h3>
          <GameDescription gamePublicId={params.gameId} />
        </section>
        <section className={styles.contentBox}>
          <h3 className={styles.contentTitle}>리뷰</h3>
          <ReviewSection gamePublicId={params.gameId} />
        </section>
      </div>
    </HydrationBoundary>
  );
}
