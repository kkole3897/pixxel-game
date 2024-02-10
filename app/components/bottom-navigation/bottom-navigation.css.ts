import { style } from '@vanilla-extract/css';

export const bottomNav = style({
  display: 'flex',
  position: 'sticky',
  bottom: 0,
  width: '100%',
  height: '48px',
  borderTop: '1px solid #eaedef',
  background: '#ffffff',
  zIndex: 10,
});

export const navItem = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '4px',
  flex: 1,
  color: '#000000',
  textDecoration: 'none',
});

export const navLabel = style({
  fontSize: '0.75rem',
});
