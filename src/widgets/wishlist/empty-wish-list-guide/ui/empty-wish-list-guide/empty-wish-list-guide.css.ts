import { style } from '@vanilla-extract/css';

import { theme } from '@/shared/styles/theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const description = style({
  fontSize: theme.fontSize.sm,
  fontWeight: theme.fontWeight.medium,
  lineHeight: theme.lineHeight.sm,
});

export const linkArea = style({
  marginTop: '12px',
});

export const link = style({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '4px 4px 4px 16px',
  border: `1px solid ${theme.colors.gray[200]}`,
  borderRadius: '999px',
  color: theme.colors.gray[700],
  textDecoration: 'none',
});
