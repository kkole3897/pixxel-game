import { style } from '@vanilla-extract/css';
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

export const iconArea = recipe({
  base: {
    display: 'inline-flex',
    flexShrink: 0,
    width: '18px',
    height: '18px',
  },
  variants: {
    rank: {
      gold: {
        color: theme.colors.yellow[950],
      },
      silver: {
        color: theme.colors.gray[700],
      },
    },
  },
  defaultVariants: {
    rank: 'silver',
  },
});

export const price = recipe({
  base: {
    fontWeight: theme.fontWeight.semibold,
  },
  variants: {
    rank: {
      gold: {
        color: theme.colors.yellow[950],
      },
      silver: {
        color: theme.colors.gray[700],
      },
    },
  },
  defaultVariants: {
    rank: 'silver',
  },
});
