'use client';

import { forwardRef, useRef } from 'react';
import cn from 'classnames';

import * as styles from './input.css';
import { useComposedRefs } from '@/shared/lib/react';

type InputType =
  | 'text'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'hidden'
  | 'month'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'time'
  | 'url'
  | 'week';
type Size = 'lg' | 'md';

export interface InputRootProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  type?: InputType;
  /**
   * @default `md`
   */
  size?: Size;
  isInvalid?: boolean;
  children?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputRootProps>(
  (props, forwardedRef) => {
    const {
      size = 'md',
      className,
      isInvalid,
      style,
      children,
      ...rest
    } = props;

    const inputRef = useRef<HTMLInputElement | null>(null);
    const composedRefs = useComposedRefs(forwardedRef, inputRef);
    const handleClickContainer = () => {
      inputRef?.current?.focus();
    };

    const composedClassName = cn(
      className,
      styles.inputContainer({ size, isInvalid })
    );

    return (
      <div
        className={composedClassName}
        onClick={handleClickContainer}
        style={style}
      >
        <input ref={composedRefs} className={styles.input} {...rest} />
        {children}
      </div>
    );
  }
);

Input.displayName = 'Input';

export interface InputSlotProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * @default `right`
   */
  side?: 'left' | 'right';
}

const InputSlot = forwardRef<HTMLSpanElement, InputSlotProps>(
  (props, forwardedRef) => {
    const { side = 'right', className, children, ...rest } = props;

    const composedClassName = cn(className, styles.inputSlot({ side }));

    return (
      <span ref={forwardedRef} className={composedClassName} {...rest}>
        {children}
      </span>
    );
  }
);

InputSlot.displayName = 'InputSlot';

const Root = Input;
const Slot = InputSlot;

export { Input, InputSlot, Root, Slot };
