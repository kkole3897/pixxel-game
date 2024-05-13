'use client';

import { type ButtonHTMLAttributes, forwardRef } from 'react';
import cn from 'classnames';

import * as styles from './button.css';

type ButtonVariant = 'primary' | 'secondary' | 'text';
type Size = 'lg' | 'md';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * @defaultValue `primary`
   */
  variant?: ButtonVariant;
  /**
   * @defaultValue `md`
   */
  size?: Size;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, forwardedRef) => {
    const { className, variant = 'primary', size = 'md', ...rest } = props;
    const composedClassName = cn(className, styles.button({ size, variant }));

    return (
      <button ref={forwardedRef} className={composedClassName} {...rest} />
    );
  }
);

Button.displayName = 'Button';

export default Button;
