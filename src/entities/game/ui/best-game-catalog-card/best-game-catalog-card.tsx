import cn from 'classnames';
import { RiSteamFill, RiErrorWarningFill } from '@remixicon/react';
import Link from 'next/link';

import type { BestGameCatalog } from './types';
import { SteamFillWithText, EpicFill, EpicFillBase } from '@/shared/ui/icons';
import { ImageWithFallback } from '@/shared/ui/image-with-fallback';
import { useBestGameCatalogCard } from './hooks/use-best-game-catalog-card';
import { DlcBadge } from '@/entities/game';
import DefaultGameMainImage from '~/public/images/default-game-main-image.jpg';
import * as styles from './best-game-catalog-card.css';

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
    baseGameLink,
    baseGameTitle,
    isBestSalesEnded,
  } = useBestGameCatalogCard(game);

  return (
    <div className={composedRootClassName}>
      {!isBestSalesEnded && <div className={styles.bestMarker}>BEST</div>}
      <div className={styles.mediaArea}>
        <ImageWithFallback
          src={game.mainImage}
          alt={title}
          width={0}
          height={0}
          sizes="100vw"
          className={styles.mainImage({ dimmed: isBestSalesEnded })}
          fallbackSrc={DefaultGameMainImage}
        />
        <div className={styles.wishArea}>{wish}</div>
      </div>
      <div className={styles.headerArea}>
        {game.type === 'dlc' ? (
          <div className={styles.dlcArea}>
            <DlcBadge />
            <div className={styles.baseGameArea}>
              {baseGameLink && (
                <Link
                  href={baseGameLink}
                  target="_blank"
                  className={styles.baseGameLink}
                >
                  {baseGameTitle}
                </Link>
              )}
              기본 게임 필요
            </div>
          </div>
        ) : game.type === 'extra' && baseGameLink ? (
          <div className={styles.dlcArea}>
            <RiErrorWarningFill size={20} />
            <div className={styles.baseGameArea}>
              <Link
                href={baseGameLink}
                target="_blank"
                className={styles.baseGameLink}
              >
                {baseGameTitle}
              </Link>
              의 추가 콘텐츠
            </div>
          </div>
        ) : null}
        <div className={styles.title({ dimmed: isBestSalesEnded })}>
          {title}
        </div>
        <div className={styles.releaseDate}>출시일: {releaseDate}</div>
      </div>
      {game.gameCatalog !== null && (
        <div className={styles.bodyArea}>
          {isBestSalesEnded ? (
            <div className={styles.salesEndText}>판매 종료</div>
          ) : (
            <>
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
            </>
          )}
        </div>
      )}
      {footer}
    </div>
  );
}
