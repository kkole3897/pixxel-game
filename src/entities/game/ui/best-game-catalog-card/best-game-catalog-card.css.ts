import { style } from '@vanilla-extract/css';

import { theme } from '@/shared/styles/theme.css';
import { text, fontWeight } from '@/shared/styles/typography.css';

export const card = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '20px',
  borderRadius: '20px',
  background:
    'linear-gradient(0deg, #FFF 0.36%, rgba(246, 247, 255, 0.00) 99.76%)',
  boxShadow: '0 0 52px 0 rgba(0, 0, 0, 0.08)',
});

export const mediaArea = style({
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  aspectRatio: '303 / 185',
  borderRadius: '16px',
});

export const mainImage = style({
  width: '100%',
  height: '100%',
});

export const wishArea = style({
  position: 'absolute',
  top: '16px',
  right: '16px',
  zIndex: 1,
});

export const headerArea = style({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '8px',
});

export const title = style([
  text.base,
  fontWeight.bold,
  {
    color: theme.colors.gray[900],
  },
]);

export const releaseDate = style([
  {
    color: theme.colors.gray[400],
  },
]);

export const bodyArea = style({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '8px',
  paddingTop: '16px',
});

export const storeArea = style({
  display: 'flex',
  alignItems: 'center',
});

export const onSaleText = style({
  color: theme.colors.gray[600],
});

export const drmArea = style([
  text.sm,
  {
    display: 'flex',
    alignItems: 'center',
    columnGap: '2px',
    color: theme.colors.gray[500],
  },
]);

export const regularPriceArea = style([
  text.sm,
  {
    display: 'flex',
    alignItems: 'center',
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
  text.lg,
  {
    color: theme.colors.blue[500],
    fontWeight: theme.fontWeight.bold,
  },
]);
