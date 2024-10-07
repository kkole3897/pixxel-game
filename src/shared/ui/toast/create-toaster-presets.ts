import { createToaster } from '@/shared/lib/primitives/toast';

export function createTopToaster<T extends Record<string, any>>() {
  return createToaster<T>({
    placement: 'top',
    duration: 5000,
    removeDelay: 800,
    swipeDirections: ['up'],
  });
}
