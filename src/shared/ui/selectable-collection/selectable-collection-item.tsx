import { forwardRef } from 'react';
import cn from 'classnames';

import * as styles from './selectable-collection.css';

type SelectableCollectionItemProps = React.ComponentPropsWithoutRef<'div'>;

const SelectableCollectionItem = forwardRef<
  HTMLDivElement,
  SelectableCollectionItemProps
>(({ className, children, ...props }, forwardedRef) => {
  const composedClassName = cn(styles.item, className);

  return (
    <div {...props} className={composedClassName} ref={forwardedRef}>
      {children}
    </div>
  );
});

SelectableCollectionItem.displayName = 'SelectableCollectionItem';

export default SelectableCollectionItem;
