'use client';

import React, {
  forwardRef,
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
} from 'react';
import * as PrimitivePopover from '@radix-ui/react-popover';
import type {
  PopoverProps as PrimitivePopoverProps,
  PopoverContentProps as PrimitivePopoverContentProps,
  PopoverAnchorProps as PrimitivePopoverAnchorProps,
} from '@radix-ui/react-popover';
import { Slot } from '@radix-ui/react-slot';

import { composeEventHandlers } from '@/shared/lib/react';

type UseComboboxContext = {
  isOpened: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
  isDisabled: boolean;
  values: string[];
  setValues: React.Dispatch<React.SetStateAction<string[]>>;
  multiple: boolean;
};

const ComboboxContext = createContext<UseComboboxContext | undefined>(
  undefined
);

const ComboboxProvider = ComboboxContext.Provider;

function useComboboxContext() {
  const context = useContext(ComboboxContext);
  if (!context)
    throw new Error(
      'useComboboxContext must be used within a ComboboxProvider'
    );
  return context;
}

type ComboboxProps = Omit<
  PrimitivePopoverProps,
  'open' | 'onOpenChange' | 'modal'
> & {
  className?: string;
  disabled?: boolean;
  multiple?: boolean;
};

const Combobox = ({
  children,
  className,
  defaultOpen,
  disabled = false,
  multiple = false,
  ...props
}: ComboboxProps) => {
  const [isOpened, setIsOpened] = useState(defaultOpen ?? false);
  const [values, setValues] = useState<string[]>([]);

  const context = {
    isOpened,
    setIsOpened,
    isDisabled: disabled,
    values,
    setValues,
    multiple,
  };

  return (
    <ComboboxProvider value={context}>
      <PrimitivePopover.Root {...props} open={isOpened} modal={false}>
        {children}
      </PrimitivePopover.Root>
    </ComboboxProvider>
  );
};

Combobox.displayName = 'ComboboxRoot';

type ComboboxControlProps = PrimitivePopoverAnchorProps;

const ComboboxControl = forwardRef<HTMLDivElement, ComboboxControlProps>(
  ({ children, ...props }, forwardedRef) => {
    const context = useComboboxContext();

    return (
      <PrimitivePopover.Anchor
        {...props}
        ref={forwardedRef}
        data-disabled={context.isDisabled ? '' : undefined}
      >
        {children}
      </PrimitivePopover.Anchor>
    );
  }
);

ComboboxControl.displayName = 'ComboboxControl';

type ComboboxInputProps = {
  asChild?: boolean;
  children?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const ComboboxInput = forwardRef<HTMLInputElement, ComboboxInputProps>(
  ({ asChild, onChange: onChangeProp, ...props }, forwardedRef) => {
    const Component = asChild ? Slot : 'input';

    const context = useComboboxContext();

    const onChange = composeEventHandlers(onChangeProp, (event) => {
      if (event.defaultPrevented) {
        return;
      }

      context.setIsOpened(true);
    });

    return (
      <Component
        {...props}
        ref={forwardedRef}
        onChange={onChange}
        disabled={context.isDisabled}
        data-disabled={context.isDisabled ? '' : undefined}
      />
    );
  }
);

ComboboxInput.displayName = 'ComboboxInput';

type ComboboxContentProps = Omit<PrimitivePopoverContentProps, 'tabIndex'>;

const ComboboxContent = forwardRef<HTMLDivElement, ComboboxContentProps>(
  (
    { children, onPointerDownOutside, onOpenAutoFocus, ...props },
    forwardedRef
  ) => {
    const context = useComboboxContext();

    const handlePointerDownOutside = composeEventHandlers(
      onPointerDownOutside,
      (event) => {
        if (event.defaultPrevented) {
          return;
        }

        context.setIsOpened(false);
      }
    );

    const handleOpenAutoFocus = composeEventHandlers(
      onOpenAutoFocus,
      (event) => {
        event.preventDefault();
      }
    );

    return (
      <PrimitivePopover.Portal>
        <PrimitivePopover.Content
          ref={forwardedRef}
          {...props}
          onPointerDownOutside={handlePointerDownOutside}
          onOpenAutoFocus={handleOpenAutoFocus}
        >
          {children}
        </PrimitivePopover.Content>
      </PrimitivePopover.Portal>
    );
  }
);

ComboboxContent.displayName = 'ComboboxContent';

type ComboboxItemProps = PropsWithChildren<{
  id?: string;
  className?: string;
  disabled?: boolean;
  value: string;
}>;

const ComboboxItem = forwardRef<HTMLDivElement, ComboboxItemProps>(
  ({ value, children, disabled, ...props }, forwardedRef) => {
    const context = useComboboxContext();

    const isChecked = context.values.includes(value);

    const handlePointerDown = () => {
      if (context.isDisabled || disabled) {
        return;
      }

      if (isChecked) {
        context.setValues((prevValues) => {
          return prevValues.filter((prevValue) => prevValue !== value);
        });
      } else if (context.multiple) {
        context.setValues((prevValues) => {
          return [...prevValues, value];
        });
      } else {
        context.setValues([value]);
        context.setIsOpened(false);
      }
    };

    return (
      <div
        {...props}
        ref={forwardedRef}
        tabIndex={-1}
        data-state={isChecked ? 'checked' : 'unchecked'}
        data-disabled={disabled ? '' : undefined}
        onPointerDown={handlePointerDown}
      >
        {children}
      </div>
    );
  }
);

ComboboxItem.displayName = 'ComboboxItem';

const Root = Combobox;
const Control = ComboboxControl;
const Input = ComboboxInput;
const Content = ComboboxContent;
const Item = ComboboxItem;

export {
  Combobox,
  ComboboxControl,
  ComboboxInput,
  ComboboxContent,
  ComboboxItem,
  Root,
  Control,
  Input,
  Content,
  Item,
};
