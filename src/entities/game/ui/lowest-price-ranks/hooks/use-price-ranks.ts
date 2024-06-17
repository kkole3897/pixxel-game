function getRankText(rank: number) {
  if (rank === 1) {
    return `${rank}st`;
  }

  if (rank === 2) {
    return `${rank}nd`;
  }

  if (rank === 3) {
    return `${rank}rd`;
  }

  return `${rank}th`;
}

export function useRank(rank: number) {
  const normalizedRank = rank < 1 ? 1 : rank;
  const rankText = getRankText(normalizedRank);

  return {
    normalizedRank,
    rankText,
  };
}
