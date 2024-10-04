import { style } from '@vanilla-extract/css';

import { base } from '@/shared/styles/layer.css';

export const root = style({
  '@layer': {
    [base]: {
      userSelect: 'none',
      touchAction: 'none',
      transform: 'translate(var(--toast-swipe-x), var(--toast-swipe-y))',
    },
  },
});
