import type { SetOptional, SetRequired } from 'type-fest';

export type Placement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | (string & {});

type SwipeDirection = 'left' | 'right' | 'up' | 'down';

export type ToastGroupContext = {
  id: string;
  placement: Placement;
  limit: number | null;
  node: HTMLElement | null;
};

export type ToastGroupOptions = SetOptional<
  Omit<ToastGroupContext, 'id' | 'node'>,
  'limit'
>;

export type ToasterContext = {
  id: string;
  placement: Placement;
  duration: number | null;
  removeDelay: number;
  pauseOnHover: boolean;
  pauseOnFocusLoss: boolean;
  swipeDirections: SwipeDirection[];
};

export type ToasterOptions = SetRequired<
  Partial<Omit<ToasterContext, 'id'>>,
  'placement'
>;

export type ToastContext = {
  id: string;
  placement: Placement;
  duration: number | null;
  removeDelay: number;
  pauseOnHover: boolean;
  pauseOnFocusLoss: boolean;
  swipeDirections: SwipeDirection[];
  createdAt: number;
  toasterId: string;
  isPaused: boolean;
};

export type ToastOptions = Omit<ToastContext, 'createdAt' | 'id' | 'isPaused'>;

export type ToastElement = React.ReactNode;

export type ToastData<T = any> = ToastContext & Partial<T>;
