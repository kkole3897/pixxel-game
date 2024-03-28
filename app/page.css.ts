import { style } from '@vanilla-extract/css';

export const link = style({
  textDecoration: 'none',
  color: 'unset',
});

export const gameList = style({
  padding: '0',
});

export const gameListItem = style({
  padding: '0',
  selectors: {
    '& + &': {
      borderTop: '1px solid #eaedef',
    },
  },
});
