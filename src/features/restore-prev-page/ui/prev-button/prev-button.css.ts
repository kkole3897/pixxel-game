import { style } from '@vanilla-extract/css';

import { theme } from '@/shared/styles/theme.css';

export const button = style({
  display: 'flex',
  width: '24px',
  height: '24px',
  padding: 0,
  border: 0,
  background: 'transparent',
  cursor: 'pointer',
});

export const icon = style({
  width: '100%',
  height: '100%',
  color: theme.colors.gray[900],
});
