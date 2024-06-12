import { style } from '@vanilla-extract/css';

import { theme } from '@/shared/styles/theme.css';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  height: '40px',
  width: '100%',
  padding: '0 16px',
  borderBottom: `1px solid ${theme.colors.gray[100]}`,
  background: theme.colors.gray[50],
  zIndex: 10,
  boxSizing: 'border-box',
});

export const indexLink = style({
  color: 'unset',
  fontSize: '1.25rem',
  fontWeight: 'bold',
  textDecoration: 'none',
});

export const logoImage = style({
  display: 'block',
  height: '24px',
});
