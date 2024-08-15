import { style } from '@vanilla-extract/css';

import { theme } from '@/shared/styles/theme.css';

export const searchIconButton = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '24px',
  height: '24px',
  padding: '4px',
  border: 0,
  background: 'transparent',
  color: theme.colors.gray[500],
});
