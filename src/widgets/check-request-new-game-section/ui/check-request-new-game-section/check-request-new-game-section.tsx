'use client';

import { CheckExistedResultSection } from '../check-existed-result-section';
import { GenerateStoreIdentifierForm } from '@/features/request-new-game';

export default function CheckRequestNewGameSection() {
  return (
    <div>
      <GenerateStoreIdentifierForm />
      <CheckExistedResultSection />
    </div>
  );
}
