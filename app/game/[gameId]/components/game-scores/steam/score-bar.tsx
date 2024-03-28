'use client';

import * as Progress from '@radix-ui/react-progress';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import * as styles from './styles.css';
import { useGradeFormat, useGrade } from './use-grade';

export default function ScoreBar({
  positive,
  totalCount,
}: {
  positive: number;
  totalCount: number;
}) {
  const progress = positive;
  const max = totalCount;

  const { percentText, gradeText, totalCountText } = useGradeFormat({
    positive,
    totalCount,
  });
  const { percent } = useGrade({ positive, totalCount });

  return (
    <div className={styles.container}>
      <div className={styles.gradeContainer}>
        <span>{percentText}</span>
        <span>{gradeText}</span>
        <span>({totalCountText})</span>
      </div>
      <Progress.Root
        max={max}
        value={progress}
        className={styles.progressRoot}
        data-state=""
      >
        <Progress.Indicator
          className={styles.progressIndicator}
          style={assignInlineVars({
            [styles.indicatorActive]: `translateX(-${100 - percent}%)`,
          })}
        />
      </Progress.Root>
    </div>
  );
}
