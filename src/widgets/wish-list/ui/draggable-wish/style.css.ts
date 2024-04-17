import { style } from '@vanilla-extract/css';

export const dragContainer = style({
  display: 'flex',
});

export const dragIconArea = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: '0 0 32px',
  width: '40px',
  borderRight: '1px solid #eaedef',
  cursor: 'move',
});

export const dragContentArea = style({
  flex: 1,
});
