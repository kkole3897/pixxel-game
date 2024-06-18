'use client';

import cn from 'classnames';

import {
  useGameDetailQuery,
  MetaScore,
  MetaUserScore,
  OpenCriticRating,
  OpenCriticTop,
  OpenCriticRecommend,
  SteamScoreBar,
} from '@/entities/game';
import * as styles from './review-section.css';

type ReviewSeciontProps = {
  id?: string;
  className?: string;
  gamePublicId: string;
};

export default function ReviewSection({
  gamePublicId,
  className,
  ...props
}: ReviewSeciontProps) {
  const { data } = useGameDetailQuery(gamePublicId);

  const composedRootClassName = cn(className, styles.section);

  if (!data) {
    return null;
  }

  const metaScore = data.game.metaCritic?.metaScore ?? null;
  const metaUserScore = data.game.metaCritic?.userScore ?? null;
  const hasMetaScore = metaScore !== null;
  const hasMetaUserScore = metaUserScore !== null;
  const hasMetaCritic = hasMetaScore || hasMetaUserScore;

  const openCriticTier = data.game.openCritic?.tier ?? null;
  const topCriticScore = data.game.openCritic?.topCriticScore ?? null;
  const percentRecommended = data.game.openCritic?.percentRecommended ?? null;
  const hasOpenCritic =
    openCriticTier !== null &&
    topCriticScore !== null &&
    percentRecommended !== null;

  const steamPositive = data.game.steamScore?.positive ?? null;
  const steamTotal = data.game.steamScore?.total ?? null;
  const hasSteamScore = steamPositive !== null && steamTotal !== null;

  return (
    <div className={composedRootClassName} {...props}>
      {hasMetaCritic && (
        <div className={styles.reviewSiteArea}>
          <div className={styles.reviewSiteName}>메타크리틱</div>
          <div className={styles.reviewScoreArea}>
            {hasMetaScore && <MetaScore score={metaScore} />}
            {hasMetaUserScore && <MetaUserScore score={metaUserScore} />}
          </div>
        </div>
      )}
      {hasOpenCritic && (
        <div className={styles.reviewSiteArea}>
          <div className={styles.reviewSiteName}>오픈크리틱</div>
          <div className={styles.reviewScoreArea}>
            <OpenCriticRating tier={openCriticTier} />
            <OpenCriticTop tier={openCriticTier} score={topCriticScore} />
            <OpenCriticRecommend
              tier={openCriticTier}
              percent={percentRecommended}
            />
          </div>
        </div>
      )}
      {hasSteamScore && (
        <div className={styles.reviewSiteAreaGrow}>
          <div className={styles.reviewSiteName}>스팀</div>
          <div className={styles.reviewScoreArea}>
            <SteamScoreBar totalCount={steamTotal} positive={steamPositive} />
          </div>
        </div>
      )}
    </div>
  );
}
