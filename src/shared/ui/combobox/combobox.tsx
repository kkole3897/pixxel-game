import React, { forwardRef } from 'react';
import cn from 'classnames';
import { Slot } from '@radix-ui/react-slot';

import {
  SelectableCollection,
  SelectableCollectionItem,
} from '@/shared/ui/selectable-collection';
import { Input as BaseInput } from '@/shared/ui/input';
import * as PrimitiveCombobox from '@/shared/lib/primitives/combobox';
import type {
  ComboboxControlProps,
  ComboboxInputProps as PrimitiveComboboxInputProps,
  ComboboxContentProps as PrimitiveComboboxContentProps,
  ComboboxItemProps as PrimitiveComboboxItemProps,
} from '@/shared/lib/primitives/combobox';
export type { ComboboxProps } from '@/shared/lib/primitives/combobox';

import * as styles from './combobox.css';

const ComboBox = PrimitiveCombobox.Combobox;

const ComboboxControl = forwardRef<HTMLDivElement, ComboboxControlProps>(
  ({ className, ...props }, forwardedRef) => {
    const composedClassName = cn(styles.control, className);

    return (
      <PrimitiveCombobox.Control
        {...props}
        ref={forwardedRef}
        className={composedClassName}
      />
    );
  }
);

ComboboxControl.displayName = 'ComboboxControl';

type ComboboxInputProps = React.PropsWithChildren<PrimitiveComboboxInputProps>;

const ComboboxInput = forwardRef<HTMLInputElement, ComboboxInputProps>(
  ({ children, asChild, ...props }, forwardedRef) => {
    const Component = asChild ? Slot : BaseInput;

    return (
      <PrimitiveCombobox.Input asChild {...props} ref={forwardedRef}>
        <Component>{children}</Component>
      </PrimitiveCombobox.Input>
    );
  }
);

ComboboxInput.displayName = 'ComboboxInput';

type ComboboxContentProps = Omit<PrimitiveComboboxContentProps, 'asChild'>;

const ComboboxContent = forwardRef<HTMLDivElement, ComboboxContentProps>(
  ({ children, className, sideOffset = 8, ...props }, forwardedRef) => {
    const composedClassName = cn(styles.content, className);

    return (
      <PrimitiveCombobox.Content
        asChild
        {...props}
        className={composedClassName}
        sideOffset={sideOffset}
      >
        <SelectableCollection ref={forwardedRef}>
          {children}
        </SelectableCollection>
      </PrimitiveCombobox.Content>
    );
  }
);

ComboboxContent.displayName = 'ComboboxContent';

type ComboboxItemProps = Omit<PrimitiveComboboxItemProps, 'asChild'>;

const ComboboxItem = forwardRef<HTMLDivElement, ComboboxItemProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <PrimitiveCombobox.Item asChild {...props} ref={forwardedRef}>
        <SelectableCollectionItem>{children}</SelectableCollectionItem>
      </PrimitiveCombobox.Item>
    );
  }
);

ComboboxItem.displayName = 'ComboboxItem';

const Root = ComboBox;
const Control = ComboboxControl;
const Input = ComboboxInput;
const Content = ComboboxContent;
const Item = ComboboxItem;

export {
  Root,
  Control,
  Input,
  Content,
  Item,
  type ComboboxControlProps,
  type ComboboxInputProps,
  type ComboboxContentProps,
  type ComboboxItemProps,
};
