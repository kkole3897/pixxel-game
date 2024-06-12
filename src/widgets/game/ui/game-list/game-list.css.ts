import { style } from '@vanilla-extract/css';

export const gameList = style({
  display: 'flex',
  flexWrap: 'wrap',
  rowGap: '24px',
  padding: '16px 8px',
});

export const gameListItem = style({
  width: '50%',
  padding: '0 8px',
  boxSizing: 'border-box',
});
