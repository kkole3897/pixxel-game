'use client';

import { forwardRef, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';

import type { Placement, ToastGroupOptions } from './types';
import { useToastStore } from './use-toast-store';
import { useComposedRefs } from '@/shared/lib/react';

type ToastViewportProps = Omit<
  React.ComponentPropsWithoutRef<'div'>,
  'role' | 'children' | 'aria-label'
> &
  // TODO: 키보드 접근성 지원 hotkey 추가
  ToastGroupOptions & {
    label?: string;
  };

function setDefaultLabel(placement: Placement) {
  return `${placement} Notifications`;
}

export const ToastViewport = forwardRef<HTMLDivElement, ToastViewportProps>(
  (
    { placement, label = setDefaultLabel(placement), ...props },
    forwardedRef
  ) => {
    const idRef = useRef(nanoid());
    const nodeRef = useRef<HTMLDivElement | null>(null);
    const refs = useComposedRefs(forwardedRef, nodeRef);

    const [addGroup, removeGroup, isPlacementAssigned] = useToastStore(
      (state) => [state.addGroup, state.removeGroup, state.isPlacementAssigned]
    );

    const isMounted = useRef(false);

    useEffect(() => {
      if (isMounted.current) {
        return () => {
          removeGroup(placement);
        };
      }

      if (isPlacementAssigned(placement)) {
        throw new Error(
          `ToastViewport with placement "${placement}" already exists`
        );
      }

      addGroup(placement, {
        id: idRef.current,
        placement,
        node: nodeRef.current,
      });
      isMounted.current = true;
    }, []);

    return (
      <div
        {...props}
        ref={refs}
        data-placement={placement}
        role="region"
        aria-label={label}
      ></div>
    );
  }
);

ToastViewport.displayName = 'ToastViewport';
