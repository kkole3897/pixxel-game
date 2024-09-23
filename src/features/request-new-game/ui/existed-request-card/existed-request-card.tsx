import cn from 'classnames';

import { RiExternalLinkLine } from '@remixicon/react';
import Image from 'next/image';

import { type RequestedGame, getRequestedGameStatus } from '../../model';
import {
  formatRequestedGameStatus,
  revertStoreIdentifierToUrl,
  formatRequestTime,
} from '../../lib';
import { DefaultLink } from '@/shared/ui/default-link';
import SteamHomeImage from '~/public/images/steam-home-image-480x270.jpg';
import EpicHomeImage from '~/public/images/epic-home-image-480x270.jpg';
import * as styles from './existed-request-card.css';

export type ExistedRequestCardProps = {
  log: Pick<
    RequestedGame,
    'slug' | 'store' | 'createdAt' | 'completedAt' | 'title'
  >;
  className?: string;
};

export default function ExistedRequestCard({
  log,
  className,
}: ExistedRequestCardProps) {
  const composedClassName = cn(className, styles.card);
  const status = getRequestedGameStatus(log);
  const statusText = formatRequestedGameStatus(status);
  const storeUrl = revertStoreIdentifierToUrl(log);
  const requestTime = formatRequestTime(log.createdAt);

  const mainImageMap = {
    steam: SteamHomeImage,
    epic: EpicHomeImage,
  };

  return (
    <DefaultLink href={storeUrl} target="_blank" className={composedClassName}>
      <div className={styles.mediaArea}>
        <Image
          src={mainImageMap[log.store]}
          alt={log.store}
          width={480}
          height={270}
          className={styles.mainImage}
        />
      </div>
      <div className={styles.contentArea}>
        <div className={styles.tagArea}>
          <span className={styles.statusBadge({ status })}>{statusText}</span>
        </div>
        <div className={styles.title}>{log.title}</div>
        <div className={styles.descriptionArea}>
          <dl>
            <div className={styles.descriptionListItem}>
              <dt className={styles.descriptionKey}>요청 시각 :</dt>
              <dd className={styles.descriptionValue}>{requestTime}</dd>
            </div>
          </dl>
        </div>
      </div>
      <div className={styles.footerArea}>
        <div className={styles.storeUrl}>
          {storeUrl}
          <RiExternalLinkLine size={16} className={styles.storeLinkIcon} />
        </div>
      </div>
    </DefaultLink>
  );
}
