import { style } from '@vanilla-extract/css';

import { theme } from '@/shared/styles/theme.css';

export const searchIconButton = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '48px',
  height: '48px',
  padding: '12px',
  border: 0,
  background: 'transparent',
  color: theme.colors.gray[700],
  cursor: 'pointer',
});

export const icon = style({
  width: '100%',
  height: '100%',
});
