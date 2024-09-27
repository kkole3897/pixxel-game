'use client';

import cn from 'classnames';

import {
  ExistedGameLink,
  ExistedRequestCard,
  useGetExistedGameQuery,
  useGetExistedRequestQuery,
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

  const { data: existedGameData } = useGetExistedGameQuery(storeIdentifier);
  const { data: existedRequestData } =
    useGetExistedRequestQuery(storeIdentifier);

  if (existedGameData) {
    return (
      <div className={composedClassName}>
        <div>
          <ExistedGameLink game={existedGameData.game} />
          <div className={styles.resultDescription}>
            이미 등록된 게임이 있습니다.
          </div>
        </div>
      </div>
    );
  } else if (existedRequestData) {
    return (
      <div className={composedClassName}>
        <div>
          <ExistedRequestCard request={existedRequestData} />
          <div className={styles.resultDescription}>
            동일한 요청이 존재합니다.
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
