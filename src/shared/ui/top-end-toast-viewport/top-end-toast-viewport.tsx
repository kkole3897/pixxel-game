import { ToastViewport } from '@/shared/lib/primitives/toast';

import * as styles from './top-end-taost-viewport.css';

export default function TopEndToastViewport() {
  return <ToastViewport placement="top-end" className={styles.viewport} />;
}
