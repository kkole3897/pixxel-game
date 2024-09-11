import cn from 'classnames';
import React from 'react';

import type { GamePreview } from '../../model';
import { useGamePreview } from '../../lib';
import { ImageWithFallback } from '@/shared/ui/image-with-fallback';
import { SteamFillBase, EpicFillBase } from '@/shared/ui/icons';
import DefaultGameMainImage from '~/public/images/default-game-main-image.jpg';
import * as styles from './game-preview-card.css';

export type GamePreviewCardProps = {
  className?: string;
  gamePreview: GamePreview;
};

const storeIconMap = {
  steam: SteamFillBase,
  epic: EpicFillBase,
};

export default function GamePreviewCard({
  gamePreview,
  className,
}: GamePreviewCardProps) {
  const composedRootClassName = cn(styles.card, className);

  const {
    gameTitle,
    currentBestCatalog,
    currentPriceText,
    regularPriceText,
    isDiscounted,
    discountPercentText,
    isHistoricalLow,
    isBestSalesEnded,
  } = useGamePreview(gamePreview);

  const StoreIcon = storeIconMap[currentBestCatalog?.store ?? 'steam'];

  return (
    <div className={composedRootClassName}>
      <div className={styles.thumbnailArea}>
        <ImageWithFallback
          src={gamePreview.mainImage}
          alt={gameTitle}
          fill
          className={styles.thumbnailImage({ dimmed: isBestSalesEnded })}
          sizes="50vw"
          fallbackSrc={DefaultGameMainImage}
        />
        {isHistoricalLow && (
          <div className={styles.historicalLow}>역대 최저</div>
        )}
      </div>
      <div className={styles.descriptionArea}>
        <div className={styles.title({ dimmed: isBestSalesEnded })}>
          {gameTitle}
        </div>
        {currentBestCatalog !== null && (
          <div className={styles.catalogArea}>
            <div className={styles.storeArea}>
              <StoreIcon
                className={styles.storeIcon({ dimmed: isBestSalesEnded })}
              />
            </div>
            <div className={styles.priceArea}>
              {isBestSalesEnded ? (
                <div className={styles.priceArea}>
                  <span className={styles.salesEndText}>판매 종료</span>
                </div>
              ) : (
                <div className={styles.prices}>
                  {isDiscounted && (
                    <div className={styles.regularPriceArea}>
                      <div className={styles.discountPercent}>
                        {discountPercentText}
                      </div>
                      <span className={styles.regularPrice}>
                        {regularPriceText}
                      </span>
                    </div>
                  )}
                  <span className={styles.currentPrice}>
                    {currentPriceText}
                  </span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
