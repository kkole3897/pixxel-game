'use client';

import { type ButtonHTMLAttributes, forwardRef } from 'react';
import cn from 'classnames';

import * as styles from './button.css';

type ButtonVariant = 'solid' | 'ghost' | 'text';
type Size = 'lg' | 'md';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * @defaultValue `solid`
   */
  variant?: ButtonVariant;
  /**
   * @defaultValue `md`
   */
  size?: Size;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, forwardedRef) => {
    const { className, variant = 'solid', size = 'md', ...rest } = props;
    const composedClassName = cn(className, styles.button({ size, variant }));

    return (
      <button ref={forwardedRef} className={composedClassName} {...rest} />
    );
  }
);

Button.displayName = 'Button';

export default Button;
