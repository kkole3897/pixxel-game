import { RiSearchLine } from '@remixicon/react';
import cn from 'classnames';

import * as styles from './search-icon-button.css';

type SearchIconButtonProps = {
  onClick?: () => void;
  className?: string;
  id?: string;
  label?: string;
};

export default function SearchIconButton({
  className,
  label,
  ...props
}: SearchIconButtonProps) {
  const composedClassName = cn(styles.searchIconButton, className);

  return (
    <button
      type="button"
      className={composedClassName}
      aria-label={label}
      {...props}
    >
      <RiSearchLine size="auto" />
    </button>
  );
}
