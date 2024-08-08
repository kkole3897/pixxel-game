import { RiErrorWarningFill } from '@remixicon/react';
import dayjs from '@/shared/lib/dayjs';
import cn from 'classnames';

import * as styles from './tracking-date-alert-box.css';

type TrackingDateAlertBoxProps = {
  className?: string;
  date: string;
};

export default function TrackingDateAlertBox({
  className,
  date,
}: TrackingDateAlertBoxProps) {
  const composedClassName = cn(styles.box, className);

  const dateText = dayjs(date).tz().format('YY.MM.DD');

  return (
    <div className={composedClassName}>
      <RiErrorWarningFill size={16} />
      <div className={styles.textArea}>
        <span className={styles.date}>{dateText}</span>&nbsp; 이전 데이터는
        없거나 부정확할 수 있습니다.
      </div>
    </div>
  );
}
