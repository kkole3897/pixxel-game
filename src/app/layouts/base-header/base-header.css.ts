import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  position: 'sticky',
  top: 0,
  height: '40px',
  width: '100%',
  padding: '0 16px',
  borderBottom: '1px solid #eaedef',
  background: '#ffffff',
  zIndex: 10,
  boxSizing: 'border-box',
});

export const indexLink = style({
  color: 'unset',
  fontSize: '1.25rem',
  fontWeight: 'bold',
  textDecoration: 'none',
});
