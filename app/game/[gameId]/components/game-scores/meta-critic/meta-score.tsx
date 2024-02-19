import * as styles from './styles.css';
import { useScoreGrade } from './use-score';

export default function MetaScore({ score }: { score: number }) {
  const { grade } = useScoreGrade(score);

  if (score < 0) {
    return (
      <div className={styles.metaScore[grade]}>tbd</div>
    );
  }

  return (
    <div className={styles.metaScore[grade]}>{score}</div>
  );
}
