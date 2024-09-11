import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { text } from '@/shared/styles/typography.css';
import { theme } from '@/shared/styles/theme.css';

export const box = style({
  display: 'flex',
  alignItems: 'center',
  columnGap: '8px',
  overflow: 'hidden',
  height: '78px',
});

export const thumbnailArea = style({
  flex: '0 0 100px',
  width: '100px',
  height: '68px',
});

export const summaryArea = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  flex: 1,
  overflow: 'hidden',
});

export const thumbnailImg = recipe({
  base: {
    width: '100%',
    height: '100%',
    borderRadius: '8px',
    objectFit: 'cover',
  },
  variants: {
    dimmed: {
      true: {
        filter: 'grayscale(1)',
      },
    },
  },
});

export const gameName = recipe({
  base: {
    overflow: 'hidden',
    fontWeight: theme.fontWeight.bold,
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
  variants: {
    dimmed: {
      true: {
        color: theme.colors.gray[300],
      },
    },
  },
});

export const lowestArea = style({
  flexShrink: 0,
});

export const lowestText = style([
  text.sm,
  {
    padding: '2px 4px',
    borderRadius: '4px',
    backgroundColor: theme.colors.green[950],
    color: theme.colors.gray[50],
  },
]);

export const initialPriceArea = style({
  display: 'flex',
  alignItems: 'center',
});

export const finalPriceArea = style({
  display: 'flex',
  alignItems: 'center',
  columnGap: '4px',
});

export const finalPrice = style([
  text.base,
  {
    color: theme.colors.blue[500],
    fontWeight: theme.fontWeight.bold,
  },
]);

export const discountRate = style([
  text.xs,
  {
    marginRight: '4px',
    padding: '2px 4px',
    borderRadius: '4px',
    backgroundColor: theme.colors.blue[100],
    color: theme.colors.blue[500],
    fontWeight: theme.fontWeight.semibold,
  },
]);

export const initalPrice = style({
  color: theme.colors.gray[200],
  textDecoration: 'line-through',
});

export const priceArea = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  marginTop: '4px',
});

export const salesEndText = style([
  text.base,
  {
    color: theme.colors.gray[400],
    fontWeight: theme.fontWeight.bold,
  },
]);
