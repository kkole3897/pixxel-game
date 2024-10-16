import type { SetRequired } from 'type-fest';

export type Placement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | (string & {});

type SwipeDirection = 'left' | 'right' | 'up' | 'down';

// TODO: 최대 토스트 갯수 추가 (limit)
export type ToastGroupContext = {
  id: string;
  placement: Placement;
  node: HTMLElement | null;
};

export type ToastGroupOptions = Omit<ToastGroupContext, 'id' | 'node'>;

export type ToasterContext = {
  id: string;
  placement: Placement;
  duration: number | null;
  removeDelay: number;
  pauseOnHover: boolean;
  pauseOnFocus: boolean;
  pauseOnPageIdle: boolean;
  swipeDirections: SwipeDirection[];
  swipeThreshold: number;
};

export type ToasterOptions = SetRequired<
  Partial<Omit<ToasterContext, 'id'>>,
  'placement'
>;

export type ToastStatus =
  | 'visible'
  | 'visible:persist'
  | 'destroying'
  | 'destroyed';

export type ToastContext = {
  id: string;
  placement: Placement;
  duration: number | null;
  removeDelay: number;
  pauseOnHover: boolean;
  pauseOnFocus: boolean;
  pauseOnPageIdle: boolean;
  swipeDirections: SwipeDirection[];
  createdAt: number;
  toasterId: string;
  isPaused: boolean;
  status: ToastStatus;
  timer: NodeJS.Timeout | null;
  swipeThreshold: number;
};

export type ToastOptions = Omit<
  ToastContext,
  'createdAt' | 'id' | 'isPaused' | 'status' | 'timer'
>;

export type ToastData<T extends Record<string, any> = {}> = ToastContext & T;
