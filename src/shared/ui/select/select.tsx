'use client';

import React, { forwardRef } from 'react';
import * as PrimitiveSelect from '@radix-ui/react-select';
import type {
  SelectTriggerProps,
  SelectIconProps,
  SelectContentProps,
  SelectItemProps,
  SelectItemIndicatorProps,
} from '@radix-ui/react-select';
import cn from 'classnames';
import { RiArrowDownSLine, RiArrowUpSLine } from '@remixicon/react';
import * as ScrollArea from '@radix-ui/react-scroll-area';

import { CheckLine } from '@/shared/ui/icons/check-line';
import * as SelectableCollection from '@/shared/ui/selectable-collection';
import * as styles from './select.css';

export const Root = PrimitiveSelect.Root;

type TriggerProps = Omit<SelectTriggerProps, 'asChild'>;

export const Trigger = forwardRef<HTMLButtonElement, TriggerProps>(
  ({ className, ...props }, forwardedRef) => {
    const composedClassName = cn(className, styles.trigger);

    return (
      <PrimitiveSelect.Trigger
        {...props}
        className={composedClassName}
        ref={forwardedRef}
      />
    );
  }
);

Trigger.displayName = 'SelectTrigger';

export const Value = PrimitiveSelect.Value;

type IconProps = Omit<SelectIconProps, 'asChild' | 'children'>;

export const Icon = forwardRef<HTMLSpanElement, IconProps>(
  ({ className, ...props }, forwardedRef) => {
    const composedClassName = cn(className, styles.iconContainer);

    return (
      <PrimitiveSelect.Icon
        {...props}
        className={composedClassName}
        ref={forwardedRef}
      >
        <RiArrowDownSLine className={styles.downIcon} />
        <RiArrowUpSLine className={styles.upIcon} />
      </PrimitiveSelect.Icon>
    );
  }
);

Icon.displayName = 'SelectIcon';

type ContentProps = Omit<SelectContentProps, 'position'>;

export const Content = forwardRef<HTMLDivElement, ContentProps>(
  ({ className, children, ...props }, forwardedRef) => {
    const composedClassName = cn(className, styles.content);

    return (
      <PrimitiveSelect.Portal>
        <PrimitiveSelect.Content
          {...props}
          className={composedClassName}
          position="popper"
          ref={forwardedRef}
          asChild
        >
          <SelectableCollection.Root>
            <ScrollArea.Root className={styles.contentScrollArea}>
              <PrimitiveSelect.Viewport asChild>
                <ScrollArea.Viewport
                  className={styles.viewport}
                  style={{ overflowY: undefined }}
                >
                  {children}
                </ScrollArea.Viewport>
              </PrimitiveSelect.Viewport>
              <ScrollArea.Scrollbar className={styles.contentScrollbar}>
                <ScrollArea.Thumb className={styles.contentScrollThumb} />
              </ScrollArea.Scrollbar>
            </ScrollArea.Root>
          </SelectableCollection.Root>
        </PrimitiveSelect.Content>
      </PrimitiveSelect.Portal>
    );
  }
);

Content.displayName = 'SelectContent';

type ItemProps = Omit<SelectItemProps, 'asChild'> & {
  left?: React.ReactNode;
  right?: React.ReactNode;
};

export const Item = forwardRef<HTMLDivElement, ItemProps>(
  ({ children, className, left, right, ...props }, forwardedRef) => {
    const composedClassName = cn(className, styles.item);

    return (
      <PrimitiveSelect.Item
        {...props}
        className={composedClassName}
        ref={forwardedRef}
        asChild
      >
        <SelectableCollection.Item>
          {left}
          <PrimitiveSelect.ItemText asChild>
            <div className={styles.itemContent}>{children}</div>
          </PrimitiveSelect.ItemText>
          {right}
        </SelectableCollection.Item>
      </PrimitiveSelect.Item>
    );
  }
);

Item.displayName = 'SelectItem';

type ItemIndicatorProps = Omit<
  SelectItemIndicatorProps,
  'asChild' | 'children'
>;

export const ItemIndicator = forwardRef<HTMLSpanElement, ItemIndicatorProps>(
  ({ className, ...props }, forwardedRef) => {
    const composedClassName = cn(className, styles.itemIndicator);

    return (
      <div className={composedClassName}>
        <PrimitiveSelect.ItemIndicator {...props} ref={forwardedRef} asChild>
          <CheckLine />
        </PrimitiveSelect.ItemIndicator>
      </div>
    );
  }
);

ItemIndicator.displayName = 'SelectItemIndicator';
