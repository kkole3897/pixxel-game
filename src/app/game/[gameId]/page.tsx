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
import { fetchGameDetail, fetchGamePriceHistory } from '@/entities/game/api';
import ImageWithFallback from '@/shared/ui/image-with-fallback';
import { WishButton } from '@/features/toggle-wish/ui';
import type { GameStore } from '@/entities/game/model';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Asia/Seoul');

export default async function GameDetailPage({
  params,
}: {
  params: { gameId: string };
}) {
  const { game } = await fetchGameDetail(params.gameId);
  const { history: _history } = await fetchGamePriceHistory(params.gameId);

  const releaseDateText = !game.releaseDate
    ? '출시 미정'
    : dayjs(game.releaseDate).format('YYYY.MM.DD');

  const stores = Object.entries(game.storeInfo ?? {})
    .map(([_storeName, storeInfo]) => {
      const { url, price } = storeInfo;

      const storeName = _storeName as GameStore;

      const data = {
        id: `${storeName}_${storeInfo.storeId}`,
        storeName,
        url,
        ...(!price
          ? {}
          : {
              price: {
                regular: price.regular,
                current: price.current,
                lowest: price.lowest,
              },
            }),
      };

      return data;
    })
    .sort((a, b) => {
      if (!a.price) return 1;
      if (!b.price) return -1;

      return a.price.current - b.price.current;
    });

  const pricePerDate = Object.entries(_history).reduce<{
    [K: string]: { [K in GameStore]?: number };
  }>((acc, [store, prices]) => {
    for (const price of prices) {
      const date = dayjs(price.datetime).tz().format('YYYY.MM.DD');

      if (Object.keys(acc).includes(date)) {
        acc[date] = { ...acc[date], [store]: price.current };
      } else {
        acc[date] = { [store]: price.current };
      }
    }

    return acc;
  }, {});
  const history = Object.entries(pricePerDate)
    .map(([date, price]) => {
      return { date, ...price };
    })
    .sort((a, b) => {
      if (a.date < b.date) {
        return -1;
      }

      return 1;
    });

  const galleryContents = game.screenshots.map((url) => ({ url }));

  const descriptionContent = game.description;

  return (
    <div>
      <section>
        <div className={styles.thumbnailContainer}>
          <ImageWithFallback
            src={game.thumbnail}
            alt={game.name}
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
          <h2 className={styles.gameTitle}>{game.name}</h2>
          <div>{releaseDateText}</div>
          {game.genres.length > 0 && (
            <div className={styles.genreArea}>
              <div className={styles.genreTitle}>장르</div>
              <div className={styles.genreList}>
                {game.genres.map((genre) => (
                  <GenreBadge key={genre} genre={genre} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
      <section>
        <section className={styles.contentBox}>
          <h3 className={styles.contentTitle}>가격 정보</h3>
          <div>
            {stores.map((store) => {
              return (
                <StoreLink
                  key={store.id}
                  url={store.url}
                  store={store.storeName}
                  price={store.price}
                />
              );
            })}
          </div>
        </section>
        <div className={styles.contentDivider}></div>
        <section className={styles.contentBox}>
          <h3 className={styles.contentTitle}>히스토리</h3>
          <div>
            <PriceHistoryChart history={history} />
          </div>
        </section>
        <div className={styles.contentDivider}></div>
        {game.score && (
          <>
            <section className={styles.contentBox}>
              <h3 className={styles.contentTitle}>평가</h3>
              <div className={styles.reviewSites}>
                {game.score.metaCritic && (
                  <div>
                    <div className={styles.reviewSiteName}>Metacritic</div>
                    <div className={styles.reviewSiteScores}>
                      {game.score.metaCritic.metaScore != null && (
                        <Link
                          href={game.score.metaCritic.url}
                          target="_blank"
                          className={styles.reviewSiteLink}
                        >
                          <MetaCritic.MetaScore
                            score={game.score.metaCritic.metaScore}
                          />
                        </Link>
                      )}
                      {game.score.metaCritic.userScore != null && (
                        <Link
                          href={game.score.metaCritic.url}
                          target="_blank"
                          className={styles.reviewSiteLink}
                        >
                          <MetaCritic.UserScore
                            score={game.score.metaCritic.userScore}
                          />
                        </Link>
                      )}
                    </div>
                  </div>
                )}
                {game.score.openCritic && (
                  <div>
                    <div className={styles.reviewSiteName}>OpenCritic</div>
                    <div className={styles.reviewSiteScores}>
                      {game.score.openCritic.tier != null && (
                        <Link
                          href={game.score.openCritic.url}
                          target="_blank"
                          className={styles.reviewSiteLink}
                        >
                          <OpenCritic.Rating
                            tier={game.score.openCritic.tier}
                          />
                        </Link>
                      )}
                      {game.score.openCritic.topCriticScore != null && (
                        <Link
                          href={game.score.openCritic.url}
                          target="_blank"
                          className={styles.reviewSiteLink}
                        >
                          <OpenCritic.TopCritic
                            tier={game.score.openCritic.tier ?? 'Fair'}
                            score={game.score.openCritic.topCriticScore}
                          />
                        </Link>
                      )}
                      {game.score.openCritic.percentRecommended != null && (
                        <Link
                          href={game.score.openCritic.url}
                          target="_blank"
                          className={styles.reviewSiteLink}
                        >
                          <OpenCritic.RecommendPercent
                            tier={game.score.openCritic.tier ?? 'Fair'}
                            percent={game.score.openCritic.percentRecommended}
                          />
                        </Link>
                      )}
                    </div>
                  </div>
                )}
              </div>
              {game.score.steam &&
                game.score.steam.positive != null &&
                game.score.steam.total != null && (
                  <div className={styles.steamScoreArea}>
                    <div>스팀</div>
                    <SteamScore.Bar
                      positive={game.score.steam.positive}
                      totalCount={game.score.steam.total}
                    />
                  </div>
                )}
            </section>
            <div className={styles.contentDivider}></div>
          </>
        )}
        <section className={styles.contentBox}>
          <h3 className={styles.contentTitle}>상세 정보</h3>
          <Gallery name={game.name} contents={galleryContents} />
          <div className={styles.descriptionContainer}>
            <Description content={descriptionContent} />
          </div>
        </section>
      </section>
    </div>
  );
}
