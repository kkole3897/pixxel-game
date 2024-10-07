import React, { forwardRef, MouseEventHandler, useState, useRef } from 'react';
import cn from 'classnames';

import { useToastContext } from './use-toast-context';
import { useToastStore } from './use-toast-store';
import * as styles from './toast.css';

type ToastRootProps = React.ComponentPropsWithoutRef<'div'>;

export const Root = forwardRef<HTMLDivElement, ToastRootProps>(
  (props, forwardedRef) => {
    const {
      'aria-live': ariaLive = 'polite',
      'aria-atomic': ariaAtomic = 'true',
      role = 'status',
      tabIndex = 0,
      className,
      ...rest
    } = props;

    const composedClassName = cn(className, styles.root);

    const context = useToastContext();
    const [pauseToast, resumeToast, setToastDestroying] = useToastStore(
      (store) => [store.pauseToast, store.resumeToast, store.setToastDestroying]
    );

    const [isFocused, setIsFocused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleFocusDefault: React.FocusEventHandler<HTMLDivElement> = (
      event
    ) => {
      if (event.defaultPrevented) {
        return;
      }

      setIsFocused(true);

      if (context.pauseOnFocus) {
        pauseToast(context.id);
      }
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

      if (!isHovered && context.pauseOnFocus) {
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

      if (!isFocused && context.pauseOnHover) {
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

    const pointerStartRef = useRef<{ x: number; y: number } | null>(null);
    const swipeDeltaRef = useRef<{ x: number; y: number } | null>(null);
    const swipeAxisRef = useRef<'x' | 'y' | null>(null);

    const handlePointerDownDefault: React.PointerEventHandler<
      HTMLDivElement
    > = (event) => {
      if (event.defaultPrevented) {
        return;
      }

      pointerStartRef.current = { x: event.clientX, y: event.clientY };
      (event.target as HTMLElement).setPointerCapture(event.pointerId);
    };

    const onPointerDown: React.PointerEventHandler<HTMLDivElement> = (
      event
    ) => {
      [props.onPointerDown, handlePointerDownDefault].forEach((handler) => {
        handler?.(event);
      });
    };

    const handlePointerMoveDefault: React.PointerEventHandler<
      HTMLDivElement
    > = (event) => {
      if (event.defaultPrevented) {
        return;
      }

      if (!pointerStartRef.current) {
        return;
      }

      let x = event.clientX - pointerStartRef.current.x;
      let y = event.clientY - pointerStartRef.current.y;

      if (!context.swipeDirections.includes('left')) {
        x = Math.max(0, x);
      }

      if (!context.swipeDirections.includes('right')) {
        x = Math.min(0, x);
      }

      if (!context.swipeDirections.includes('up')) {
        y = Math.max(0, y);
      }

      if (!context.swipeDirections.includes('down')) {
        y = Math.min(0, y);
      }

      if (!swipeDeltaRef.current) {
        if (x !== 0) {
          swipeAxisRef.current = 'x';
        } else {
          swipeAxisRef.current = 'y';
        }
        swipeDeltaRef.current = { x, y };
      }

      if (swipeAxisRef.current === 'x') {
        y = 0;
      } else {
        x = 0;
      }

      swipeDeltaRef.current = { x, y };

      event.currentTarget.style.setProperty(
        '--toast-swipe-x',
        `${swipeDeltaRef.current.x}px`
      );
      event.currentTarget.style.setProperty(
        '--toast-swipe-y',
        `${swipeDeltaRef.current.y}px`
      );
    };

    const onPointerMove: React.PointerEventHandler<HTMLDivElement> = (
      event
    ) => {
      [props.onPointerMove, handlePointerMoveDefault].forEach((handler) => {
        handler?.(event);
      });
    };

    const handlePointerUpDefault: React.PointerEventHandler<HTMLDivElement> = (
      event
    ) => {
      if (event.defaultPrevented) {
        return;
      }

      const absDX = Math.abs(swipeDeltaRef.current?.x ?? 0);
      const absDY = Math.abs(swipeDeltaRef.current?.y ?? 0);
      const maxDelta = Math.max(absDX, absDY);

      pointerStartRef.current = null;
      swipeDeltaRef.current = null;
      swipeAxisRef.current = null;
      (event.target as HTMLElement).releasePointerCapture(event.pointerId);

      if (maxDelta >= context.swipeThreshold) {
        setToastDestroying(context.id);
        return;
      }

      event.currentTarget.style.removeProperty('--toast-swipe-x');
      event.currentTarget.style.removeProperty('--toast-swipe-y');
    };

    const onPointerUp: React.PointerEventHandler<HTMLDivElement> = (event) => {
      [props.onPointerUp, handlePointerUpDefault].forEach((handler) => {
        handler?.(event);
      });
    };

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
        className={composedClassName}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
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
