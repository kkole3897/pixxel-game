import { type Game, type GameCatalogItem } from '@/entities/game';
import cn from 'classnames';
import { RiSteamFill } from '@remixicon/react';

import * as styles from './best-game-catalog-card.css';
import { SteamFillWithText, EpicFill, EpicFillBase } from '@/shared/ui/icons';

type BestGameCatalog = Pick<
  Game,
  | 'id'
  | 'publicId'
  | 'type'
  | 'title'
  | 'titleKo'
  | 'mainImage'
  | 'releaseYear'
  | 'releaseMonth'
  | 'releaseDay'
> & {
  gameCatalog: Pick<
    GameCatalogItem,
    | 'id'
    | 'gameId'
    | 'url'
    | 'store'
    | 'drm'
    | 'regularPrice'
    | 'currentPrice'
    | 'currentPriceExpireAt'
  > | null;
};

export type BestGameCatalogCardProps = {
  game: BestGameCatalog;
  className?: string;
  footer?: React.ReactNode;
  wish?: React.ReactNode;
};

export default function BestGameCatalogCard({
  game,
  className,
  footer,
  wish,
}: BestGameCatalogCardProps) {
  const composedRootClassName = cn(styles.card, className);

  const storeIconMap = {
    steam: <SteamFillWithText height="28" scaleBy="height" />,
    epic: <EpicFillBase size="28" />,
  };

  const drmIconMap = {
    steam: <RiSteamFill size="20" color="currentColor" />,
    epic: <EpicFill size="20" color="currentColor" />,
  };

  return (
    <div className={composedRootClassName}>
      <div className={styles.mediaArea}>
        <img src={game.mainImage!} alt="" className={styles.mainImage} />
        <div className={styles.wishArea}>{wish}</div>
      </div>
      <div className={styles.headerArea}>
        <div className={styles.title}>{game.titleKo}</div>
        <time dateTime="2024-06-15" className={styles.releaseDate}>
          출시일: {'2024년 6월 15일'}
        </time>
      </div>
      {game.gameCatalog !== null && (
        <div className={styles.bodyArea}>
          <div className={styles.storeArea}>
            {storeIconMap[game.gameCatalog.store]}
            <span className={styles.onSaleText}>에서 판매 중</span>
          </div>
          <div className={styles.drmArea}>
            <span>DRM:</span>
            {drmIconMap[game.gameCatalog.drm]}
          </div>
          <div>
            <div className={styles.regularPriceArea}>
              <span className={styles.discountPercent}>38%</span>
              <span className={styles.regularPrice}>68,000원</span>
            </div>
            <div className={styles.currentPrice}>34,000원</div>
          </div>
        </div>
      )}
      {footer}
    </div>
  );
}
