'use client';

/* eslint-disable react-hooks/rules-of-hooks */
import { nanoid } from 'nanoid';
import { useRef } from 'react';

import { useToastStore } from './use-toast-store';
import type { ToasterOptions, ToastOptions, Placement } from './types';
import {
  DEFAULT_DURATION,
  DEFAULT_REMOVE_DEPLAY,
  DEFAULT_PAUSE_ON_HOVER,
  DEFAULT_PAUSE_ON_FOCUS,
  DEFAULT_SWIPER_DIRECTION,
  DEFAULT_PAUSE_ON_PAGE_IDLE,
  DEFAULT_SWIPER_THRESHOLD,
} from './constants';

type CreateToastOptions<T> = Partial<Omit<ToastOptions, 'placement'>> & T;

export type CreateToasterReturn<T> = {
  id: string;
  placement: Placement;
  create: (options: CreateToastOptions<T>) => void;
};

export function createToaster<T extends Record<string, any>>(
  options: ToasterOptions
): CreateToasterReturn<T> {
  const toasterId = useRef(nanoid());

  const createToast = useToastStore((store) => store.createToast);
  const {
    placement: sharedPlacement,
    duration: sharedDuration = DEFAULT_DURATION,
    removeDelay: sharedRemoveDelay = DEFAULT_REMOVE_DEPLAY,
    pauseOnHover: sharedPauseOnHover = DEFAULT_PAUSE_ON_HOVER,
    pauseOnFocus: sharedPauseOnFocus = DEFAULT_PAUSE_ON_FOCUS,
    swipeDirections: sharedSwipeDirections = [DEFAULT_SWIPER_DIRECTION],
    pauseOnPageIdle: sharedPauseOnPageIdle = DEFAULT_PAUSE_ON_PAGE_IDLE,
    swipeThreshold: sharedSwipeThreshold = DEFAULT_SWIPER_THRESHOLD,
  } = options;

  function create(options: CreateToastOptions<T>) {
    const {
      duration = sharedDuration,
      removeDelay = sharedRemoveDelay,
      pauseOnHover = sharedPauseOnHover,
      pauseOnFocus = sharedPauseOnFocus,
      swipeDirections = sharedSwipeDirections,
      pauseOnPageIdle = sharedPauseOnPageIdle,
      swipeThreshold = sharedSwipeThreshold,
      ...restOptions
    } = options;

    const placement = sharedPlacement;

    const mergedOptions = {
      placement,
      duration,
      removeDelay,
      pauseOnHover,
      pauseOnFocus,
      swipeDirections,
      pauseOnPageIdle,
      swipeThreshold,
      ...restOptions,
    };

    createToast({
      ...mergedOptions,
      toasterId: toasterId.current,
    });
  }

  return {
    id: toasterId.current,
    placement: sharedPlacement,
    create,
  };
}
