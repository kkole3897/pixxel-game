import { ToastViewport } from '@/shared/lib/primitives/toast';

import * as styles from './top-toast-viewport.css';

export default function TopToastViewport() {
  return <ToastViewport placement="top" className={styles.viewport} />;
}
