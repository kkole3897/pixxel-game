import { recipe } from '@vanilla-extract/recipes';

import { theme } from '@/shared/styles/theme.css';

export const wishButton = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '32px',
    height: '32px',
    padding: 0,
    borderRadius: '50%',
    border: 0,
    background: 'rgba(1, 7, 21, 0.65)',
    cursor: 'pointer',
  },
  variants: {
    isWished: {
      true: {
        background: theme.colors.red[900],
      },
    },
  },
});
