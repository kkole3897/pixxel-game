type ScoreGrade = 'good' | 'normal' | 'bad' | 'default';

const TBD = 'tbd';

const isTbd = (score: number) => score < 0;

export function useScoreGrade(score: number) {
  const getGrade = (score: number): ScoreGrade => {
    const isGood = (score: number) => score >= 75;
    const isNormal = (score: number) => score >= 50;

    if (isTbd(score)) {
      return 'default';
    } else if (isGood(score)) {
      return 'good';
    } else if (isNormal(score)) {
      return 'normal';
    }

    return 'bad';
  };

  const grade = getGrade(score);

  return {
    grade,
  };
}

export function useMetaScoreFormat(score: number) {
  function getScoreText(score: number) {
    if (isTbd(score)) {
      return TBD;
    }

    return score.toString();
  }

  const scoreText = getScoreText(score);

  return {
    scoreText,
  };
}

export function useUserScoreFormat(score: number) {
  function getScoreText(score: number) {
    if (isTbd(score)) {
      return TBD;
    }

    const scaledScore = score / 10;

    return scaledScore.toFixed(1);
  }

  const scoreText = getScoreText(score);

  return {
    scoreText,
  };
}
