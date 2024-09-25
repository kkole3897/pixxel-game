import { style } from '@vanilla-extract/css';

import { text } from '@/shared/styles/typography.css';
import { theme } from '@/shared/styles/theme.css';

export const selectTrigger = style({
  color: theme.colors.gray[900],
});

export const selectItemInner = style([
  text.base,
  {
    display: 'flex',
    alignItems: 'center',
    columnGap: '4px',
    height: '100%',
  },
]);

export const storeText = style([
  text.base,
  {
    display: 'block',
    verticalAlign: 'baseline',
  },
]);
