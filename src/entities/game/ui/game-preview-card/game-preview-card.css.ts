import { createContainer, style } from '@vanilla-extract/css';

import { theme } from '@/shared/styles/theme.css';
import { text, fontWeight } from '@/shared/styles/typography.css';
import { truncate, visuallyHiddenRule } from '@/shared/styles/utils.css';

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

export const thumbnailImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const thumbnailFallback = style({
  width: '100%',
  height: '100%',
  background: theme.colors.gray[200],
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
});

export const title = style([truncate(), fontWeight.medium]);

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
  },
]);

export const prices = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: '2px',
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
