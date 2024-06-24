import { style } from '@vanilla-extract/css';

import { theme } from '@/shared/styles/theme.css';

export const button = style({
  padding: '7px 15px',
  color: theme.colors.red[700],
  borderColor: theme.colors.red[700],
});
