import * as styles from './styles.css';
import { useScoreGrade, useUserScoreFormat } from './use-score';

export default function UserScore({ score }: { score: number }) {
  const { grade } = useScoreGrade(score);
  const { scoreText } = useUserScoreFormat(score);

  return <div className={styles.userScore[grade]}>{scoreText}</div>;
}
