import React, { forwardRef, MouseEventHandler, use } from 'react';

import { useToastContext } from './use-toast-context';
import { useToastStore } from './use-toast-store';

type ToastRootProps = React.ComponentPropsWithoutRef<'div'>;

export const Root = forwardRef<HTMLDivElement, ToastRootProps>(
  (props, forwardedRef) => {
    const {
      'aria-live': ariaLive = 'polite',
      'aria-atomic': ariaAtomic = 'true',
      role = 'status',
      ...rest
    } = props;

    const context = useToastContext();

    const { isPaused } = context;
    const dataPaused = isPaused ? 'true' : undefined;

    return (
      <div
        {...rest}
        ref={forwardedRef}
        aria-atomic={ariaAtomic}
        aria-live={ariaLive}
        role={role}
        data-paused={dataPaused}
      />
    );
  }
);

Root.displayName = 'ToastRoot';

type ToastTitleProps = React.ComponentPropsWithoutRef<'div'>;

export const Title = forwardRef<HTMLDivElement, ToastTitleProps>(
  (props, forwardedRef) => {
    return <div {...props} ref={forwardedRef} />;
  }
);

Title.displayName = 'ToastTitle';

type ToastDescriptionProps = React.ComponentPropsWithoutRef<'div'>;

export const Description = forwardRef<HTMLDivElement, ToastDescriptionProps>(
  (props, forwardedRef) => {
    return <div {...props} ref={forwardedRef} />;
  }
);

Description.displayName = 'ToastDescription';

type ToastCloseProps = React.ComponentPropsWithoutRef<'button'>;

export const Close = forwardRef<HTMLButtonElement, ToastCloseProps>(
  (props, forwardedRef) => {
    const {
      type = 'button',
      'aria-label': ariaLabel = 'Remove Notification',
      ...rest
    } = props;

    const { id } = useToastContext();
    const removeToast = useToastStore((store) => store.removeToast);

    const handleClickDefault: MouseEventHandler<HTMLButtonElement> = (
      event
    ) => {
      if (event.defaultPrevented) {
        return;
      }

      removeToast(id);
    };

    // TODO: merge event handlers 함수 따로 만들기
    const onClicks = [props.onClick, handleClickDefault];
    const onClick: MouseEventHandler<HTMLButtonElement> = (event) => {
      onClicks.forEach((handler) => {
        handler?.(event);
      });
    };

    return (
      <button
        {...rest}
        ref={forwardedRef}
        type={type}
        aria-label={ariaLabel}
        onClick={onClick}
      />
    );
  }
);

Close.displayName = 'ToastClose';

type ToastActionProps = React.ComponentPropsWithoutRef<'button'>;

export const Action = forwardRef<HTMLButtonElement, ToastActionProps>(
  (props, forwardedRef) => {
    const { type, ...rest } = props;

    const { id } = useToastContext();

    const removeToast = useToastStore((store) => store.removeToast);

    const handleClickDefault: MouseEventHandler<HTMLButtonElement> = (
      event
    ) => {
      if (event.defaultPrevented) {
        return;
      }

      removeToast(id);
    };

    const onClicks = [props.onClick, handleClickDefault];
    const onClick: MouseEventHandler<HTMLButtonElement> = (event) => {
      onClicks.forEach((handler) => {
        handler?.(event);
      });
    };

    return (
      <button {...rest} ref={forwardedRef} type={type} onClick={onClick} />
    );
  }
);

Action.displayName = 'ToastAction';
