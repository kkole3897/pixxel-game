import { style } from '@vanilla-extract/css';

import { theme } from '@/shared/styles/theme.css';
import { text } from '@/shared/styles/typography.css';

export const catalogList = style({
  marginTop: '16px',
});

export const catalogListTitle = style([
  text.base,
  {
    marginTop: '24px',
    marginBottom: '8px',
    fontWeight: theme.fontWeight.medium,
  },
]);

export const catalogItemLink = style({
  display: 'block',
  padding: '16px 12px',
  borderRadius: '8px',
  textDecoration: 'none',
  transition: 'background-color 0.3s ease-in-out',

  selectors: {
    '& + &': {
      borderTop: `1px solid ${theme.colors.gray[100]}`,
    },
    '&:hover': {
      backgroundColor: theme.colors.blue[100],
    },
  },
});

export const lowestPriceRankArea = style({
  marginTop: '8px',
  paddingTop: '8px',
  borderTop: `1px solid ${theme.colors.gray[100]}`,
});

export const lowestPriceRankAreaTitle = style([
  text.sm,
  {
    marginBottom: '4px',
    color: theme.colors.gray[600],
  },
]);

export const trackingDateAlert = style({
  marginTop: '20px',
});
