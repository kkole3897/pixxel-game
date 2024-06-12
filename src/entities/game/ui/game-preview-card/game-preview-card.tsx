import cn from 'classnames';

import type { GamePreview } from '../../model';

import { ImageWithFallback } from '@/shared/ui/image-with-fallback';
import { SteamFillBase, EpicFillBase } from '@/shared/ui/icons';

import * as styles from './game-preview-card.css';

export type GamePreviewCardProps = {
  className?: string;
  gamePreview: GamePreview;
};

export default function GamePreviewCard({
  gamePreview,
  className,
  ...props
}: GamePreviewCardProps) {
  const composedRootClassName = cn(styles.card, className);

  return (
    <div className={composedRootClassName}>
      <div className={styles.thumbnailArea}>
        <ImageWithFallback
          src={gamePreview.mainImage}
          alt=""
          fill
          className={styles.thumbnailImage}
        />
        <div className={styles.historicalLow}>역대 최저</div>
      </div>
      <div className={styles.descriptionArea}>
        <div className={styles.title}>{gamePreview.titleKo}</div>
        <div className={styles.catalogArea}>
          <div className={styles.storeArea}>
            <SteamFillBase />
          </div>
          <div className={styles.priceArea}>
            <div className={styles.discountRatio}>100%</div>
            <div className={styles.prices}>
              <span className={styles.regularPrice}>87,000원</span>
              <span className={styles.currentPrice}>50,000원</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
