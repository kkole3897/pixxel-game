import Link from 'next/link';
import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from '@tanstack/react-query';

import * as styles from './page.css';
import {
  MetaScore,
  MetaUserScore,
  OpenCriticRating,
  OpenCriticTop,
  OpenCriticRecommend,
  SteamScoreBar,
} from '@/entities/game';
import { GameDescription, PriceHistoryFetcher } from '@/widgets/game-detail';
import { Core } from '@/shared/api';
import { createClient } from '@/shared/lib/supabase/server';
import { gameQueryKeys } from '@/entities/game';
import { GameCatalogSection } from '@/widgets/game-detail';

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

  const { game } = await core.games.getGame(params.gameId);
  await core.games.getPriceHistory(params.gameId);

  const hasGameReviewScore =
    game.metaCritic !== null ||
    game.openCritic !== null ||
    game.steamScore !== null;

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div>
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
        <section>
          {hasGameReviewScore && (
            <>
              <section className={styles.contentBox}>
                <h3 className={styles.contentTitle}>평가</h3>
                <div className={styles.reviewSites}>
                  {game.metaCritic !== null && (
                    <div>
                      <div className={styles.reviewSiteName}>Metacritic</div>
                      <div className={styles.reviewSiteScores}>
                        {game.metaCritic.metaScore !== null && (
                          <Link
                            href={game.metaCritic.metaScoreUrl}
                            target="_blank"
                            className={styles.reviewSiteLink}
                          >
                            <MetaScore score={game.metaCritic.metaScore} />
                          </Link>
                        )}
                        {game.metaCritic.userScore !== null && (
                          <Link
                            href={game.metaCritic.userScoreUrl}
                            target="_blank"
                            className={styles.reviewSiteLink}
                          >
                            <MetaUserScore score={game.metaCritic.userScore} />
                          </Link>
                        )}
                      </div>
                    </div>
                  )}
                  {game.openCritic !== null && (
                    <div>
                      <div className={styles.reviewSiteName}>OpenCritic</div>
                      <div className={styles.reviewSiteScores}>
                        {game.openCritic.tier !== null && (
                          <Link
                            href={game.openCritic.url}
                            target="_blank"
                            className={styles.reviewSiteLink}
                          >
                            <OpenCriticRating tier={game.openCritic.tier} />
                          </Link>
                        )}
                        {game.openCritic.topCriticScore !== null && (
                          <Link
                            href={game.openCritic.url}
                            target="_blank"
                            className={styles.reviewSiteLink}
                          >
                            <OpenCriticTop
                              tier={game.openCritic.tier ?? 'Fair'}
                              score={game.openCritic.topCriticScore}
                            />
                          </Link>
                        )}
                        {game.openCritic.percentRecommended !== null && (
                          <Link
                            href={game.openCritic.url}
                            target="_blank"
                            className={styles.reviewSiteLink}
                          >
                            <OpenCriticRecommend
                              tier={game.openCritic.tier ?? 'Fair'}
                              percent={game.openCritic.percentRecommended}
                            />
                          </Link>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                {game.steamScore !== null &&
                  game.steamScore.positive !== null &&
                  game.steamScore.total !== null && (
                    <div className={styles.steamScoreArea}>
                      <div>스팀</div>
                      <SteamScoreBar
                        positive={game.steamScore.positive}
                        totalCount={game.steamScore.total}
                      />
                    </div>
                  )}
              </section>
              <div className={styles.contentDivider}></div>
            </>
          )}
        </section>
      </div>
    </HydrationBoundary>
  );
}
