import { style } from '@vanilla-extract/css';

import { theme } from '@/shared/styles/theme.css';

export const menu = style({});

export const menuItem = style({
  height: '48px',
  padding: '0 16px',

  selectors: {
    '& + &': {
      borderTop: `1px solid ${theme.colors.gray[100]}`,
    },
  },
});

export const menuAction = style({
  display: 'flex',
  alignItems: 'center',
  columnGap: '8px',
  height: '100%',
  border: 0,
  padding: 0,
  background: 'transparent',
  color: theme.colors.gray[700],
  fontSize: theme.fontSize.sm,
  fontWeight: theme.fontWeight.medium,
  lineHeight: theme.lineHeight.sm,
  cursor: 'pointer',
  textDecoration: 'none',
});
