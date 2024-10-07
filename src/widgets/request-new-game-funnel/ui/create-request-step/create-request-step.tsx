'use client';

import { useRef } from 'react';
import { RiArrowLeftSLine } from '@remixicon/react';
import { useQueryClient } from '@tanstack/react-query';
import type { PostgrestError } from '@supabase/supabase-js';

import {
  CreateRequestedGameForm,
  useGeneratedStoreIdentifierStore,
  useCreateRequestedGameMutation,
  requestNewGameQueryKeys,
  type CreateRquestedGameFormProps,
} from '@/features/request-new-game';
import { Button } from '@/shared/ui/button';
import { LoadingDialog } from '@/shared/ui/loading-dialog';
import { Toaster, createTopToaster, Toast } from '@/shared/ui/toast';
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

  const [storeIdentifier, setStoreIdentifier] =
    useGeneratedStoreIdentifierStore((state) => [
      state.storeIdentifier,
      state.setStoreIdentifier,
    ]);
  const { mutateAsync, isPending } = useCreateRequestedGameMutation();

  const initialState = useRef<CreateRquestedGameFormProps['initialState']>({
    ...(!storeIdentifier ? { store: 'steam', slug: '' } : storeIdentifier),
    title: '',
  });

  if (!storeIdentifier) {
    return null;
  }

  const toaster = createTopToaster<{
    description: React.ReactNode;
    type?: 'default' | 'error';
  }>();

  const handleSubmit: CreateRquestedGameFormProps['onSubmit'] = async (
    data
  ) => {
    try {
      await mutateAsync(data);

      setStoreIdentifier({ store: data.store, slug: data.slug });
    } catch (error) {
      const postgressError = error as PostgrestError;

      if (postgressError.code === '23505') {
        toaster.create({
          description: '동일한 요청이 있습니다. 다른 게임으로 요청해주세요.',
          type: 'error',
        });

        return;
      }

      toaster.create({
        description: '네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
      });

      throw error;
    }

    await queryClient.invalidateQueries({
      queryKey:
        requestNewGameQueryKeys.getExistedRequest(storeIdentifier).queryKey,
    });

    onNext?.();
  };

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
          initialState={initialState.current}
          onSubmit={handleSubmit}
        />
      </div>
      <LoadingDialog open={isPending} />
      <Toaster toaster={toaster}>
        {(toast) => (
          <Toast.Root type={toast.type}>
            <Toast.Description>{toast.description}</Toast.Description>
          </Toast.Root>
        )}
      </Toaster>
    </div>
  );
}
