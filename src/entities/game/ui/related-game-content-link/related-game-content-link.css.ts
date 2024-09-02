import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { theme } from '@/shared/styles/theme.css';
import { truncate } from '@/shared/styles/utils.css';

export const link = style({
  display: 'flex',
  width: '100%',
  maxWidth: '100%',
  height: '48px',
  color: theme.colors.gray[900],
  textDecoration: 'none',

  selectors: {
    '& + &': {
      borderTop: `1px solid ${theme.colors.gray[100]}`,
    },
  },
});

export const imageArea = style({
  flex: '0 0 88px',
  height: '100%',
  width: '88px',
});

export const mainImage = recipe({
  base: {
    height: '100%',
    width: '100%',
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

export const mainImageFallback = style({
  width: '100%',
  height: '100%',
  backgroundColor: theme.colors.gray[100],
});

export const contentArea = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flex: '1 1',
  overflow: 'hidden',
  columnGap: '8px',
  height: '100%',
  padding: '0 16px',
});

export const title = recipe({
  base: [
    truncate(),
    {
      fontSize: theme.fontSize.xs,
      fontWeight: theme.fontWeight.semibold,
      lineHeight: theme.lineHeight.xs,
    },
  ],
  variants: {
    dimmed: {
      true: {
        color: theme.colors.gray[500],
      },
    },
  },
});

export const price = recipe({
  base: {
    flex: '0 0 auto',
    color: theme.colors.blue[500],
    fontSize: theme.fontSize.sm,
    fontWeight: theme.fontWeight.medium,
    lineHeight: theme.lineHeight.sm,
    textAlign: 'right',
  },
  variants: {
    dimmed: {
      true: {
        color: theme.colors.gray[500],
      },
    },
  },
});
