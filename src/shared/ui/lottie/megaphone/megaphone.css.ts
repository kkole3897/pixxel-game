import { style } from '@vanilla-extract/css';

import { base } from '@/shared/styles/layer.css';

export const container = style({
  '@layer': {
    [base]: {
      width: '64px',
      aspectRatio: '1 / 1',
    },
  },
});
