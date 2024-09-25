'use client';

import cn from 'classnames';

import {
  ExistedGameLink,
  ExistedRequestCard,
  useCheckExistedGameQuery,
  useCheckExistedRequestQuery,
  useGeneratedStoreIdentifierStore,
} from '@/features/request-new-game';
import * as styles from './check-existed-result-section.css';

export type CheckExistedResultSectionProps = {
  className?: string;
};

export default function CheckExistedResultSection({
  className,
}: CheckExistedResultSectionProps) {
  const composedClassName = cn(styles.section, className);

  const { storeIdentifier } = useGeneratedStoreIdentifierStore(
    (state) => state
  );

  const { data: existedGameData, status: checkExistedGameStatus } =
    useCheckExistedGameQuery(storeIdentifier);
  const { data: existedRequestData, status: checkExistedRequestStatus } =
    useCheckExistedRequestQuery(storeIdentifier);

  if (
    checkExistedGameStatus === 'pending' &&
    checkExistedRequestStatus === 'pending'
  ) {
    // TODO: 로딩 처리
    return null;
  }

  if (
    checkExistedGameStatus === 'success' &&
    existedGameData === null &&
    checkExistedRequestStatus === 'success' &&
    existedRequestData === null
  ) {
    return null;
  }

  return (
    <div className={composedClassName}>
      {checkExistedGameStatus === 'pending' ? null : checkExistedGameStatus ===
        'error' ? (
        <div></div>
      ) : existedGameData ? (
        <div>
          <ExistedGameLink game={existedGameData.game} />
          <div className={styles.resultDescription}>
            이미 등록된 게임이 있습니다.
          </div>
        </div>
      ) : null}
      {checkExistedRequestStatus ===
      'pending' ? null : checkExistedRequestStatus === 'error' ? (
        <div></div>
      ) : existedRequestData ? (
        <div>
          <ExistedRequestCard request={existedRequestData} />
          <div className={styles.resultDescription}>
            동일한 요청이 존재합니다.
          </div>
        </div>
      ) : null}
    </div>
  );
}
