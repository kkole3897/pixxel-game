import * as styles from './genre-badge.css';
import { useGenre, type Genre } from '../../model';

export default function GenreBadge({ genre }: { genre: Genre }) {
  const { translatedGenre } = useGenre(genre);

  return <div className={styles.badgeContainer}>{translatedGenre}</div>;
}
