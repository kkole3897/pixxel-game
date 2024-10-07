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
