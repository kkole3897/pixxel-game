import cn from 'classnames';
import Link from 'next/link';

import { type Game } from '../../model';
import { ImageWithFallback } from '@/shared/ui/image-with-fallback';
import * as styles from './game-bundle-content-link.css';

type GameBundleContentItemProps = {
  game: Pick<Game, 'title' | 'titleKo' | 'mainImage' | 'publicId'> & {
    price: number | null;
  };
  className?: string;
  id?: string;
};

export default function GameBundleContentItem({
  game,
  id,
  className,
}: GameBundleContentItemProps) {
  const composedRootClassName = cn(styles.link, className);

  return (
    <Link
      id={id}
      href={`/game/${game.publicId}`}
      className={composedRootClassName}
    >
      <div className={styles.imageArea}>
        <ImageWithFallback
          src={game.mainImage}
          alt={game.titleKo ?? game.title ?? game.publicId}
          width={176}
          height={96}
          className={styles.mainImage}
        >
          <div className={styles.mainImageFallback}></div>
        </ImageWithFallback>
      </div>
      <div className={styles.contentArea}>
        <div className={styles.title}>
          {game.titleKo ?? game.title ?? game.publicId}
        </div>
        {game.price !== null && (
          <div className={styles.price}>{game.price.toLocaleString()}원~</div>
        )}
      </div>
    </Link>
  );
}
