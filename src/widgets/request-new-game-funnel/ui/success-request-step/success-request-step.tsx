'use client';

import {
  useGeneratedStoreIdentifierStore,
  useGetExistedRequestQuery,
  ExistedRequestCard,
} from '@/features/request-new-game';
import { Button } from '@/shared/ui/button';
import { CheckCircle } from '@/shared/ui/lottie';

import * as styles from './success-request-step.css';

type SuccessRequestStepProps = {
  onConfirm?: () => void;
};

export default function SuccessRequestStep({
  onConfirm,
}: SuccessRequestStepProps) {
  const storeIdentifier = useGeneratedStoreIdentifierStore(
    (state) => state.storeIdentifier
  );
  const { data } = useGetExistedRequestQuery(storeIdentifier);

  const handleClickReset = () => {
    onConfirm?.();
  };

  if (!data) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.checkAnimationArea}>
        <CheckCircle />
      </div>
      <h2 className={styles.title}>요청을 완료했습니다.</h2>
      <div className={styles.cardArea}>
        <ExistedRequestCard request={data} />
      </div>
      <div className={styles.confirmArea}>
        <Button onClick={handleClickReset} className={styles.confirmButton}>
          확인
        </Button>
      </div>
    </div>
  );
}
