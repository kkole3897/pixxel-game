import { forwardRef } from 'react';
import cn from 'classnames';

import * as styles from './textarea.css';

type TextareaProps = Omit<
  React.ComponentPropsWithoutRef<'textarea'>,
  'aria-invalid'
> & {
  isInvalid?: boolean;
  size: 'md' | 'lg';
};

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, isInvalid = false, size = 'md', ...props }, forwardedRef) => {
    const composedClassName = cn(
      styles.textarea({ size, isInvalid }),
      className
    );

    return (
      <textarea
        {...props}
        ref={forwardedRef}
        className={composedClassName}
        aria-invalid={isInvalid ? 'true' : undefined}
      />
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;
