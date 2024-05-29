import Link from 'next/link';
import { RiSteamFill } from '@remixicon/react';

import * as styles from './store-link.css';
import type { GameStore, GameCatalog } from '../../model';
import { usePriceInfo } from './hooks/use-price-info';

interface StoreLinkProps
  extends Pick<
    GameCatalog,
    'store' | 'url' | 'currentPrice' | 'regularPrice' | 'lowestPrice'
  > {}

const storeIconMap: { [key in GameStore]: React.ReactNode } = {
  steam: <RiSteamFill />,
  epic: <></>,
};

export default function StoreLink(props: StoreLinkProps) {
  const { url: href, store, currentPrice, regularPrice, lowestPrice } = props;
  const { initalPrice, finalPrice, isDiscounted, isLowest } = usePriceInfo({
    regular: regularPrice ?? 0,
    current: currentPrice ?? 0,
    lowest: lowestPrice ?? 0,
  });

  if (regularPrice === null) {
    return (
      <Link href={href} target="_blank" className={styles.storeLink}>
        <div>{storeIconMap[store]}</div>
        <div className={styles.priceArea}>
          <span className={styles.priceNa}>N/A</span>
        </div>
      </Link>
    );
  }

  const lowest = lowestPrice ?? 0;
  const regular = regularPrice ?? 0;
  const current = currentPrice ?? 0;

  const initialPriceText = `${initalPrice.toLocaleString()}원`;
  const lowestPriceText = `${lowest.toLocaleString()}원`;
  const finalPriceText = `${finalPrice.toLocaleString()}원`;
  const discountPercent = Math.round(((regular - current) / regular) * 100);

  return (
    <Link href={href} target="_blank" className={styles.storeLink}>
      <div>{storeIconMap[store]}</div>
      <div className={styles.priceArea}>
        {isDiscounted && (
          <div className={styles.initialPriceArea}>
            <span className={styles.discountPercent}>{discountPercent}%</span>
            <span className={styles.initialPrice}>{initialPriceText}</span>
          </div>
        )}
        <div className={styles.finalPriceArea}>
          {isLowest && <span className={styles.lowestBadge}>최저</span>}
          <span className={styles.finalPrice}>{finalPriceText}</span>
        </div>
        {!isLowest && (
          <div className={styles.lowestPriceArea}>
            <span>
              스토어 최저가:{' '}
              <span className={styles.lowestPrice}>{lowestPriceText}</span>
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}
