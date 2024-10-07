import { style } from '@vanilla-extract/css';

export const viewport = style({
  position: 'fixed',
  top: '16px',
  left: '50%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  transform: 'translateX(-50%)',
  zIndex: 10,
});
