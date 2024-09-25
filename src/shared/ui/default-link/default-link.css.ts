import { style } from '@vanilla-extract/css';

import { base } from '@/shared/styles/layer.css';

export const link = style({
  '@layer': {
    [base]: {
      textDecoration: 'none',
      color: 'unset',
    },
  },
});
