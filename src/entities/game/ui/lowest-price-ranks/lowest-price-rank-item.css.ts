import { type StyleRule, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { text } from '@/shared/styles/typography.css';
import { theme } from '@/shared/styles/theme.css';

export const rankItem = style([
  text.sm,
  {
    display: 'flex',
    alignItems: 'center',
    columnGap: '2px',
    width: '100%',
    color: theme.colors.gray[600],
  },
]);

export const iconArea = recipe<{ rank: { [k: number]: StyleRule } }>({
  base: {
    display: 'inline-flex',
    flexShrink: 0,
    width: '18px',
    height: '18px',
    color: theme.colors.gray[700],
  },
  variants: {
    rank: {
      1: {
        color: theme.colors.yellow[950],
      },
    },
  },
  defaultVariants: {
    rank: undefined,
  },
});

export const price = recipe<{ rank: { [k: number]: StyleRule } }>({
  base: {
    fontWeight: theme.fontWeight.semibold,
    color: theme.colors.gray[700],
  },
  variants: {
    rank: {
      1: {
        color: theme.colors.yellow[950],
      },
    },
  },
  defaultVariants: {
    rank: undefined,
  },
});
