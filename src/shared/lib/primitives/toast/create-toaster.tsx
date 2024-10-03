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
  DEFAULT_PAUSE_ON_FOCUS_LOSS,
  DEFAULT_SWIPER_DIRECTION,
} from './constants';

export type CreateToasterReturn = {
  id: string;
  placement: Placement;
  create: (options?: Partial<ToastOptions>) => void;
};

export function createToaster(options: ToasterOptions) {
  const toasterId = useRef(nanoid());

  const createToast = useToastStore((store) => store.createToast);
  const {
    placement: sharedPlacement,
    duration: sharedDuration = DEFAULT_DURATION,
    removeDelay: sharedRemoveDelay = DEFAULT_REMOVE_DEPLAY,
    pauseOnHover: sharedPauseOnHover = DEFAULT_PAUSE_ON_HOVER,
    pauseOnFocusLoss: sharedPauseOnFocusLoss = DEFAULT_PAUSE_ON_FOCUS_LOSS,
    swipeDirections: sharedSwipeDirections = [DEFAULT_SWIPER_DIRECTION],
  } = options;

  function create(options: Partial<Omit<ToastOptions, 'placement'>> = {}) {
    const placement = sharedPlacement;
    const duration =
      options.duration !== undefined ? options.duration : sharedDuration;
    const removeDelay =
      options.removeDelay !== undefined
        ? options.removeDelay
        : sharedRemoveDelay;
    const pauseOnHover =
      options.pauseOnHover !== undefined
        ? options.pauseOnHover
        : sharedPauseOnHover;
    const pauseOnFocusLoss =
      options.pauseOnFocusLoss !== undefined
        ? options.pauseOnFocusLoss
        : sharedPauseOnFocusLoss;
    const swipeDirections =
      options.swipeDirections !== undefined
        ? options.swipeDirections
        : sharedSwipeDirections;

    const mergedOptions = {
      placement,
      duration,
      removeDelay,
      pauseOnHover,
      pauseOnFocusLoss,
      swipeDirections,
    };

    createToast({
      ...mergedOptions,
      swipeDirections: ['right'],
      toasterId: toasterId.current,
    });
  }

  return {
    id: toasterId.current,
    placement: sharedPlacement,
    create,
  };
}
