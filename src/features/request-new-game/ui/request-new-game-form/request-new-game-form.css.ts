import { style } from '@vanilla-extract/css';

import { text } from '@/shared/styles/typography.css';
import { theme } from '@/shared/styles/theme.css';

export const formInner = style({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '16px',
  alignItems: 'top',
});

export const field = style([
  text.base,
  {
    display: 'flex',
    alignItems: 'center',
    columnGap: '8px',
  },
]);

export const fieldLabel = style([
  text.base,
  {
    display: 'block',
    width: '80px',
    fontWeight: theme.fontWeight.semibold,
    cursor: 'default',
  },
]);

export const urlInput = style({
  width: '100%',
});

export const submitArea = style({
  display: 'flex',
  justifyContent: 'flex-end',
});
