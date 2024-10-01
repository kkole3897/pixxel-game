export type Placement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | (string & {});

type SwipeDirection = 'left' | 'right' | 'up' | 'down';

export type ToastOptions = {
  duration?: number;
  removeDelay?: number;
  pauseOnHover?: boolean;
  pauseOnFocusLoss?: boolean;
  swipeDirections?: SwipeDirection[];
};

export type ToastElement = React.ReactNode;

export type ToastData = {
  id: string;
  el: ToastElement;
  options: ToastOptions;
  placement: Placement;
};
