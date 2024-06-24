import { Button } from '@/shared/ui/button';

import * as styles from './delete-user-button.css';

type DeleteUserButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function DeleteUserButton(props: DeleteUserButtonProps) {
  return (
    <Button type="button" variant="ghost" className={styles.button} {...props}>
      탈퇴하기
    </Button>
  );
}
