import cn from 'classnames';
import { RiSteamFill } from '@remixicon/react';

import type { BestGameCatalog } from './types';
import * as styles from './best-game-catalog-card.css';
import { SteamFillWithText, EpicFill, EpicFillBase } from '@/shared/ui/icons';
import { ImageWithFallback } from '@/shared/ui/image-with-fallback';
import { useBestGameCatalogCard } from './hooks/use-best-game-catalog-card';

export type BestGameCatalogCardProps = {
  game: BestGameCatalog;
  className?: string;
  footer?: React.ReactNode;
  wish?: React.ReactNode;
};

const storeIconMap = {
  steam: <SteamFillWithText height="28" scaleBy="height" />,
  epic: <EpicFillBase size="28" />,
};

const drmIconMap = {
  steam: <RiSteamFill size="20" color="currentColor" />,
  epic: <EpicFill size="20" color="currentColor" />,
};

export default function BestGameCatalogCard({
  game,
  className,
  footer,
  wish,
}: BestGameCatalogCardProps) {
  const composedRootClassName = cn(styles.card, className);

  const {
    title,
    releaseDate,
    onSalesText,
    isDiscounted,
    discountPercent,
    regularPriceText,
    currentPriceText,
    hasPriceInfo,
  } = useBestGameCatalogCard(game);

  return (
    <div className={composedRootClassName}>
      <div className={styles.mediaArea}>
        <ImageWithFallback
          src={game.mainImage}
          alt={title}
          fill
          className={styles.mainImage}
        >
          <div></div>
        </ImageWithFallback>
        <div className={styles.wishArea}>{wish}</div>
      </div>
      <div className={styles.headerArea}>
        <div className={styles.title}>{title}</div>
        <div className={styles.releaseDate}>출시일: {releaseDate}</div>
      </div>
      {game.gameCatalog !== null && (
        <div className={styles.bodyArea}>
          <div className={styles.storeArea}>
            {storeIconMap[game.gameCatalog.store]}
            <span className={styles.onSaleText}>{onSalesText}</span>
          </div>
          <div className={styles.drmArea}>
            <span>DRM:</span>
            {drmIconMap[game.gameCatalog.drm]}
          </div>
          {hasPriceInfo && (
            <div>
              {isDiscounted && (
                <div className={styles.regularPriceArea}>
                  <span className={styles.discountPercent}>
                    {discountPercent}
                  </span>
                  <span className={styles.regularPrice}>
                    {regularPriceText}
                  </span>
                </div>
              )}
              <div className={styles.currentPrice}>{currentPriceText}</div>
            </div>
          )}
        </div>
      )}
      {footer}
    </div>
  );
}
