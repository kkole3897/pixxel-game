'use client';

import { useState } from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { useRouter } from 'next/navigation';

import { Button } from '@/shared/ui/button';
import { useGetUserQuery, useDeleteUserMutation } from '@/entities/user';
import { createClient } from '@/shared/lib/supabase/client';
import * as styles from './delete-user-alert-dialog.css';

type DeleteUserAlertDialogProps = {
  trigger?: React.ReactNode;
};

export default function DeleteUserAlertDialog({
  trigger,
}: DeleteUserAlertDialogProps) {
  const [isOpened, setIsOpened] = useState(false);
  const { data: user } = useGetUserQuery();
  const { mutate } = useDeleteUserMutation();
  const supabase = createClient();
  const router = useRouter();

  const handleDelete = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (!user) {
      return;
    }

    mutate(undefined, {
      onSuccess: async () => {
        await supabase.auth.signOut();
        router.replace('/');
      },
    });
  };

  return (
    <AlertDialog.Root open={isOpened} onOpenChange={setIsOpened}>
      <AlertDialog.Trigger asChild>{trigger}</AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className={styles.overlay} />
        <AlertDialog.Content className={styles.content}>
          <AlertDialog.Title className={styles.title}>
            정말 탈퇴하시겠습니까?
          </AlertDialog.Title>
          <AlertDialog.Description className={styles.description}>
            탈퇴시, 기존 정보는 모두 삭제되며, 복구할 수 없습니다.
          </AlertDialog.Description>
          <div className={styles.actionArea}>
            <AlertDialog.Cancel asChild>
              <Button type="button" className={styles.cancelButton}>
                취소
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <Button
                type="button"
                className={styles.deleteButton}
                onClick={handleDelete}
              >
                탈퇴
              </Button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
