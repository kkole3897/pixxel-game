import cn from 'classnames';
import Link from 'next/link';

import { RelatedGameContent } from './types';
import { ImageWithFallback } from '@/shared/ui/image-with-fallback';
import { useRelatedGameContentLink } from './use-related-game-content-link';
import DefaultGameMainImage from '~/public/images/default-game-main-image.jpg';
import * as styles from './related-game-content-link.css';

type RelatedGameContentLinkProps = {
  content: RelatedGameContent;
  className?: string;
  id?: string;
};

export default function RelatedGameContentLink({
  content,
  id,
  className,
}: RelatedGameContentLinkProps) {
  const composedRootClassName = cn(styles.link, className);

  const { title, href, currentBestPriceText, isAllSalesEnded } =
    useRelatedGameContentLink(content);

  return (
    <Link id={id} href={href} className={composedRootClassName}>
      <div className={styles.imageArea}>
        <ImageWithFallback
          src={content.mainImage}
          fallbackSrc={DefaultGameMainImage}
          alt={title}
          width={176}
          height={96}
          className={styles.mainImage({ dimmed: isAllSalesEnded })}
        />
      </div>
      <div className={styles.contentArea}>
        <div className={styles.title({ dimmed: isAllSalesEnded })}>{title}</div>
        {isAllSalesEnded ? (
          <div className={styles.price({ dimmed: isAllSalesEnded })}>
            판매 종료
          </div>
        ) : currentBestPriceText ? (
          <div className={styles.price()}>{currentBestPriceText}</div>
        ) : null}
      </div>
    </Link>
  );
}
