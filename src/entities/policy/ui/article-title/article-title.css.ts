import { style } from '@vanilla-extract/css';

import { text } from '@/shared/styles/typography.css';
import { theme } from '@/shared/styles/theme.css';

export const title = style([
  text.base,
  {
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
    fontWeight: theme.fontWeight.bold,
  },
]);
