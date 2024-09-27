'use client';

import { RiArrowLeftSLine } from '@remixicon/react';
import { useQueryClient } from '@tanstack/react-query';

import {
  CreateRequestedGameForm,
  useGeneratedStoreIdentifierStore,
  useCreateRequestedGameMutation,
  requestNewGameQueryKeys,
  type CreateRquestedGameFormProps,
} from '@/features/request-new-game';
import { Button } from '@/shared/ui/button';
import { LoadingDialog } from '@/shared/ui/loading-dialog';
import * as styles from './create-request-step.css';

type CreateRequestStepProps = {
  onNext?: () => void;
  onPrev?: () => void;
};

export default function CreateRequestStep({
  onNext,
  onPrev,
}: CreateRequestStepProps) {
  const queryClient = useQueryClient();

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
    await queryClient.invalidateQueries({
      queryKey:
        requestNewGameQueryKeys.getExistedRequest(storeIdentifier).queryKey,
    });
    onNext?.();
  };

  // TODO: 중복 오류 처리
  // TODO: 그 이외의 에러일 경우 toast 처리
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Button
          variant="text"
          onClick={() => onPrev?.()}
          className={styles.backButton}
        >
          <RiArrowLeftSLine />
        </Button>
      </div>
      <div className={styles.formArea}>
        <CreateRequestedGameForm
          initialState={initialState}
          onSubmit={handleSubmit}
        />
      </div>
      <LoadingDialog open={isPending} />
    </div>
  );
}
