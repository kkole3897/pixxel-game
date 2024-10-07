import * as PrimitiveDialog from '@radix-ui/react-dialog';

import { PaperAirplane } from '@/shared/ui/lottie';
import * as styles from './loading-dialog.css';

type LoadingDialogProps = {
  open?: boolean;
};

export default function LoadingDialog({ open }: LoadingDialogProps) {
  return (
    <PrimitiveDialog.Root open={open}>
      <PrimitiveDialog.Portal>
        <PrimitiveDialog.Overlay className={styles.overlay} />
        <PrimitiveDialog.Content
          aria-describedby={undefined}
          className={styles.content}
        >
          <div className={styles.contentInner}>
            <PaperAirplane className={styles.paperAirplane} />
            <PrimitiveDialog.Title className={styles.title}>
              처리 중입니다
            </PrimitiveDialog.Title>
          </div>
        </PrimitiveDialog.Content>
      </PrimitiveDialog.Portal>
    </PrimitiveDialog.Root>
  );
}
