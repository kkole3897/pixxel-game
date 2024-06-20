import { style } from '@vanilla-extract/css';

import { theme } from '@/shared/styles/theme.css';

export const profileArea = style({
  padding: '16px',
  marginBottom: '48px',
});

export const prevButton = style({
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '32px',
  height: '32px',
});

export const menuItem = style({
  padding: '8px',
  borderTop: `1px solid ${theme.colors.gray[100]}`,
});
