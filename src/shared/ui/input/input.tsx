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

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  type?: InputType;
  /**
   * @defaultValue `md`
   */
  size?: Size;
  isInvalid?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (props, forwardedRef) => {
    const { size = 'md', className, isInvalid, style, ...rest } = props;

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
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
