/* eslint-disable react-hooks/rules-of-hooks */
import { nanoid } from 'nanoid';

import { useToastStore } from './use-toast-store';
import type { ToasterOptions, ToastOptions } from './types';
import {
  DEFAULT_DURATION,
  DEFAULT_REMOVE_DEPLAY,
  DEFAULT_PAUSE_ON_HOVER,
  DEFAULT_PAUSE_ON_FOCUS_LOSS,
  DEFAULT_SWIPER_DIRECTION,
} from './constants';

export function createToaster(options: ToasterOptions) {
  const addToast = useToastStore((store) => store.addToast);
  const {
    placement: sharedPlacement,
    duration: sharedDuration = DEFAULT_DURATION,
    removeDelay: sharedRemoveDelay = DEFAULT_REMOVE_DEPLAY,
    pauseOnHover: sharedPauseOnHover = DEFAULT_PAUSE_ON_HOVER,
    pauseOnFocusLoss: sharedPauseOnFocusLoss = DEFAULT_PAUSE_ON_FOCUS_LOSS,
    swipeDirections: sharedSwipeDirections = [DEFAULT_SWIPER_DIRECTION],
  } = options;

  function create(options: ToastOptions = {}) {
    const placement =
      options.placement !== undefined ? options.placement : sharedPlacement;
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

    addToast({
      ...mergedOptions,
      id: nanoid(),
    });
  }

  return {
    create,
  };
}
