import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'sticky',
  top: 0,
  height: '40px',
  width: '100%',
  borderBottom: '1px solid #eaedef',
  background: '#ffffff',
  zIndex: 10,
});
