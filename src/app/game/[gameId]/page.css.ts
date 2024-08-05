import { style } from '@vanilla-extract/css';

import { text } from '@/shared/styles/typography.css';
import { theme } from '@/shared/styles/theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '72px',
  paddingBottom: '32px',
});

export const contentBox = style({
  padding: '0 16px',
});

export const contentTitle = style([
  text.lg,
  {
    marginBottom: '12px',
    fontWeight: theme.fontWeight.medium,
  },
]);
