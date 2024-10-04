import { style } from '@vanilla-extract/css';

export const viewport = style({
  position: 'fixed',
  top: 0,
  left: '50%',
  display: 'flex',
  flexDirection: 'column',
  padding: '16px',
  transform: 'translateX(-50%)',
});
