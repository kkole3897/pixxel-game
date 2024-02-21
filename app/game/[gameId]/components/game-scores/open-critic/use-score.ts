const isTbd = (score: number) => (score < 0);

export function useScoreFormat(score: number) {
  function formatScoreText(score: number): string {
    if (isTbd(score)) {
      return 'tbd';
    }

    return Math.floor(score).toString();
  }

  const scoreText = formatScoreText(score);

  return {
    scoreText,
  };
}

export function useScoreRadial(score: number) {
  const MAX = 100;
  const intScore = Math.floor(score);
  const value = MAX - intScore < 0 ? 0 : MAX - intScore;
  const angle = -360 * value / MAX / 2;

  const dashArray = `${value}, ${MAX}`;
  const transform = `rotate(${angle.toFixed(1)}deg)`;

  return {
    dashArray,
    transform,
  };
}
