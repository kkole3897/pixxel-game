import { style } from '@vanilla-extract/css';

import { theme } from '@/shared/styles/theme.css';

export const box = style({
  display: 'flex',
  alignItems: 'center',
  columnGap: '4px',
  padding: '4px',
  borderRadius: '8px',
  background: theme.colors.gray[100],
  color: theme.colors.gray[400],
  fontSize: theme.fontSize.xs,
  fontWeight: theme.fontWeight.regular,
  lineHeight: theme.lineHeight.xs,
});

export const textArea = style({
  color: theme.colors.gray[600],
});

export const date = style({
  textDecoration: 'underline',
});
