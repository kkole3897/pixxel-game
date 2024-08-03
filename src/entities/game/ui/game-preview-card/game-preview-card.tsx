import cn from 'classnames';

import type { GamePreview } from '../../model';

import * as styles from './game-preview-card.css';
import { useGamePreviewCard } from './hooks/use-game-preview-card';
import { ImageWithFallback } from '@/shared/ui/image-with-fallback';
import { SteamFillBase, EpicFillBase } from '@/shared/ui/icons';

export type GamePreviewCardProps = {
  className?: string;
  gamePreview: GamePreview;
};

const storeIconMap = {
  steam: <SteamFillBase />,
  epic: <EpicFillBase />,
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
  } = useGamePreviewCard(gamePreview);

  return (
    <div className={composedRootClassName}>
      <div className={styles.thumbnailArea}>
        <ImageWithFallback
          src={gamePreview.mainImage}
          alt={gameTitle}
          fill
          className={styles.thumbnailImage}
          sizes="50vw"
        >
          <div className={styles.thumbnailFallback}></div>
        </ImageWithFallback>
        {isHistoricalLow && (
          <div className={styles.historicalLow}>역대 최저</div>
        )}
      </div>
      <div className={styles.descriptionArea}>
        <div className={styles.title}>{gameTitle}</div>
        {currentBestCatalog !== null && (
          <div className={styles.catalogArea}>
            <div className={styles.storeArea}>
              {storeIconMap[currentBestCatalog.store]}
            </div>
            <div className={styles.priceArea}>
              {isDiscounted && (
                <div className={styles.discountPercent}>
                  {discountPercentText}
                </div>
              )}
              <div className={styles.prices}>
                {isDiscounted && (
                  <span className={styles.regularPrice}>
                    {regularPriceText}
                  </span>
                )}
                <span className={styles.currentPrice}>{currentPriceText}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
