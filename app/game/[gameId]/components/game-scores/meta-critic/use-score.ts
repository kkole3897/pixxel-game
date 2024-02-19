type ScoreGrade = 'good' | 'normal' | 'bad' | 'default';

export function useScoreGrade(score: number) {


  const getGrade = (score: number): ScoreGrade => {
    const isDefault = (score: number) => (score < 0);
    const isGood = (score: number) => (score >= 75);
    const isNormal = (score: number) => (score >= 50);

    if (isDefault(score)) {
      return 'default';
    } else if (isGood(score)) {
      return 'good';
    } else if (isNormal(score)) {
      return 'normal';
    }

    return 'bad';
  }

  const grade = getGrade(score);

  return {
    grade,
  };
}
