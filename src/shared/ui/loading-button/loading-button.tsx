import { forwardRef } from 'react';

import { Button, type ButtonProps } from '@/shared/ui/button';
import { SpinnerRing1 } from '@/shared/ui/icons';

type LoadingButtonProps = ButtonProps & {
  isLoading?: boolean;
  /**
   * @defaultValue SpinnerRing1
   */
  spinner?: React.ReactNode;
};

const LoadingButton = forwardRef<HTMLButtonElement, LoadingButtonProps>(
  (
    { isLoading, children, disabled, spinner = <SpinnerRing1 />, ...props },
    forwardedRef
  ) => {
    return (
      <Button
        ref={forwardedRef}
        {...props}
        disabled={disabled || isLoading}
        data-loading={isLoading ? '' : undefined}
      >
        {isLoading ? spinner : children}
      </Button>
    );
  }
);

LoadingButton.displayName = 'LoadingButton';

export default LoadingButton;
