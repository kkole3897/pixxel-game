import { Logo } from '../logo';
import * as styles from './base-header.css';

type BaseHeaderProps = {
  rightSlot?: React.ReactNode;
};

export default function BaseHeader({ rightSlot }: BaseHeaderProps) {
  return (
    <div className={styles.container}>
      <div>
        <Logo />
      </div>
      <div>{rightSlot}</div>
    </div>
  );
}
