import Link from 'next/link';
import dayjs from 'dayjs';

import * as styles from './page.css';
import { GenreBadge } from '@/app/components/genre-badge';
import { StoreLink } from './components/store-link';
import { PriceHistoryChart } from './components/price-history-chart';
import { MetaScore, UserScore } from './components/game-scores/meta-critic';
import {
  Rating,
  TopCritic,
  RecommendPercent,
} from './components/game-scores/open-critic';
import { ScoreBar } from './components/game-scores/steam';
import { Gallery } from './components/gallery';
import { Description } from './components/description';
import { getAppDetail } from '@/api/apps';
import ImageWithFallback from '@/components/image-with-fallback';
import type { GameStore } from '@/app/types';

export default async function GameDetailPage({
  params,
}: {
  params: { gameId: string };
}) {
  const { app: game } = await getAppDetail(params.gameId);

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

  const history = [
    { date: '2024-02-01', steam: 68000 },
    { date: '2024-02-02', steam: 68000 },
    { date: '2024-02-03', steam: 58000 },
    { date: '2024-02-04', steam: 58000 },
    { date: '2024-02-05', steam: 58000 },
    { date: '2024-02-06', steam: 48000 },
    { date: '2024-02-07', steam: 68000 },
    { date: '2024-02-08', steam: 68000 },
    { date: '2024-02-09', steam: 68000 },
    { date: '2024-02-10', steam: 68000 },
    { date: '2024-02-11', steam: 68000 },
    { date: '2024-02-12', steam: 58000 },
    { date: '2024-02-13', steam: 58000 },
    { date: '2024-02-14', steam: 68000 },
    { date: '2024-02-15', steam: 68000 },
    { date: '2024-02-16', steam: 68000 },
    { date: '2024-02-17', steam: 68000 },
    { date: '2024-02-18', steam: 68000 },
  ];

  const galleryContents = game.screenshots.map((url) => ({ url }));

  const descriptionContent = game.description;

  return (
    <div>
      <section>
        <div>
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
        </div>
        <div className={styles.contentBox}>
          <h2 className={styles.gameTitle}>{game.name}</h2>
          <div>{releaseDateText}</div>
          {game.genres.length > 0 && (
            <div className={styles.genreArea}>
              <div className={styles.genreTitle}>장르</div>
              <div className={styles.genreList}>
                {game.genres.map((genre) => (
                  <GenreBadge key={genre.toString()} label={genre.toString()} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
      <section>
        <section className={styles.contentBox}>
          <h3>가격 비교</h3>
          <div>
            {stores.map((store) => {
              return (
                <StoreLink
                  key={store.id}
                  href={store.url}
                  store={store.storeName}
                  price={store.price}
                />
              );
            })}
          </div>
        </section>
        <section className={styles.contentBox}>
          <h3>히스토리</h3>
          <div>
            <PriceHistoryChart history={history} />
          </div>
        </section>
        {game.score && (
          <section className={styles.contentBox}>
            <h3>평가</h3>
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
                        <MetaScore score={game.score.metaCritic.metaScore} />
                      </Link>
                    )}
                    {game.score.metaCritic.userScore != null && (
                      <Link
                        href={game.score.metaCritic.url}
                        target="_blank"
                        className={styles.reviewSiteLink}
                      >
                        <UserScore score={game.score.metaCritic.userScore} />
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
                        <Rating tier={game.score.openCritic.tier} />
                      </Link>
                    )}
                    {game.score.openCritic.topCriticScore != null && (
                      <Link
                        href={game.score.openCritic.url}
                        target="_blank"
                        className={styles.reviewSiteLink}
                      >
                        <TopCritic
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
                        <RecommendPercent
                          tier={game.score.openCritic.tier ?? 'Fair'}
                          percent={game.score.openCritic.percentRecommended}
                        />
                      </Link>
                    )}
                  </div>
                </div>
              )}
            </div>
            {game.score.steam && (
              <div>
                <div>스팀</div>
                <ScoreBar
                  positive={game.score.steam.positive}
                  totalCount={game.score.steam.total}
                />
              </div>
            )}
          </section>
        )}
        <section className={styles.contentBox}>
          <h3>상세 정보</h3>
          <Gallery name={game.name} contents={galleryContents} />
          <div className={styles.descriptionContainer}>
            <Description content={descriptionContent} />
          </div>
        </section>
      </section>
    </div>
  );
}
