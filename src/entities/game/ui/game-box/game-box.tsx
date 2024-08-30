import { RiArrowDownLine } from '@remixicon/react';

import { useGamePreview } from '../../lib';
import type { GamePreview } from '../../model';
import { ImageWithFallback } from '@/shared/ui/image-with-fallback';
import DefaultGameMainImage from '~/public/images/default-game-main-image.jpg';
import * as styles from './game-box.css';

interface GameBoxProps {
  game: GamePreview;
}

export default function GameBox({ game }: GameBoxProps) {
  const {
    regularPriceText,
    currentPriceText,
    currentBestCatalog,
    isHistoricalLow,
    discountPercentText,
    gameTitle,
    isDiscounted,
  } = useGamePreview(game);

  return (
    <div className={styles.box}>
      <div className={styles.thumbnailArea}>
        <ImageWithFallback
          src={game.mainImage}
          className={styles.thumbnailImg}
          alt={gameTitle}
          width="200"
          height="136"
          fallbackSrc={DefaultGameMainImage}
        />
      </div>
      <div className={styles.summaryArea}>
        <div>
          <div>
            <div className={styles.gameName}>{gameTitle}</div>
          </div>
          {currentBestCatalog && (
            <div className={styles.priceArea}>
              <div className={styles.initialPriceArea}>
                {isDiscounted && (
                  <>
                    <span className={styles.discountRate}>
                      {discountPercentText}
                    </span>
                    <span className={styles.initalPrice}>
                      {regularPriceText}
                    </span>
                  </>
                )}
              </div>
              <div className={styles.finalPriceArea}>
                {isHistoricalLow && (
                  <span className={styles.lowestArea}>
                    <span className={styles.lowestText}>역대 최저</span>
                    <RiArrowDownLine size={16} color="#1d4ed8" />
                  </span>
                )}
                <span className={styles.finalPrice}>{currentPriceText}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
