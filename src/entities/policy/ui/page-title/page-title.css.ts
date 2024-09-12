import { style } from '@vanilla-extract/css';

import { text } from '@/shared/styles/typography.css';
import { theme } from '@/shared/styles/theme.css';

export const title = style([
  text['2xl'],
  {
    marginBottom: '0.75rem',
    fontWeight: theme.fontWeight.bold,
  },
]);
