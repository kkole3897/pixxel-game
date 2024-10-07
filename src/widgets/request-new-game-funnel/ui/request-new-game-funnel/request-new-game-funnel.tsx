'use client';

import { useState } from 'react';

import { GenerateIdentifierStep } from '../generate-identifier-step';
import { CreateRequestStep } from '../create-request-step';
import { SuccessRequestStep } from '../success-request-step';
import { useGeneratedStoreIdentifierStore } from '@/features/request-new-game';

type RequestNewGameStep =
  | 'generateIdentifier'
  | 'createRequest'
  | 'successRequest';

export default function RequestNewGameFunnel() {
  const [step, setStep] = useState<RequestNewGameStep>('generateIdentifier');

  const setStoreIdentifier = useGeneratedStoreIdentifierStore(
    (state) => state.setStoreIdentifier
  );

  const handleConfirmStep = () => {
    setStoreIdentifier(null);
    setStep('generateIdentifier');
  };

  switch (step) {
    case 'generateIdentifier':
      return <GenerateIdentifierStep onNext={() => setStep('createRequest')} />;
    case 'createRequest':
      return (
        <CreateRequestStep
          onNext={() => setStep('successRequest')}
          onPrev={() => setStep('generateIdentifier')}
        />
      );
    case 'successRequest':
      return <SuccessRequestStep onConfirm={handleConfirmStep} />;
  }
}
