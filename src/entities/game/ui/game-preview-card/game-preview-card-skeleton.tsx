import * as styles from './game-preview-card.css';

export default function GamePreviewCardSkeleton() {
  return (
    <div className={styles.card}>
      <div className={styles.thumbnailAreaSkeleton}></div>
      <div className={styles.descriptionArea}>
        <div className={styles.titleSkeleton}></div>
        <div className={styles.catalogArea}>
          <div className={styles.storeAreaSkeleton}></div>
          <div className={styles.priceArea}>
            <div className={styles.prices}>
              <span className={styles.currentPriceSkeleton}></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
