import * as styles from './styles.css';
import { useScoreGrade, useMetaScoreFormat } from './use-score';

export default function MetaScore({ score }: { score: number }) {
  const { grade } = useScoreGrade(score);
  const { scoreText } = useMetaScoreFormat(score);

  return (
    <div className={styles.metaScore[grade]}>{scoreText}</div>
  );
}
