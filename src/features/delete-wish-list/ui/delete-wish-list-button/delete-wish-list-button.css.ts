import { style } from '@vanilla-extract/css';

import { theme } from '@/shared/styles/theme.css';

export const button = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '24px',
  height: '24px',
  padding: 0,
  border: 0,
  background: 'transparent',
  color: theme.colors.gray[500],
  cursor: 'pointer',
});
