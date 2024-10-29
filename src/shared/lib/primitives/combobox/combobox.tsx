'use client';

import React, {
  forwardRef,
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  useCallback,
  useId,
  type PropsWithChildren,
} from 'react';
import * as PrimitivePopover from '@radix-ui/react-popover';
import type {
  PopoverProps as PrimitivePopoverProps,
  PopoverContentProps as PrimitivePopoverContentProps,
  PopoverAnchorProps as PrimitivePopoverAnchorProps,
} from '@radix-ui/react-popover';
import { Slot } from '@radix-ui/react-slot';

import { useControllableState } from '../lib';
import { composeEventHandlers, composeRefs } from '@/shared/lib/react';

function generateContentId(rootId: string) {
  return `combobox-${rootId}-content`;
}

function generateItemId(rootId: string, value: string) {
  return `combobox-${rootId}-item-${value}`;
}

type ComboboxContextValue = {
  isOpened?: boolean;
  setIsOpened: (isOpened: boolean) => void;
  isDisabled: boolean;
  values?: string[];
  setValues: (value: string[]) => void;
  multiple: boolean;
  itemMap: Map<
    React.RefObject<HTMLElement>,
    {
      ref: React.RefObject<HTMLElement>;
      value: string;
      disabled: boolean;
      label?: string;
    }
  >;
  controlElement: HTMLElement | null;
  setControlElement: (element: HTMLElement | null) => void;
  id: string;
  activeValue: string | null;
  setActiveValue: (value: string | null) => void;
  inputElement: HTMLElement | null;
  setInputElement: (element: HTMLElement | null) => void;
  inputValue: string;
  setInputValue: (value: string) => void;
  handleValueSelect: (value: string) => void;
};

function selectedValuesToString(
  itemMap: ComboboxContextValue['itemMap'],
  values: string[]
) {
  if (values.length > 1 || values.length === 0) {
    return '';
  }

  const items = Array.from(itemMap.values());

  const selectedItem = items.find((item) => item.value === values[0]);

  return !selectedItem ? '' : selectedItem.label ?? selectedItem.value;
}

const ComboboxContext = createContext<ComboboxContextValue | undefined>(
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

export type ComboboxProps = Omit<PrimitivePopoverProps, 'modal'> & {
  className?: string;
  disabled?: boolean;
  multiple?: boolean;
  defaultValue?: string[];
  value?: string[];
  onValueChange?: (value: string[]) => void;
};

const Combobox = ({
  children,
  className,
  defaultOpen,
  disabled = false,
  multiple = false,
  defaultValue,
  value,
  open,
  onValueChange,
  onOpenChange,
  ...props
}: ComboboxProps) => {
  const [isOpened, setIsOpened] = useControllableState({
    defaultValue: defaultOpen,
    value: open,
    onChange: onOpenChange,
  });
  const [values, setValues] = useControllableState({
    defaultValue: defaultValue,
    value: value,
    onChange: onValueChange,
  });
  const itemMap = useRef<ComboboxContextValue['itemMap']>(new Map()).current;
  const [controlElement, setControlElement] = useState<HTMLElement | null>(
    null
  );
  const id = useRef(useId()).current;
  const [activeValue, setActiveValue] = useState<string | null>(null);
  const [inputElement, setInputElement] = useState<HTMLElement | null>(null);
  const [inputValue, setInputValue] = useState('');

  const handleValueSelect = (value: string) => {
    let newValues: string[] = [];

    if (multiple) {
      if (!values) {
        newValues = [value];
      } else if (values.includes(value)) {
        newValues = values.filter((prevValue) => prevValue !== value);
      } else {
        newValues = [...values, value];
      }
    } else {
      newValues = [value];
    }

    setValues(newValues);

    if (!multiple) {
      setIsOpened(false);
      const newInputValue = selectedValuesToString(itemMap, newValues);
      setInputValue(newInputValue);
    }
  };

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
    id,
    activeValue,
    setActiveValue,
    inputElement,
    setInputElement,
    inputValue,
    setInputValue,
    handleValueSelect,
  };

  useEffect(() => {
    if (!isOpened) {
      setActiveValue(null);
    }
  }, [isOpened]);

  return (
    <ComboboxProvider value={context}>
      <PrimitivePopover.Root {...props} open={isOpened} modal={false}>
        {children}
      </PrimitivePopover.Root>
    </ComboboxProvider>
  );
};

Combobox.displayName = 'PrimitiveComboboxRoot';

export type ComboboxControlProps = PrimitivePopoverAnchorProps;

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

ComboboxControl.displayName = 'PrimitiveComboboxControl';

export type ComboboxInputProps = {
  asChild?: boolean;
  children?: React.ReactNode;
  placeholder?: string;
  name?: string;
  value?: string;
  className?: string;
  'aria-controls'?: string;
  'aria-activedescendant'?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const ComboboxInput = forwardRef<HTMLInputElement, ComboboxInputProps>(
  (
    {
      asChild,
      value: valueProp,
      onChange: onChangeProp,
      'aria-controls': ariaControlsProp,
      'aria-activedescendant': ariaActiveDescendantProp,
      ...props
    },
    forwardedRef
  ) => {
    const Component = asChild ? Slot : 'input';
    const context = useComboboxContext();
    const { inputValue, setInputValue, handleValueSelect } = context;
    const contentId = generateContentId(context.id);
    const ariaControls = ariaControlsProp ?? contentId;
    const ariaActiveDescendant =
      ariaActiveDescendantProp ?? !context.activeValue
        ? undefined
        : generateItemId(context.id, context.activeValue);
    const composedRefs = composeRefs(forwardedRef, (node) => {
      context.setInputElement(node);
    });

    const handleChange = composeEventHandlers(onChangeProp, (event) => {
      if (event.defaultPrevented) {
        return;
      }

      context.setIsOpened(true);

      setInputValue(event.target.value);
    });

    const handleFocus = () => {
      context.setIsOpened(true);
    };

    const handleArrowDownKeyDown = (
      event: React.KeyboardEvent<HTMLInputElement>
    ) => {
      event.preventDefault();

      if (!context.isOpened) {
        context.setIsOpened(true);
      } else if (!context.activeValue) {
        const items = Array.from(context.itemMap.values()).filter(
          (item) => !item.disabled
        );
        const item = items[0];

        if (item) {
          context.setActiveValue(item.value);
        }
      } else {
        const items = Array.from(context.itemMap.values()).filter(
          (item) => !item.disabled
        );
        const currentIndex = items.findIndex(
          (item) => item.value === context.activeValue
        );
        const nextIndex = Math.min(currentIndex + 1, items.length - 1);
        const nextItem = items[nextIndex];

        if (nextItem) {
          context.setActiveValue(nextItem.value);
        }
      }
    };

    const handleArrowUpKeyDown = (
      event: React.KeyboardEvent<HTMLInputElement>
    ) => {
      event.preventDefault();
      if (!context.isOpened) {
        context.setIsOpened(true);
      } else if (!context.activeValue) {
        const items = Array.from(context.itemMap.values()).filter(
          (item) => !item.disabled
        );
        const item = items[items.length - 1];

        if (item) {
          context.setActiveValue(item.value);
        }
      } else {
        const items = Array.from(context.itemMap.values()).filter(
          (item) => !item.disabled
        );
        const currentIndex = items.findIndex(
          (item) => item.value === context.activeValue
        );
        const nextIndex = Math.max(currentIndex - 1, 0);
        const nextItem = items[nextIndex];

        if (nextItem) {
          context.setActiveValue(nextItem.value);
        }
      }
    };

    const handleEcapeKeyDown = () => {
      context.setIsOpened(false);
    };

    const handleEnterKeyDown = (
      event: React.KeyboardEvent<HTMLInputElement>
    ) => {
      if (!context.isOpened) {
        return;
      }

      event.preventDefault();

      if (context.activeValue) {
        handleValueSelect(context.activeValue);
      }
    };

    return (
      <Component
        {...props}
        ref={composedRefs}
        value={valueProp ?? inputValue}
        role="combobox"
        disabled={context.isDisabled}
        autoComplete="off"
        aria-controls={ariaControls}
        aria-expanded={context.isOpened ? 'true' : 'false'}
        aria-activedescendant={ariaActiveDescendant}
        data-disabled={context.isDisabled ? '' : undefined}
        onChange={handleChange}
        onFocus={handleFocus}
        onKeyDown={(event) => {
          if (event.key === 'ArrowDown') {
            handleArrowDownKeyDown(event);
          } else if (event.key === 'ArrowUp') {
            handleArrowUpKeyDown(event);
          } else if (event.key === 'Escape') {
            handleEcapeKeyDown();
          } else if (event.key === 'Enter') {
            handleEnterKeyDown(event);
          }
        }}
      />
    );
  }
);

ComboboxInput.displayName = 'PrimitiveComboboxInput';

export type ComboboxContentProps = Omit<
  PrimitivePopoverContentProps,
  'tabIndex' | 'role'
> & {
  role?: 'listbox' | 'tree' | 'grid' | 'dialog';
};

const ComboboxContent = forwardRef<HTMLDivElement, ComboboxContentProps>(
  (
    {
      children,
      onPointerDownOutside,
      onOpenAutoFocus,
      id: idProp,
      role = 'listbox',
      onFocus,
      ...props
    },
    forwardedRef
  ) => {
    const {
      controlElement,
      setIsOpened,
      id: rootId,
      inputElement,
    } = useComboboxContext();
    const [content, setContent] = useState<HTMLDivElement | null>(null);
    const compusedRef = composeRefs(forwardedRef, (node) => setContent(node));
    const id = idProp ?? generateContentId(rootId);

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
        const isInControl = target && controlElement?.contains(target);
        const isInContent = target && content?.contains(target);

        if (isInControl || isInContent) {
          event.preventDefault();
        } else {
          setIsOpened(false);
        }
      },
      [controlElement, content, setIsOpened]
    );

    const handleFocus = composeEventHandlers(onFocus, (event) => {
      if (event.defaultPrevented) {
        return;
      }

      inputElement?.focus();
    });

    return (
      <PrimitivePopover.Portal>
        <PrimitivePopover.Content
          {...props}
          ref={compusedRef}
          id={id}
          role={role}
          onInteractOutside={handleInteractOutside}
          onOpenAutoFocus={handleOpenAutoFocus}
          onFocus={handleFocus}
        >
          {children}
        </PrimitivePopover.Content>
      </PrimitivePopover.Portal>
    );
  }
);

ComboboxContent.displayName = 'PrimitiveComboboxContent';

export type ComboboxItemProps = PropsWithChildren<{
  id?: string;
  className?: string;
  disabled?: boolean;
  value: string;
  label?: string;
  asChild?: boolean;
}>;

const ComboboxItem = forwardRef<HTMLDivElement, ComboboxItemProps>(
  (
    { value, children, disabled, id: idProp, label, asChild, ...props },
    forwardedRef
  ) => {
    const context = useComboboxContext();
    const ref = useRef<HTMLDivElement>(null);
    const composedRefs = composeRefs(forwardedRef, ref);
    const id = idProp ?? generateItemId(context.id, value);
    const Component = asChild ? Slot : 'div';

    useEffect(() => {
      context.itemMap.set(ref as React.RefObject<HTMLElement>, {
        ref,
        value,
        disabled: !!disabled,
        label,
      });

      return () => {
        context.itemMap.delete(ref as React.RefObject<HTMLElement>);
      };
    });

    const isChecked = !!context.values?.includes(value);
    const isActive = context.activeValue === value;

    const handleSelect = () => {
      if (context.isDisabled || disabled) {
        return;
      }

      context.handleValueSelect(value);
    };

    const pointerTypeRef = useRef<React.PointerEvent['pointerType']>('touch');

    return (
      <Component
        {...props}
        ref={composedRefs}
        id={id}
        role="option"
        tabIndex={disabled ? undefined : -1}
        data-highlighted={isActive ? '' : undefined}
        aria-selected={isChecked && isActive}
        aria-label={label}
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
            context.setActiveValue(value);
          }
        }}
        onPointerLeave={() => {
          context.setActiveValue(null);
        }}
        onFocus={() => {
          context.setActiveValue(value);
        }}
        onBlur={() => {
          context.setActiveValue(null);
        }}
      >
        {children}
      </Component>
    );
  }
);

ComboboxItem.displayName = 'PrimitiveComboboxItem';

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
