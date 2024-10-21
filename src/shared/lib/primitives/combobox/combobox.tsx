'use client';

import React, {
  forwardRef,
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  type PropsWithChildren,
  useCallback,
} from 'react';
import * as PrimitivePopover from '@radix-ui/react-popover';
import type {
  PopoverProps as PrimitivePopoverProps,
  PopoverContentProps as PrimitivePopoverContentProps,
  PopoverAnchorProps as PrimitivePopoverAnchorProps,
} from '@radix-ui/react-popover';
import { Slot } from '@radix-ui/react-slot';

import { composeEventHandlers, composeRefs } from '@/shared/lib/react';

type UseComboboxContext = {
  isOpened: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
  isDisabled: boolean;
  values: string[];
  setValues: React.Dispatch<React.SetStateAction<string[]>>;
  multiple: boolean;
  itemMap: Map<
    React.RefObject<HTMLElement>,
    { ref: React.RefObject<HTMLElement>; value: string; disabled: boolean }
  >;
  controlElement: HTMLElement | null;
  setControlElement: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
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
  const itemMap = useRef<UseComboboxContext['itemMap']>(new Map()).current;
  const [controlElement, setControlElement] = useState<HTMLElement | null>(
    null
  );

  const context = {
    isOpened,
    setIsOpened,
    isDisabled: disabled,
    values,
    setValues,
    multiple,
    itemMap,
    controlElement,
    setControlElement,
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

    const composedRefs = composeRefs(forwardedRef, (node) => {
      context.setControlElement(node);
    });

    return (
      <PrimitivePopover.Anchor
        {...props}
        ref={composedRefs}
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

    const handleChange = composeEventHandlers(onChangeProp, (event) => {
      if (event.defaultPrevented) {
        return;
      }

      context.setIsOpened(true);
    });

    const handleFocus = () => {
      context.setIsOpened(true);
    };

    return (
      <Component
        {...props}
        ref={forwardedRef}
        disabled={context.isDisabled}
        data-disabled={context.isDisabled ? '' : undefined}
        onKeyDown={(event) => {
          if (['ArrowDown', 'ArrowUp'].includes(event.key)) {
            context.setIsOpened(true);
          } else if (event.key === 'Escape') {
            context.setIsOpened(false);
          }
        }}
        onChange={handleChange}
        onFocus={handleFocus}
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
    const [content, setContent] = useState<HTMLDivElement | null>(null);
    const compusedRef = composeRefs(forwardedRef, (node) => setContent(node));

    const handleOpenAutoFocus = composeEventHandlers(
      onOpenAutoFocus,
      (event) => {
        event.preventDefault();
      }
    );

    const handleInteractOutside: Exclude<
      PrimitivePopoverContentProps['onInteractOutside'],
      undefined
    > = useCallback(
      (event) => {
        const target = event.target as Element | null;
        const isInControl = target && context.controlElement?.contains(target);
        const isInContent = target && content?.contains(target);

        if (isInControl || isInContent) {
          event.preventDefault();
        } else {
          context.setIsOpened(false);
        }
      },
      [context.controlElement, content]
    );

    return (
      <PrimitivePopover.Portal>
        <PrimitivePopover.Content
          ref={compusedRef}
          {...props}
          onInteractOutside={handleInteractOutside}
          onOpenAutoFocus={handleOpenAutoFocus}
          onKeyDown={() => {
            console.log('content keydown');
          }}
          role="listbox"
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
    const ref = useRef<HTMLDivElement>(null);

    const composedRefs = composeRefs(forwardedRef, ref);

    useEffect(() => {
      context.itemMap.set(ref as React.RefObject<HTMLElement>, {
        ref,
        value,
        disabled: !!disabled,
      });
    });

    const isChecked = context.values.includes(value);
    const [isActive, setIsActive] = useState(false);

    const handleSelect = () => {
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

    const pointerTypeRef = useRef<React.PointerEvent['pointerType']>('touch');

    return (
      <div
        {...props}
        role="option"
        ref={composedRefs}
        tabIndex={disabled ? undefined : -1}
        data-highlighted={isActive ? '' : undefined}
        aria-selected={isChecked && isActive}
        data-state={isChecked ? 'checked' : 'unchecked'}
        aria-disabled={disabled || undefined}
        data-disabled={disabled ? '' : undefined}
        onPointerDown={(event) => {
          pointerTypeRef.current = event.pointerType;
        }}
        onPointerUp={() => {
          if (pointerTypeRef.current === 'mouse') {
            handleSelect();
          }
        }}
        onClick={() => {
          if (pointerTypeRef.current !== 'mouse') {
            handleSelect();
          }
        }}
        onPointerMove={(event) => {
          pointerTypeRef.current = event.pointerType;

          if (disabled) {
            return;
          } else if (pointerTypeRef.current === 'mouse') {
            setIsActive(true);
          }
        }}
        onPointerLeave={() => {
          setIsActive(false);
        }}
        onFocus={() => {
          setIsActive(true);
        }}
        onBlur={() => setIsActive(false)}
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
