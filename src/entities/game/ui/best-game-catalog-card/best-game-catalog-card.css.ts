import { style } from '@vanilla-extract/css';

import { theme } from '@/shared/styles/theme.css';
import { text, fontWeight } from '@/shared/styles/typography.css';

export const card = style({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  padding: '20px',
  borderRadius: '20px',
  background:
    'linear-gradient(0deg, #FFF 0.36%, rgba(246, 247, 255, 0.00) 99.76%)',
  boxShadow: '0 0 52px 0 rgba(0, 0, 0, 0.08)',
});

export const bestMarker = style([
  text.sm,
  {
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: '28px',
    height: '40px',
    padding: '6px 4px 0',
    backgroundColor: theme.colors.blue[500],
    color: theme.colors.gray[50],
    fontWeight: theme.fontWeight.medium,
    clipPath: 'polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)',
    zIndex: 1,
  },
]);

export const mediaArea = style({
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  minHeight: '48px',
  borderRadius: '16px',
});

export const mainImage = style({
  width: '100%',
  height: 'auto',
});

export const mainImageFallback = style({
  backgroundColor: theme.colors.gray[200],
  aspectRatio: '616 / 353',
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

export const dlcArea = style({
  display: 'flex',
  alignItems: 'center',
  columnGap: '4px',
  marginBottom: '8px',
});

export const baseGameArea = style({
  display: 'flex',
  columnGap: '4px',
  color: theme.colors.gray[600],
  fontSize: theme.fontSize.sm,
  fontWeight: theme.fontWeight.regular,
  lineHeight: theme.lineHeight.sm,
});

export const baseGameLink = style({
  color: 'inherit',
  textDecoration: 'underline',
});

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
