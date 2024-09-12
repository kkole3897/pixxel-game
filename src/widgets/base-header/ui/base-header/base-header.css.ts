import { style } from '@vanilla-extract/css';

import { theme } from '@/shared/styles/theme.css';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'sticky',
  top: 0,
  height: '48px',
  width: '100%',
  padding: '0 16px',
  borderBottom: `1px solid ${theme.colors.gray[100]}`,
  background: theme.colors.gray[50],
  zIndex: 10,
});
