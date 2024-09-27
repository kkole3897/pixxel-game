'use client';

import { CheckExistedResult } from '../check-existed-result';
import {
  GenerateStoreIdentifierForm,
  GENERATE_STORE_IDENTIFIER_SUCCESS_TYPE,
  type GenerateStoreIdentifierFormProps,
} from '@/features/request-new-game';
import * as styles from './generate-identifier-step.css';

export default function GenerateIdentifierStep() {
  const handleSuccess: GenerateStoreIdentifierFormProps['onSuccess'] = (
    successType
  ) => {
    if (
      successType === GENERATE_STORE_IDENTIFIER_SUCCESS_TYPE.requestAvailable
    ) {
      // TODO: 다음 스텝으로 이동
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
