import { createToaster } from '@/shared/lib/primitives/toast';

export function createTopToaster() {
  return createToaster({
    placement: 'top',
    duration: 5000,
    removeDelay: 800,
    swipeDirections: ['up'],
  });
}
