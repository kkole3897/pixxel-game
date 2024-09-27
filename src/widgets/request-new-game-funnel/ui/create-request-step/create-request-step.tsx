'use client';

import { RiArrowLeftSLine } from '@remixicon/react';

import {
  CreateRequestedGameForm,
  useGeneratedStoreIdentifierStore,
  useCreateRequestedGameMutation,
  type CreateRquestedGameFormProps,
} from '@/features/request-new-game';
import { Button } from '@/shared/ui/button';
import { LoadingDialog } from '@/shared/ui/loading-dialog';

type CreateRequestStepProps = {
  onNext?: () => void;
  onPrev?: () => void;
};

export default function CreateRequestStep({
  onNext,
  onPrev,
}: CreateRequestStepProps) {
  const storeIdentifier = useGeneratedStoreIdentifierStore(
    (state) => state.storeIdentifier
  );
  const { mutateAsync, isPending } = useCreateRequestedGameMutation();

  if (!storeIdentifier) {
    return null;
  }

  const initialState = {
    ...storeIdentifier,
    title: '',
  };

  const handleSubmit: CreateRquestedGameFormProps['onSubmit'] = async (
    data
  ) => {
    await mutateAsync(data);
    onNext?.();
  };

  // TODO: 중복 오류 처리
  // TODO: 그 이외의 에러일 경우 toast 처리
  return (
    <div>
      <Button variant="text" onClick={() => onPrev?.()}>
        <RiArrowLeftSLine />
      </Button>
      <CreateRequestedGameForm
        initialState={initialState}
        onSubmit={handleSubmit}
      />
      <LoadingDialog open={isPending} />
    </div>
  );
}
