'use client';

import { forwardRef } from 'react';
import * as RadixRadioGroup from '@radix-ui/react-radio-group';
import {
  type RadioGroupIndicatorProps,
  type RadioGroupItemProps,
} from '@radix-ui/react-radio-group';
import cn from 'classnames';

import * as styles from './radio-group.css';

const Root = RadixRadioGroup.Root;

type ItemProps = Omit<RadioGroupItemProps, 'asChild'>;

const Item = forwardRef<HTMLButtonElement, ItemProps>(
  ({ className, ...props }, forwardedRef) => {
    const composedClassName = cn(className, styles.radioGroupItem);

    return (
      <RadixRadioGroup.Item
        ref={forwardedRef}
        className={composedClassName}
        {...props}
      />
    );
  }
);
Item.displayName = 'RadioGroupItem';

type IndicatorProps = Omit<RadioGroupIndicatorProps, 'asChild' | 'children'>;

const Indicator = forwardRef<HTMLSpanElement, IndicatorProps>(
  ({ className, ...props }, forwardedRef) => {
    const composedClassName = cn(className, styles.radioGroupIndicator);

    return (
      <RadixRadioGroup.Indicator
        ref={forwardedRef}
        className={composedClassName}
        {...props}
      />
    );
  }
);
Indicator.displayName = 'RadioGroupIndicator';

export { Root, Item, Indicator };
