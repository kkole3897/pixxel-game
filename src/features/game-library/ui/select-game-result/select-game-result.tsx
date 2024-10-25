import { type SuggestedGame } from '../../model';
import { getGameTitle } from '@/entities/game';
import { ImageWithFallback } from '@/shared/ui/image-with-fallback';
import DefaultMainImage from '~/public/images/default-game-main-image.jpg';
import * as styles from './select-game-result.css';

type SelectGameResultProps = {
  game: Pick<SuggestedGame, 'title' | 'titleKo' | 'mainImage' | 'publicId'>;
};

export default function SelectGameResult({ game }: SelectGameResultProps) {
  return (
    <div className={styles.result}>
      <div className={styles.imageItem}>
        <ImageWithFallback
          src={game.mainImage}
          alt=""
          fallbackSrc={DefaultMainImage}
          width="200"
          height="150"
          className={styles.image}
        />
      </div>
      <div className={styles.textItem}>{getGameTitle(game)}</div>
    </div>
  );
}
