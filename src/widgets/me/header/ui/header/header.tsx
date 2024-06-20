import { PrevButton } from '@/features/restore-prev-page';
import * as styles from './header.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <PrevButton />
      </div>
    </header>
  );
}
