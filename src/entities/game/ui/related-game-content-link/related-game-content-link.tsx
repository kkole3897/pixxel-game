import cn from 'classnames';
import Link from 'next/link';

import { RelatedGameContent } from './types';
import { ImageWithFallback } from '@/shared/ui/image-with-fallback';
import { useRelatedGameContentLink } from './use-related-game-content-link';
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

  const { title, href, currentBestPriceText } =
    useRelatedGameContentLink(content);

  return (
    <Link id={id} href={href} className={composedRootClassName}>
      <div className={styles.imageArea}>
        <ImageWithFallback
          src={content.mainImage}
          alt={title}
          width={176}
          height={96}
          className={styles.mainImage}
        >
          <div className={styles.mainImageFallback}></div>
        </ImageWithFallback>
      </div>
      <div className={styles.contentArea}>
        <div className={styles.title}>
          {content.titleKo ?? content.title ?? content.publicId}
        </div>
        {currentBestPriceText && (
          <div className={styles.price}>{currentBestPriceText}</div>
        )}
      </div>
    </Link>
  );
}
