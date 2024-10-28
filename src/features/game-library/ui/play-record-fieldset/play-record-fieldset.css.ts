import { style } from '@vanilla-extract/css';

import { theme } from '@/shared/styles/theme.css';
import { text } from '@/shared/styles/typography.css';

export const fieldset = style({
  border: `1px solid ${theme.colors.gray[200]}`,
  borderRadius: '8px',

  selectors: {
    '& + &': {
      marginTop: '16px',
    },
  },
});

const innerPaddingX = '16px';

export const header = style({
  padding: `16px ${innerPaddingX}`,
});

export const content = style({
  padding: `0 ${innerPaddingX}`,
});

export const legend = style([
  text.lg,
  {
    fontWeight: theme.fontWeight.semibold,
  },
]);
