import cn from 'classnames';
import Link from 'next/link';

import { BundleContent } from './types';
import { ImageWithFallback } from '@/shared/ui/image-with-fallback';
import { useGameBundleContentLink } from './use-game-bundle-content-link';
import * as styles from './game-bundle-content-link.css';

type GameBundleContentLinkProps = {
  content: BundleContent;
  className?: string;
  id?: string;
};

export default function GameBundleContentLink({
  content,
  id,
  className,
}: GameBundleContentLinkProps) {
  const composedRootClassName = cn(styles.link, className);

  const { title, href, currentBestPriceText } =
    useGameBundleContentLink(content);

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
