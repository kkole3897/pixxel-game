import { style } from '@vanilla-extract/css';

export const link = style({
  textDecoration: 'none',
  color: 'unset',
});

export const gameList = style({
  padding: '0 16px',
});

export const gameListItem = style({
  padding: '16px 0',
  selectors: {
    '& + &': {
      borderTop: '1px solid #eaedef',
    },
  },
});
