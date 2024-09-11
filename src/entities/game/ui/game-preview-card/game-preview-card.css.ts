import { createContainer, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { theme } from '@/shared/styles/theme.css';
import { text, fontWeight } from '@/shared/styles/typography.css';
import { truncate, visuallyHiddenRule } from '@/shared/styles/utils.css';

const SKELETON_COLOR = theme.colors.gray[200];

export const card = style({
  display: 'flex',
  flexDirection: 'column',
});

export const thumbnailArea = style({
  flex: '1',
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '8px',
  aspectRatio: '616 / 353',
});

export const thumbnailAreaSkeleton = style([
  thumbnailArea,
  {
    backgroundColor: SKELETON_COLOR,
  },
]);

export const thumbnailImage = recipe({
  base: {
    width: '100%',
    height: '100%',
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

export const historicalLow = style([
  text.sm,
  {
    position: 'absolute',
    top: '4px',
    left: '4px',
    padding: '2px 4px',
    borderRadius: '4px',
    backgroundColor: theme.colors.green[950],
    color: theme.colors.gray[50],
  },
]);

export const descriptionArea = style({
  display: 'flex',
  flexDirection: 'column',
  flexShrink: 0,
  gap: '4px',
  height: '70px',
  padding: '8px',
  boxSizing: 'content-box',
});

export const title = recipe({
  base: [fontWeight.medium, truncate()],
  variants: {
    dimmed: {
      true: {
        color: theme.colors.gray[600],
      },
    },
  },
});

export const titleSkeleton = style([
  title(),
  {
    height: theme.lineHeight.sm,
    width: '80%',
    backgroundColor: SKELETON_COLOR,
  },
]);

const catalogAreaContainer = createContainer();

export const catalogArea = style({
  containerName: catalogAreaContainer,
  containerType: 'inline-size',
  display: 'flex',
  flex: 1,
});

export const storeArea = style({
  display: 'flex',
  alignItems: 'center',
  '@container': {
    [`${catalogAreaContainer} (max-width: 135px)`]: visuallyHiddenRule,
  },
});

export const storeIcon = recipe({
  base: {},
  variants: {
    dimmed: {
      true: {
        filter: 'grayscale(1)',
      },
    },
  },
});

export const storeAreaSkeleton = style([
  storeArea,
  {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    backgroundColor: SKELETON_COLOR,
  },
]);

export const priceArea = style({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  flex: 1,
  gap: '4px',
});

export const discountPercent = style([
  text.xs,
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '37px',
    height: '18px',
    borderRadius: '4px',
    background: theme.colors.blue[100],
    color: theme.colors.blue[500],
    fontWeight: theme.fontWeight.medium,
  },
]);

export const prices = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: '2px',
});

export const regularPriceArea = style({
  display: 'flex',
  alignItems: 'center',
  columnGap: '4px',
});

export const regularPrice = style([
  text.xs,
  {
    color: theme.colors.gray[200],
    textDecoration: 'line-through',
  },
]);

export const currentPrice = style([
  text.base,
  fontWeight.bold,
  {
    color: theme.colors.blue[500],
  },
]);

export const currentPriceSkeleton = style([
  currentPrice,
  {
    width: '72px',
    height: theme.lineHeight.base,
    backgroundColor: SKELETON_COLOR,
  },
]);

export const salesEndText = style([
  text.base,
  fontWeight.bold,
  {
    color: theme.colors.gray[400],
  },
]);
