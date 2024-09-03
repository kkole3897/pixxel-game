import { RiSteamFill } from '@remixicon/react';

import type { GameCatalogListItem } from './types';
import * as styles from './game-catalog-list-item.css';
import { SteamFillWithText, EpicFill, EpicFillBase } from '@/shared/ui/icons';
import { useGameCatalogItem } from './hooks/use-game-catalog-item';

export type GameCatalogListItemProps = {
  item: GameCatalogListItem;
};

const storeIconMap = {
  steam: <SteamFillWithText height={28} scaleBy="height" />,
  epic: <EpicFillBase size={28} />,
};

const drmIconMap = {
  steam: <RiSteamFill size={20} color="currentColor" />,
  epic: <EpicFill size={20} color="currentColor" />,
};

export default function GameCatalogListItem({
  item,
}: GameCatalogListItemProps) {
  const {
    discountPercent,
    isDiscounted,
    hasPriceInfo,
    regularPriceText,
    currentPriceText,
    willDiscountExpire,
    discountExpireDate,
    isSalesEnded,
  } = useGameCatalogItem(item);

  return (
    <div className={styles.listItem}>
      <div className={styles.storeArea}>
        <div>{storeIconMap[item.store]}</div>
        <div className={styles.drmArea}>
          <span>DRM:</span>
          {drmIconMap[item.drm]}
        </div>
      </div>
      {isSalesEnded ? (
        <div className={styles.priceArea}>
          <div className={styles.salesEndText}>판매 종료</div>
        </div>
      ) : hasPriceInfo ? (
        <div className={styles.priceArea}>
          {isDiscounted && (
            <div className={styles.regularPriceArea}>
              <span className={styles.discountPercent}>{discountPercent}</span>
              <span className={styles.regularPrice}>{regularPriceText}</span>
            </div>
          )}
          <div className={styles.currentPrice}>{currentPriceText}</div>
          {willDiscountExpire && (
            <div className={styles.discountExpireDate}>
              {discountExpireDate}까지
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}
