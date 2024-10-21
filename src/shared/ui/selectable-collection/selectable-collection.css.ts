import { style } from '@vanilla-extract/css';

import { base } from '@/shared/styles/layer.css';
import { theme } from '@/shared/styles/theme.css';

export const collection = style({
  '@layer': {
    [base]: {
      padding: '12px 0',
      borderRadius: '8px',
      backgroundColor: '#fff',
      boxShadow:
        '0 -1px 30px -6px rgba(0, 0, 0, 0.04), 0 6px 20px -2px rgba(0, 0, 0, 0.10)',
      zIndex: 1,
    },
  },
});

export const item = style({
  '@layer': {
    [base]: {
      cursor: 'default',
      userSelect: 'none',

      selectors: {
        '&[data-highlighted]': {
          backgroundColor: theme.colors.gray[100],
        },
        '&[data-state="checked"]': {
          backgroundColor: theme.colors.blue[100],
          color: theme.colors.blue[500],
        },
        '&[data-disabled]': {
          backgroundColor: theme.colors.gray[100],
          color: theme.colors.gray[400],
        },
      },
    },
  },
});
