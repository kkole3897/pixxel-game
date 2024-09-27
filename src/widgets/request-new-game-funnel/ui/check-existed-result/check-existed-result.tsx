'use client';

import cn from 'classnames';

import {
  useGeneratedStoreIdentifierStore,
  useGetExistedGameQuery,
  useGetExistedRequestQuery,
  ExistedGameLink,
  ExistedRequestCard,
} from '@/features/request-new-game';
import * as styles from './check-existed-result.css';

type CheckExistedResultProps = {
  className?: string;
};

export default function CheckExistedResult({
  className,
}: CheckExistedResultProps) {
  const composedClassName = cn(className, styles.section);

  const storeIdentifier = useGeneratedStoreIdentifierStore(
    (state) => state.storeIdentifier
  );

  const { data: existedGame } = useGetExistedGameQuery(storeIdentifier);
  const { data: existedRequest } = useGetExistedRequestQuery(storeIdentifier);

  if (existedGame) {
    return (
      <div className={composedClassName}>
        <ExistedGameLink game={existedGame.game} />
        <div className={styles.resultDescription}>
          이미 등록된 게임이 있습니다.
        </div>
      </div>
    );
  } else if (existedRequest) {
    return (
      <div className={composedClassName}>
        <ExistedRequestCard request={existedRequest} />
        <div className={styles.resultDescription}>
          동일한 요청이 존재합니다.
        </div>
      </div>
    );
  } else {
    return null;
  }
}
