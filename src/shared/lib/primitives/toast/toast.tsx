import React, { forwardRef, MouseEventHandler, useState } from 'react';

import { useToastContext } from './use-toast-context';
import { useToastStore } from './use-toast-store';

type ToastRootProps = React.ComponentPropsWithoutRef<'div'>;

export const Root = forwardRef<HTMLDivElement, ToastRootProps>(
  (props, forwardedRef) => {
    const {
      'aria-live': ariaLive = 'polite',
      'aria-atomic': ariaAtomic = 'true',
      role = 'status',
      tabIndex = 0,
      ...rest
    } = props;

    const context = useToastContext();
    const [pauseToast, resumeToast] = useToastStore((store) => [
      store.pauseToast,
      store.resumeToast,
    ]);

    const [isFocused, setIsFocused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleFocusDefault: React.FocusEventHandler<HTMLDivElement> = (
      event
    ) => {
      if (event.defaultPrevented) {
        return;
      }

      setIsFocused(true);
      pauseToast(context.id);
    };

    const onFocus: React.FocusEventHandler<HTMLDivElement> = (event) => {
      [props.onFocus, handleFocusDefault].forEach((handler) => {
        handler?.(event);
      });
    };

    const handleBlurDefault: React.FocusEventHandler<HTMLDivElement> = (
      event
    ) => {
      if (event.defaultPrevented) {
        return;
      }

      setIsFocused(false);

      if (!isHovered) {
        resumeToast(context.id);
      }
    };

    const onBlur: React.FocusEventHandler<HTMLDivElement> = (event) => {
      [props.onBlur, handleBlurDefault].forEach((handler) => {
        handler?.(event);
      });
    };

    const handleMouseEnterDefault: MouseEventHandler<HTMLDivElement> = (
      event
    ) => {
      if (event.defaultPrevented) {
        return;
      }

      setIsHovered(true);

      if (context.pauseOnHover) {
        pauseToast(context.id);
      }
    };

    const onMouseEnter: MouseEventHandler<HTMLDivElement> = (event) => {
      [props.onMouseEnter, handleMouseEnterDefault].forEach((handler) => {
        handler?.(event);
      });
    };

    const handleMouseLeaveDefault: MouseEventHandler<HTMLDivElement> = (
      event
    ) => {
      if (event.defaultPrevented) {
        return;
      }

      setIsHovered(false);

      if (!isFocused) {
        resumeToast(context.id);
      }
    };

    const onMouseLeave: MouseEventHandler<HTMLDivElement> = (event) => {
      [props.onMouseLeave, handleMouseLeaveDefault].forEach((handler) => {
        handler?.(event);
      });
    };

    const { isPaused, status } = context;
    const dataPaused = isPaused ? '' : undefined;
    const dataState =
      status === 'visible' || status === 'visible:persist'
        ? 'opened'
        : 'closed';

    return (
      <div
        {...rest}
        ref={forwardedRef}
        aria-atomic={ariaAtomic}
        aria-live={ariaLive}
        role={role}
        data-paused={dataPaused}
        data-state={dataState}
        tabIndex={tabIndex}
        onFocus={onFocus}
        onBlur={onBlur}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
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
    const setToastDestroying = useToastStore(
      (store) => store.setToastDestroying
    );

    const handleClickDefault: MouseEventHandler<HTMLButtonElement> = (
      event
    ) => {
      if (event.defaultPrevented) {
        return;
      }

      setToastDestroying(id);
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

    const setToastDestroying = useToastStore(
      (store) => store.setToastDestroying
    );

    const handleClickDefault: MouseEventHandler<HTMLButtonElement> = (
      event
    ) => {
      if (event.defaultPrevented) {
        return;
      }

      setToastDestroying(id);
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
