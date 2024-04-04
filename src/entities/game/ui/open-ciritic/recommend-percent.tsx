import { useId } from 'react';
import { useScoreFormat, useScoreRadial } from './use-score';
import * as styles from './styles.css';
import type { OpenCriticTier } from '../../model';
import { assignInlineVarsServer } from '@/src/shared/lib/vanilla-extract/dynamic';

export default function RecommendPercent({
  percent,
  tier,
}: {
  percent: number;
  tier: OpenCriticTier;
}) {
  const gradientId = useId();
  const { percentText } = useScoreFormat(percent);
  const { transform, dashArray } = useScoreRadial(percent);

  return (
    <div className={styles.container}>
      <div className={styles.outerOrb}></div>
      <svg
        viewBox="0 0 32 32"
        width={38}
        height={38}
        className={styles.radial}
        style={assignInlineVarsServer({ [styles.radialTransform]: transform })}
      >
        <defs>
          <linearGradient id={gradientId}>
            <stop offset="0" className={styles.gradientStart[tier]}></stop>
            <stop offset="22%" className={styles.gradientStart[tier]}></stop>
            <stop offset="78%" className={styles.gradientStop[tier]}></stop>
            <stop offset="100%" className={styles.gradientStop[tier]}></stop>
          </linearGradient>
        </defs>
        <circle
          r="16"
          cx="16"
          cy="16"
          stroke="#2e2e2e"
          strokeWidth="32"
          fill={`url(#${gradientId})`}
          className={styles.circle}
          style={assignInlineVarsServer({
            [styles.circleDashArray]: dashArray,
          })}
        ></circle>
      </svg>
      <div className={styles.innerOrb}>{percentText}</div>
    </div>
  );
}
