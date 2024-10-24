import { style } from '@vanilla-extract/css';

import { base } from '@/shared/styles/layer.css';

export const control = style({
  '@layer': {
    [base]: {
      display: 'inline-flex',
    },
  },
});

export const content = style({
  '@layer': {
    [base]: {
      width: 'var(--radix-popper-anchor-width)',
    },
  },
});
