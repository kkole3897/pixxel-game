import { forwardRef, LabelHTMLAttributes, PropsWithChildren } from 'react';
import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { type CheckboxProps as RadixCheckboxProps } from '@radix-ui/react-checkbox';
import cn from 'classnames';

import { CheckLine } from '@/shared/ui/icons';
import * as styles from './checkbox.css';

interface CheckboxProps extends Omit<RadixCheckboxProps, 'asChild'> {}

const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  (props, forwardedRef) => {
    const { className, ...rest } = props;

    const composedClassName = cn(className, styles.checkbox);

    return (
      <RadixCheckbox.Root
        className={composedClassName}
        ref={forwardedRef}
        {...rest}
      >
        <RadixCheckbox.Indicator className={styles.checkboxIndicator}>
          <CheckLine color="#ffffff" size="100%" className={styles.icon} />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
