import { style } from '@vanilla-extract/css';

import { text } from '@/shared/styles/typography.css';
import { theme } from '@/shared/styles/theme.css';

export const container = style([
  text.base,
  {
    color: theme.colors.gray[900],
    fontWeight: theme.fontWeight.medium,
    textAlign: 'center',
  },
]);
