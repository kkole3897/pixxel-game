import Image from 'next/image';
import Link from 'next/link';
import { faker } from '@faker-js/faker';

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

export default function GameDetailPage({
  params,
}: {
  params: { gameId: string };
}) {
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

  function getContents(length: number): { url: string }[] {
    const contents = Array.from({ length }).map(() => {
      return {
        url: faker.image.urlLoremFlickr({
          height: 1080,
          width: 1200,
        }),
      };
    });

    return contents;
  }

  return (
    <div>
      <section>
        <div>
          <Image
            src="https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/header.jpg?t=1705604554"
            alt="발더스"
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
          <h2 className={styles.gameTitle}>Baldurs Gate 3</h2>
          <div>2023.10.11</div>
          <div className={styles.genreArea}>
            <div className={styles.genreTitle}>장르</div>
            <div className={styles.genreList}>
              <GenreBadge label="액션" />
              <GenreBadge label="어드벤쳐" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <section className={styles.contentBox}>
          <h3>가격</h3>
          <div>
            <StoreLink
              href="https://isthereanydeal.com/game/baldurs-gate-3/info/"
              store="steam"
              regular={69000}
              discount={56000}
              lowest={45000}
            />
          </div>
        </section>
        <section className={styles.contentBox}>
          <h3>히스토리</h3>
          <div>
            <PriceHistoryChart history={history} />
          </div>
        </section>
        <section className={styles.contentBox}>
          <h3>평가</h3>
          <div className={styles.reviewSites}>
            <div>
              <div className={styles.reviewSiteName}>Metacritic</div>
              <div className={styles.reviewSiteScores}>
                <Link
                  href="https://https://www.metacritic.com/"
                  target="_blank"
                  className={styles.reviewSiteLink}
                >
                  <MetaScore score={90} />
                </Link>
                <Link
                  href="https://https://www.metacritic.com/"
                  target="_blank"
                  className={styles.reviewSiteLink}
                >
                  <UserScore score={96} />
                </Link>
              </div>
            </div>
            <div>
              <div className={styles.reviewSiteName}>OpenCritic</div>
              <div className={styles.reviewSiteScores}>
                <Link
                  href="https://https://www.metacritic.com/"
                  target="_blank"
                  className={styles.reviewSiteLink}
                >
                  <Rating tier="Strong" />
                </Link>
                <Link
                  href="https://https://www.metacritic.com/"
                  target="_blank"
                  className={styles.reviewSiteLink}
                >
                  <TopCritic tier="Strong" score={90} />
                </Link>
                <Link
                  href="https://https://www.metacritic.com/"
                  target="_blank"
                  className={styles.reviewSiteLink}
                >
                  <RecommendPercent tier="Strong" percent={90.3} />
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div>스팀</div>
            <ScoreBar positive={80} totalCount={120} />
          </div>
        </section>
        <section className={styles.contentBox}>
          <h3>상세 정보</h3>
          <Gallery name={params.gameId} contents={getContents(10)} />
        </section>
      </section>
    </div>
  );
}
