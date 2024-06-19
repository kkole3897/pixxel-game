import { style } from '@vanilla-extract/css';

import { text } from '@/shared/styles/typography.css';
import { theme } from '@/shared/styles/theme.css';

export const profilePreview = style({
  display: 'flex',
  alignItems: 'center',
  columnGap: '12px',
});

export const descriptionArea = style({
  display: 'flex',
  flexDirection: 'column',
});

export const username = style([
  text.lg,
  {
    color: theme.colors.gray[900],
    fontWeight: theme.fontWeight.semibold,
  },
]);

export const profileEditLink = style([
  text.sm,
  {
    color: theme.colors.gray[500],
  },
]);
