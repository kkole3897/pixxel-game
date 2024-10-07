import { style } from '@vanilla-extract/css';

import { text } from '@/shared/styles/typography.css';
import { theme } from '@/shared/styles/theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '48px 12px',
});

export const title = style([
  text.lg,
  {
    fontWeight: theme.fontWeight.semibold,
  },
]);

export const cardArea = style({
  marginTop: '24px',
});

export const confirmArea = style({
  width: '100%',
  maxWidth: '480px',
  marginTop: '32px',
});

export const confirmButton = style({
  width: '100%',
});

export const checkAnimationArea = style({
  marginBottom: '8px',
});
