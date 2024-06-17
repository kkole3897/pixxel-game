import { style } from '@vanilla-extract/css';

import { text } from '@/shared/styles/typography.css';
import { theme } from '@/shared/styles/theme.css';

export const listItem = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const storeArea = style({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '4px',
});

export const drmArea = style([
  text.xs,
  {
    display: 'flex',
    alignItems: 'center',
    columnGap: '2px',
    color: theme.colors.gray[500],
    fontWeight: theme.fontWeight.medium,
  },
]);

export const priceArea = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  justifyContent: 'center',
});

export const regularPriceArea = style([
  text.xs,
  {
    display: 'flex',
    columnGap: '4px',
  },
]);

export const discountPercent = style({
  color: theme.colors.blue[500],
  fontWeight: theme.fontWeight.medium,
});

export const regularPrice = style({
  color: theme.colors.gray[200],
  textDecoration: 'line-through',
});

export const currentPrice = style([
  text.base,
  {
    color: theme.colors.blue[500],
    fontWeight: theme.fontWeight.medium,
  },
]);

export const discountExpireDate = style([
  text.sm,
  {
    color: theme.colors.gray[400],
    fontWeight: theme.fontWeight.medium,
  },
]);
