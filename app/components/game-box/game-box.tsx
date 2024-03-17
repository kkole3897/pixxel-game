import ImageWithFallback from '@/components/image-with-fallback';
import { GenreBadge } from '@/app/components/genre-badge';
import * as styles from './game-box.css';
import { useGame } from './hooks/use-game';
import type { AppDetail } from '@/app/types';

interface Props {
  game: AppDetail;
}

export default function GameBox({ game }: Props) {
  const {
    releaseDateText,
    regularPriceText,
    discountPriceText,
    discountRate,
    isPriceDefined,
    isLowest,
  } = useGame(game);
  const discountPercentText = `${Math.round(discountRate * 100)}%`;

  return (
    <div className={styles.box}>
      <div className={styles.thumbnailArea}>
        <ImageWithFallback
          src={game.thumbnail}
          className={styles.thumbnailImg}
          alt={`${game.name} thumbnail`}
          fill
        />
      </div>
      <div>
        <div>
          <div>
            <div className={styles.gameName}>{game.name}</div>
            <div className={styles.releaseDate}>{releaseDateText}</div>
          </div>
          {isPriceDefined && (
            <div className={styles.priceArea}>
              <div className={styles.initialPriceArea}>
                {isLowest && discountRate > 0 && (
                  <span className={styles.lowestPriceBadge}>역대 최저</span>
                )}
                {discountRate > 0 && (
                  <>
                    <span className={styles.discountRate}>
                      {discountPercentText}
                    </span>
                    <span className={styles.initalPrice}>
                      {regularPriceText}원
                    </span>
                  </>
                )}
              </div>
              <div className={styles.finalPrice}>{discountPriceText}원</div>
            </div>
          )}
        </div>
        {game.genres.length > 0 && (
          <div className={styles.genreArea}>
            {game.genres.map(({ id, description }) => {
              return <GenreBadge key={id} label={description} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}
