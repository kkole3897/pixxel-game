import { forwardRef } from 'react';
import cn from 'classnames';

import * as styles from './selectable-collection.css';

type SelectableCollectionProps = React.ComponentPropsWithoutRef<'div'>;

const SelectableCollection = forwardRef<
  HTMLDivElement,
  SelectableCollectionProps
>(({ className, children, ...props }, forwardedRef) => {
  const composedClassName = cn(styles.collection, className);

  return (
    <div {...props} className={composedClassName} ref={forwardedRef}>
      {children}
    </div>
  );
});

SelectableCollection.displayName = 'SelectableCollection';

export default SelectableCollection;
