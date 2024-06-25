import { style } from '@vanilla-extract/css';

import { theme } from '@/shared/styles/theme.css';

export const wishList = style({
  display: 'flex',
  flexDirection: 'column',
});

export const wishListItem = style({
  padding: '8px',

  selectors: {
    '& + &': {
      borderTop: `1px solid ${theme.colors.gray[100]}`,
    },
  },
});
