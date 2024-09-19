import Link from 'next/link';
import cn from 'classnames';
import { RiArrowRightUpLine } from '@remixicon/react';

import { getGameTitle, type Game } from '@/entities/game';
import { ImageWithFallback } from '@/shared/ui/image-with-fallback';
import DefaultGameMainImage from '~/public/images/default-game-main-image.jpg';
import * as styles from './existed-game-link.css';

type ExistedGameLinkProps = {
  game: Pick<Game, 'publicId' | 'title' | 'titleKo' | 'mainImage'>;
  className?: string;
};

export default function ExistedGameLink({
  game,
  className,
}: ExistedGameLinkProps) {
  const composedClassName = cn(className, styles.link);
  const title = getGameTitle(game);

  return (
    <Link href={`game/${game.publicId}`} className={composedClassName}>
      <div className={styles.linkInner}>
        <div className={styles.leftArea}>
          <div className={styles.mediaArea}>
            <ImageWithFallback
              src={game.mainImage}
              fallbackSrc={DefaultGameMainImage}
              alt=""
              width="100"
              height="68"
              className={styles.mainImage}
              quality={100}
            />
          </div>
          <div className={styles.descriptionArea}>
            <div className={styles.title}>{title}</div>
          </div>
        </div>
        <div className={styles.rightArea}>
          <RiArrowRightUpLine />
        </div>
      </div>
    </Link>
  );
}
