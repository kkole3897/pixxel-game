import { RiArrowDownLine } from '@remixicon/react';

import { ImageWithFallback } from '@/shared/ui/image-with-fallback';
import * as styles from './game-box.css';
import { useGamePreview } from './hooks/use-game';
import type { GamePreview } from '../../model';

interface GameBoxProps {
  game: GamePreview;
}

export default function GameBox({ game }: GameBoxProps) {
  const {
    regularPriceText,
    discountPriceText,
    discountRate,
    isPriceDefined,
    isHistoricalLowest,
    discountPercentText,
  } = useGamePreview(game);

  return (
    <div className={styles.box}>
      <div className={styles.thumbnailArea}>
        <ImageWithFallback
          src={game.mainImage}
          className={styles.thumbnailImg}
          alt={game.titleKo ?? game.title ?? game.publicId}
          width="200"
          height="136"
        />
      </div>
      <div className={styles.summaryArea}>
        <div>
          <div>
            <div className={styles.gameName}>{game.titleKo}</div>
          </div>
          {isPriceDefined && (
            <div className={styles.priceArea}>
              <div className={styles.initialPriceArea}>
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
              <div className={styles.finalPriceArea}>
                {isHistoricalLowest && discountRate > 0 && (
                  <span className={styles.lowestArea}>
                    <span className={styles.lowestText}>역대 최저</span>
                    <RiArrowDownLine size={16} color="#1d4ed8" />
                  </span>
                )}
                <span className={styles.finalPrice}>{discountPriceText}원</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
