import { style } from '@vanilla-extract/css';

import { base } from '@/shared/styles/layer.css';

export const root = style({
  '@layer': {
    [base]: {
      userSelect: 'none',
      touchAction: 'none',
    },
  },
});
