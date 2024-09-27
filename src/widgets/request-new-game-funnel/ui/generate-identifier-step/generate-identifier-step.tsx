'use client';

import { CheckExistedResult } from '../check-existed-result';
import {
  GenerateStoreIdentifierForm,
  GENERATE_STORE_IDENTIFIER_SUCCESS_TYPE,
  type GenerateStoreIdentifierFormProps,
} from '@/features/request-new-game';
import * as styles from './generate-identifier-step.css';

type GenerateIdentifierStepProps = {
  onNext?: () => void;
};

export default function GenerateIdentifierStep({
  onNext,
}: GenerateIdentifierStepProps) {
  const handleSuccess: GenerateStoreIdentifierFormProps['onSuccess'] = (
    successType
  ) => {
    if (
      successType === GENERATE_STORE_IDENTIFIER_SUCCESS_TYPE.requestAvailable
    ) {
      onNext?.();
      return;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.guideArea}>
        <p>
          원하는 게임의 상세 페이지 url만 입력하면 수집에 필요한 데이터를
          자동으로 생성합니다.
        </p>
        <p>지원 스토어: 스팀, 에픽</p>
      </div>
      <GenerateStoreIdentifierForm onSuccess={handleSuccess} />
      <CheckExistedResult className={styles.result} />
    </div>
  );
}
