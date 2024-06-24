import * as AlertDialog from '@radix-ui/react-alert-dialog';

import * as styles from './delete-user-alert-dialog.css';
import { Button } from '@/shared/ui/button';

type DeleteUserAlertDialogProps = {
  trigger?: React.ReactNode;
};

export default function DeleteUserAlertDialog({
  trigger,
}: DeleteUserAlertDialogProps) {
  return (
    <AlertDialog.Root>
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
              <Button type="button" className={styles.deleteButton}>
                탈퇴
              </Button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
