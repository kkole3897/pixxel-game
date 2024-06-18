'use client';

import {
  BestGameCatalogCard,
  LowestPriceRanks,
  GameCatalogListItem,
} from '@/entities/game';
import { useGameDetailQuery, useLowestPriceRanksQuery } from '@/entities/game';
import { adaptBestGameCatalog } from '../../lib';
import * as styles from './game-catalog-section.css';

type GameCatalogSectionProps = {
  gamePublicId: string;
  id?: string;
  className?: string;
};

export default function GameCatalogSection({
  gamePublicId,
  ...props
}: GameCatalogSectionProps) {
  const gameDetailQuery = useGameDetailQuery(gamePublicId);
  const lowsetPriceRanksQuery = useLowestPriceRanksQuery(gamePublicId);

  // TODO: 로딩, 에러 처리 구체화
  if (gameDetailQuery.isPending || lowsetPriceRanksQuery.isPending)
    return '로딩 중...';

  if (gameDetailQuery.isError || lowsetPriceRanksQuery.isError)
    return '에러가 발생했습니다.';

  if (!gameDetailQuery.data || !lowsetPriceRanksQuery.data) return null;

  return (
    <section {...props}>
      <BestGameCatalogCard
        game={adaptBestGameCatalog(gameDetailQuery.data.game)}
        footer={
          lowsetPriceRanksQuery.data.length > 0 && (
            <div className={styles.lowestPriceRankArea}>
              <div className={styles.lowestPriceRankAreaTitle}>역대 최저가</div>
              <LowestPriceRanks.Root>
                {lowsetPriceRanksQuery.data.map((item, index) => {
                  return (
                    <LowestPriceRanks.Item
                      key={item.id}
                      record={item}
                      rank={index + 1}
                    />
                  );
                })}
              </LowestPriceRanks.Root>
            </div>
          )
        }
      />
      {gameDetailQuery.data.game.gameCatalog.length > 0 && (
        <div className={styles.catalogList}>
          {gameDetailQuery.data.game.gameCatalog.map((item) => {
            return (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                className={styles.catalogItemLink}
              >
                <GameCatalogListItem item={item} />
              </a>
            );
          })}
        </div>
      )}
    </section>
  );
}
