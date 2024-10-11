type Grade =
  | 'OverwhelminglyPositive'
  | 'VeryPositive'
  | 'MostlyPositive'
  | 'Positive'
  | 'Mixed'
  | 'Negative'
  | 'MostlyNegative'
  | 'VeryNegative'
  | 'OverwhelminglyNegative'
  | 'Empty';

export function useGrade({
  positive,
  totalCount,
}: {
  positive: number;
  totalCount: number;
}) {
  const percent = totalCount <= 0 ? 0 : (positive / totalCount) * 100;

  function getGrade(percent: number, totalCount: number): Grade {
    if (totalCount <= 0) {
      return 'Empty';
    }

    if (totalCount >= 500 && percent >= 95) {
      return 'OverwhelminglyPositive';
    } else if (totalCount >= 500 && percent < 20) {
      return 'OverwhelminglyNegative';
    } else if (totalCount < 50 && percent >= 80) {
      return 'Positive';
    } else if (totalCount < 50 && percent < 20) {
      return 'Negative';
    } else if (percent >= 80) {
      return 'VeryPositive';
    } else if (percent >= 70) {
      return 'MostlyPositive';
    } else if (percent >= 40) {
      return 'Mixed';
    } else if (percent >= 20) {
      return 'MostlyNegative';
    }

    return 'VeryNegative';
  }

  const grade = getGrade(percent, totalCount);
  const isEmpty = totalCount <= 0;

  return {
    percent,
    grade,
    isEmpty,
  };
}

export function useGradeFormat({
  positive,
  totalCount,
}: {
  positive: number;
  totalCount: number;
}) {
  const { percent, grade } = useGrade({ positive, totalCount });

  const percentText = `${Math.floor(percent)}%`;

  const gradeTextMap: Record<Grade, string> = {
    OverwhelminglyPositive: '압도적으로 긍정적',
    VeryPositive: '매우 긍정적',
    MostlyPositive: '대체로 긍정적',
    Positive: '긍정적',
    Mixed: '복합적',
    Negative: '부정적',
    MostlyNegative: '대체로 부정적',
    VeryNegative: '매우 부정적',
    OverwhelminglyNegative: '압도적으로 부정적',
    Empty: '평가 없음',
  };
  const gradeText = gradeTextMap[grade];
  const totalCountText = `${totalCount.toLocaleString()}명`;

  return {
    percentText,
    gradeText,
    totalCountText,
  };
}
