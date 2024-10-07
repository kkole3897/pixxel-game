import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from '@tanstack/react-query';

import { GameListFetcher } from '@/widgets/game';
import { RequestNewGameIntroductionLink } from '@/features/request-new-game/';
import { gameQueryKeys } from '@/entities/game';
import { Core } from '@/shared/api';
import { createClient } from '@/shared/lib/supabase/server';
import * as styles from './page.css';

async function Games() {
  const queryClient = new QueryClient();

  const core = new Core(createClient());

  await queryClient.prefetchInfiniteQuery({
    queryKey: gameQueryKeys.list.queryKey,
    queryFn: ({ pageParam }) => core.games.getGames({ ...pageParam }),
    initialPageParam: { from: 0, to: 99 },
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <section className={styles.bannerArea}>
        <RequestNewGameIntroductionLink />
      </section>
      <GameListFetcher />
    </HydrationBoundary>
  );
}

export default Games;
