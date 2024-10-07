import { style } from '@vanilla-extract/css';

import { theme } from '@/shared/styles/theme.css';
import { text } from '@/shared/styles/typography.css';

export const link = style([
  text.sm,
  {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '4px 4px 4px 16px',
    border: `1px solid ${theme.colors.gray[200]}`,
    borderRadius: '999px',
    color: theme.colors.gray[700],
    textDecoration: 'none',
  },
]);

export const icon = style({
  flexShrink: 0,
});
