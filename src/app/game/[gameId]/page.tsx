import Link from 'next/link';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

import * as styles from './page.css';
import {
  MetaCritic,
  OpenCritic,
  SteamScore,
  PriceHistoryChart,
  StoreLink,
  GenreBadge,
} from '@/entities/game/ui';
import { Gallery } from '@/widgets/game-detail/ui/gallery';
import { Description } from '@/widgets/game-detail/ui';
import { Core } from '@/shared/api';
import { ImageWithFallback } from '@/shared/ui/image-with-fallback';
import { WishButton } from '@/features/toggle-wish/ui';
import { formatReleaseDate } from '@/entities/game';
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
          {/* {game.genres.length > 0 && (
            <div className={styles.genreArea}>
              <div className={styles.genreTitle}>장르</div>
              <div className={styles.genreList}>
                {game.genres.map((genre) => (
                  <GenreBadge key={genre} genre={genre} />
                ))}
              </div>
            </div>
          )} */}
        </div>
      </section>
      <section>
        <section className={styles.contentBox}>
          <h3 className={styles.contentTitle}>가격 정보</h3>
          <div>
            {catalog.map((c) => {
              return (
                <StoreLink
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
        {/* <section className={styles.contentBox}>
          <h3 className={styles.contentTitle}>히스토리</h3>
          <div>
            <PriceHistoryChart history={history} />
          </div>
        </section> */}
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
                          <MetaCritic.MetaScore
                            score={game.metaCritic.metaScore}
                          />
                        </Link>
                      )}
                      {game.metaCritic.userScore !== null && (
                        <Link
                          href={game.metaCritic.userScoreUrl}
                          target="_blank"
                          className={styles.reviewSiteLink}
                        >
                          <MetaCritic.UserScore
                            score={game.metaCritic.userScore}
                          />
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
                          <OpenCritic.Rating tier={game.openCritic.tier} />
                        </Link>
                      )}
                      {game.openCritic.topCriticScore !== null && (
                        <Link
                          href={game.openCritic.url}
                          target="_blank"
                          className={styles.reviewSiteLink}
                        >
                          <OpenCritic.TopCritic
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
                          <OpenCritic.RecommendPercent
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
                    <SteamScore.Bar
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
            <Description content={descriptionContent} />
          </div>
        </section>
      </section>
    </div>
  );
}
