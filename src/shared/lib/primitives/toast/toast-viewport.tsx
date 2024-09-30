'use client';

import { forwardRef, useEffect, useRef } from 'react';

import type { Placement } from './types';
import { useToastStore } from './use-toast-store';
import { useComposedRefs } from '@/shared/lib/react';

type ToastViewportProps = React.ComponentPropsWithoutRef<'div'> & {
  placement: Placement;
};

export const ToastViewport = forwardRef<HTMLDivElement, ToastViewportProps>(
  ({ placement, className, ...props }, forwardedRef) => {
    const [addPlacement, removePlacement, hasPlacement] = useToastStore(
      (state) => [state.addPlacement, state.removePlacement, state.hasPlacement]
    );

    const ref = useRef<HTMLDivElement | null>(null);
    const refs = useComposedRefs(forwardedRef, ref);
    const isMounted = useRef(false);

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

      if (ref.current) {
        addPlacement(placement, ref.current);
        isMounted.current = true;
      }
    }, []);

    return <div ref={refs} data-placement={placement} {...props} />;
  }
);

ToastViewport.displayName = 'ToastViewport';
