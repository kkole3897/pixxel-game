import { Metadata } from 'next';
import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from '@tanstack/react-query';

import { GameDescription, PriceHistoryFetcher } from '@/widgets/game-detail';
import {
  GameCatalogSection,
  ReviewSection,
  GameBundleContents,
  GameDlcContents,
} from '@/widgets/game-detail';
import { gameQueryKeys } from '@/entities/game';
import { wishListQueryKeys } from '@/entities/wish-list';
import { Core } from '@/shared/api';
import { createClient } from '@/shared/lib/supabase/server';
import * as styles from './page.css';

type PageProps = {
  params: { gameId: string };
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { gameId } = params;

  const queryClient = new QueryClient();
  const core = new Core(createClient());

  const { game } = await queryClient.fetchQuery({
    queryKey: gameQueryKeys.detail(params.gameId).queryKey,
    queryFn: () => core.games.getGame(params.gameId),
  });

  const generatedTitle = game?.titleKo ?? game?.title ?? gameId;

  return {
    title: `${generatedTitle} - Pixxel Game`,
    openGraph: {
      title: `${generatedTitle} - Pixxel Game`,
    },
    twitter: {
      title: `${generatedTitle} - Pixxel Game`,
    },
  };
}

export default async function GameDetailPage({ params }: PageProps) {
  const queryClient = new QueryClient();
  const core = new Core(createClient());
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

  const { game } = await queryClient.fetchQuery({
    queryKey: gameQueryKeys.detail(params.gameId).queryKey,
    queryFn: () => core.games.getGame(params.gameId),
  });

  let bundleContents: Awaited<
    ReturnType<typeof core.games.getGameBundleContents>
  > = [];
  let dlcContents: Awaited<ReturnType<typeof core.games.getDlcs>> = [];
  if (game.type === 'bundle') {
    await queryClient.prefetchQuery({
      queryKey: gameQueryKeys.bundleContents(game.id).queryKey,
      queryFn: () => core.games.getGameBundleContents(game.id),
    });
    bundleContents = await queryClient.fetchQuery({
      queryKey: gameQueryKeys.bundleContents(game.id).queryKey,
      queryFn: () => core.games.getGameBundleContents(game.id),
    });
  } else if (game.type === 'game') {
    await queryClient.prefetchQuery({
      queryKey: gameQueryKeys.dlcs(game.id).queryKey,
      queryFn: () => core.games.getDlcs(game.id),
    });
    dlcContents = await queryClient.fetchQuery({
      queryKey: gameQueryKeys.dlcs(game.id).queryKey,
      queryFn: () => core.games.getDlcs(game.id),
    });
  }

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
        {bundleContents.length > 0 && (
          <section className={styles.contentBox}>
            <h3 className={styles.contentTitle}>번들에 포함된 콘텐츠</h3>
            <GameBundleContents id={game.id} />
          </section>
        )}
        {dlcContents.length > 0 && (
          <section className={styles.contentBox}>
            <h3 className={styles.contentTitle}>DLC</h3>
            <GameDlcContents id={game.id} />
          </section>
        )}
        {game.description && (
          <section className={styles.contentBox}>
            <h3 className={styles.contentTitle}>게임 설명</h3>
            <GameDescription gamePublicId={params.gameId} />
          </section>
        )}
        {(game.type === 'game' || game.type === 'dlc') && (
          <section className={styles.contentBox}>
            <h3 className={styles.contentTitle}>리뷰</h3>
            <ReviewSection gamePublicId={params.gameId} />
          </section>
        )}
      </div>
    </HydrationBoundary>
  );
}
