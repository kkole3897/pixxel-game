'use client';

import { RiArrowLeftSLine } from '@remixicon/react';
import cn from 'classnames';

import * as styles from './prev-button.css';
import { useRestorePrevPage } from '../../lib';

type PrevButtonProps = {
  id?: string;
  className?: string;
};

export default function PrevButton({
  className,
  ...props
}: PrevButtonProps = {}) {
  const composedRootClassName = cn(styles.button, className);

  const { pushPrevPage } = useRestorePrevPage();

  const handleClick = () => {
    pushPrevPage();
  };

  return (
    <button
      type="button"
      className={composedRootClassName}
      onClick={handleClick}
      {...props}
    >
      <RiArrowLeftSLine className={styles.icon} />
    </button>
  );
}
