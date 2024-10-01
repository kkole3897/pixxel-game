'use client';

import { forwardRef, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';

import type { Placement } from './types';
import { useToastStore } from './use-toast-store';

type ToastViewportProps = Omit<
  React.ComponentPropsWithoutRef<'div'>,
  'role' | 'children' | 'aria-label'
> & {
  placement: Placement;
  hotkey?: string[];
  label?: string;
};

function setDefaultLabel(placement: Placement, hotkey: string[]) {
  return `${placement} Notifications (${hotkey.join(' + ')})`;
}

export const ToastViewport = forwardRef<HTMLDivElement, ToastViewportProps>(
  (
    {
      placement,
      className,
      hotkey = ['F8'],
      label = setDefaultLabel(placement, hotkey),
      ...props
    },
    forwardedRef
  ) => {
    const idRef = useRef(nanoid());

    const [
      addPlacement,
      removePlacement,
      hasPlacement,
      getToastsByPlacementId,
    ] = useToastStore((state) => [
      state.addPlacement,
      state.removePlacement,
      state.hasPlacement,
      state.getToastsByPlacementId,
    ]);

    const isMounted = useRef(false);
    const toasts = getToastsByPlacementId(idRef.current);

    useEffect(() => {
      if (isMounted.current) {
        return () => {
          removePlacement(placement);
        };
      }

      if (hasPlacement(placement)) {
        throw new Error(
          `ToastViewport with placement "${placement}" already exists`
        );
      }

      addPlacement(placement, idRef.current);
      isMounted.current = true;
    }, []);

    return (
      <div
        ref={forwardedRef}
        data-placement={placement}
        {...props}
        role="region"
        aria-label={label}
      >
        {toasts.map((toast) => (
          <div key={toast.id}>{toast.el}</div>
        ))}
      </div>
    );
  }
);

ToastViewport.displayName = 'ToastViewport';
