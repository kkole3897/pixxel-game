import { style } from '@vanilla-extract/css';

export const viewport = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  position: 'fixed',
  top: 0,
  right: 0,
  padding: '16px',
});
