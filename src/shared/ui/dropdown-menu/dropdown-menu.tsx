import * as PrimitiveDropdownMenu from '@radix-ui/react-dropdown-menu';
import type {
  DropdownMenuContentProps as PrimitiveDropdownMenuContentProps,
  DropdownMenuItemProps as PrimitiveDropdownMenuItemProps,
} from '@radix-ui/react-dropdown-menu';
import { forwardRef } from 'react';
import cn from 'classnames';

import * as styles from './dropdown-menu.css';

export const Root = PrimitiveDropdownMenu.Root;
export const Trigger = PrimitiveDropdownMenu.Trigger;
export const Portal = PrimitiveDropdownMenu.Portal;

export const Content = forwardRef<
  HTMLDivElement,
  PrimitiveDropdownMenuContentProps
>(({ className, ...props }, forwardedRef) => {
  const composedClassName = cn(className, styles.content);

  return (
    <PrimitiveDropdownMenu.Content
      {...props}
      ref={forwardedRef}
      className={composedClassName}
    />
  );
});

Content.displayName = 'DropdownMenuContent';

export const Item = forwardRef<HTMLDivElement, PrimitiveDropdownMenuItemProps>(
  ({ className, ...props }, forwardedRef) => {
    const composedClassName = cn(className, styles.item);

    return (
      <PrimitiveDropdownMenu.Item
        {...props}
        ref={forwardedRef}
        className={composedClassName}
      />
    );
  }
);

Item.displayName = 'DropdownMenuItem';
