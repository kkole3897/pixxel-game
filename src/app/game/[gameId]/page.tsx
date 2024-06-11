import Link from 'next/link';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

import * as styles from './page.css';
import {
  MetaScore,
  MetaUserScore,
  OpenCriticRating,
  OpenCriticTop,
  OpenCriticRecommend,
  SteamScoreBar,
  GameStoreLink,
  formatReleaseDate,
} from '@/entities/game';
import { Gallery } from '@/widgets/game-detail/ui/gallery';
import { GameDescription, PriceHistoryFetcher } from '@/widgets/game-detail';
import { Core } from '@/shared/api';
import { ImageWithFallback } from '@/shared/ui/image-with-fallback';
import { WishButton } from '@/features/toggle-wish';
import { sorted } from '@/shared/lib/array';
import { createClient } from '@/shared/lib/supabase/server';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Asia/Seoul');

export default async function GameDetailPage({
  params,
}: {
  params: { gameId: string };
}) {
  const core = new Core(createClient());

  const { game } = await core.games.getGame(params.gameId);
  await core.games.getPriceHistory(params.gameId);

  const releaseDateText = formatReleaseDate(
    game.releaseYear,
    game.releaseMonth,
    game.releaseMonth
  );

  const catalog = sorted(game.gameCatalog, (a, b) => {
    const priceB = b.currentPrice ?? b.regularPrice;
    const priceA = a.currentPrice ?? a.regularPrice;

    if (priceB === null) {
      return 1;
    }

    if (priceA === null) {
      return -1;
    }

    return priceB - priceA;
  });

  const hasGameReviewScore =
    game.metaCritic !== null ||
    game.openCritic !== null ||
    game.steamScore !== null;

  const galleryContents = game.screenshots.map((url) => ({ url }));

  const descriptionContent = game.description ?? '';

  return (
    <div>
      <section>
        <div className={styles.thumbnailContainer}>
          <ImageWithFallback
            src={game.mainImage}
            alt={game.titleKo ?? game.title ?? `game/${params.gameId}`}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
            width={100}
            height={100}
          />
          <div className={styles.gameActionContainer}>
            <WishButton gameId={params.gameId} />
          </div>
        </div>
        <div className={styles.contentBox}>
          <h2 className={styles.gameTitle}>
            {game.titleKo ?? game.title ?? `game/${params.gameId}`}
          </h2>
          <div>{releaseDateText}</div>
        </div>
      </section>
      <section>
        <section className={styles.contentBox}>
          <h3 className={styles.contentTitle}>가격 정보</h3>
          <div>
            {catalog.map((c) => {
              return (
                <GameStoreLink
                  key={c.id}
                  url={c.url}
                  store={c.store}
                  currentPrice={c.currentPrice}
                  regularPrice={c.regularPrice}
                  lowestPrice={c.lowestPrice}
                />
              );
            })}
          </div>
        </section>
        <div className={styles.contentDivider}></div>
        <section className={styles.contentBox}>
          <h3 className={styles.contentTitle}>히스토리</h3>
          <PriceHistoryFetcher gamePublicId={params.gameId} />
        </section>
        <div className={styles.contentDivider}></div>
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
        <section className={styles.contentBox}>
          <h3 className={styles.contentTitle}>상세 정보</h3>
          <Gallery
            name={game.titleKo ?? game.title ?? `game/${params.gameId}`}
            contents={galleryContents}
          />
          <div className={styles.descriptionContainer}>
            <GameDescription content={descriptionContent} />
          </div>
        </section>
      </section>
    </div>
  );
}
