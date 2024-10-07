import type { ToastContext, ToastData } from './types';

export function pickToastContext<T extends Record<string, any>>(
  data: ToastData<T>
): ToastContext {
  const {
    id,
    placement,
    duration,
    removeDelay,
    pauseOnHover,
    pauseOnFocus,
    pauseOnPageIdle,
    swipeDirections,
    createdAt,
    toasterId,
    isPaused,
    status,
    timer,
    swipeThreshold,
  } = data;

  const context: ToastContext = {
    id,
    placement,
    duration,
    removeDelay,
    pauseOnHover,
    pauseOnFocus,
    pauseOnPageIdle,
    swipeDirections,
    createdAt,
    toasterId,
    isPaused,
    status,
    timer,
    swipeThreshold,
  };

  return context;
}
