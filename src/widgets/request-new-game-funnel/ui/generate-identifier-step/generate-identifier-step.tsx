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
    <div>
      <GenerateStoreIdentifierForm onSuccess={handleSuccess} />
      <CheckExistedResult className={styles.result} />
    </div>
  );
}
