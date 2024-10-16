import { style } from '@vanilla-extract/css';

import { text } from '@/shared/styles/typography.css';
import { theme } from '@/shared/styles/theme.css';

export const resultDescription = style([
  text.sm,
  {
    marginTop: '4px',
    color: theme.colors.gray[500],
  },
]);
