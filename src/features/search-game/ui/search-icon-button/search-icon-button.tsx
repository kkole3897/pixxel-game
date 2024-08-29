import { RiSearchLine } from '@remixicon/react';
import cn from 'classnames';
import { forwardRef } from 'react';

import * as styles from './search-icon-button.css';

type SearchIconButtonProps = {
  onClick?: () => void;
  className?: string;
  id?: string;
  label?: string;
};

const SearchIconButton = forwardRef<HTMLButtonElement, SearchIconButtonProps>(
  ({ className, label, ...props }, forwardedRef) => {
    const composedClassName = cn(styles.searchIconButton, className);

    return (
      <button
        type="button"
        className={composedClassName}
        aria-label={label}
        ref={forwardedRef}
        {...props}
      >
        <RiSearchLine className={styles.icon} />
      </button>
    );
  }
);

SearchIconButton.displayName = 'SearchIconButton';

export default SearchIconButton;
