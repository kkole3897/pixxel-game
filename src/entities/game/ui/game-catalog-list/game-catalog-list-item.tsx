import { RiSteamFill } from '@remixicon/react';

import { GameCatalogItem } from '../../model';
import * as styles from './game-catalog-list-item.css';
import { SteamFillWithText, EpicFill, EpicFillBase } from '@/shared/ui/icons';

export type GameCatalogListItemProps = {
  item: Omit<
    GameCatalogItem,
    'id' | 'gameId' | 'lowestPrice' | 'lowestPriceUpdatedAt'
  >;
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
  return (
    <div className={styles.listItem}>
      <div className={styles.storeArea}>
        <div>{storeIconMap[item.store]}</div>
        <div className={styles.drmArea}>
          <span>DRM:</span>
          {drmIconMap[item.drm]}
        </div>
      </div>
      <div className={styles.priceArea}>
        <div className={styles.regularPriceArea}>
          <span className={styles.discountPercent}>{'38%'}</span>
          <span className={styles.regularPrice}>{'68,000원'}</span>
        </div>
        <div className={styles.currentPrice}>{'30,000원'}</div>
        <div className={styles.discountExpireDate}>{'24.06.24'}까지</div>
      </div>
    </div>
  );
}
