import { style } from '@vanilla-extract/css';

import { text } from '@/shared/styles/typography.css';
import { theme } from '@/shared/styles/theme.css';

export const field = style({
  selectors: {
    '& + &': {
      marginTop: '16px',
    },
  },
});

export const control = style({
  width: '100%',
});

export const label = style([
  text.base,
  {
    display: 'inline-block',
    marginBottom: '4px',
    fontWeight: theme.fontWeight.medium,
  },
]);

export const errorText = style({
  marginTop: '4px',
  color: theme.colors.red[900],
});

export const requiredIndicator = style({
  color: theme.colors.red[900],
});
