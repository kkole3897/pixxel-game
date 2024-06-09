import { styleVariants } from '@vanilla-extract/css';

import { base } from './layer.css';
import { theme } from './theme.css';

export const text = styleVariants({
  '3xs': {
    '@layer': {
      [base]: {
        fontSize: theme.fontSize['3xs'],
        lineHeight: theme.lineHeight['3xs'],
      },
    },
  },
  '2xs': {
    '@layer': {
      [base]: {
        fontSize: theme.fontSize['2xs'],
        lineHeight: theme.lineHeight['2xs'],
      },
    },
  },
  xs: {
    '@layer': {
      [base]: {
        fontSize: theme.fontSize.xs,
        lineHeight: theme.lineHeight.xs,
      },
    },
  },
  sm: {
    '@layer': {
      [base]: {
        fontSize: theme.fontSize.sm,
        lineHeight: theme.lineHeight.sm,
      },
    },
  },
  base: {
    '@layer': {
      [base]: {
        fontSize: theme.fontSize.base,
        lineHeight: theme.lineHeight.base,
      },
    },
  },
  lg: {
    '@layer': {
      [base]: {
        fontSize: theme.fontSize.lg,
        lineHeight: theme.lineHeight.lg,
      },
    },
  },
  xl: {
    '@layer': {
      [base]: {
        fontSize: theme.fontSize.xl,
        lineHeight: theme.lineHeight.xl,
      },
    },
  },
  '2xl': {
    '@layer': {
      [base]: {
        fontSize: theme.fontSize['2xl'],
        lineHeight: theme.lineHeight['2xl'],
      },
    },
  },
  '3xl': {
    '@layer': {
      [base]: {
        fontSize: theme.fontSize['3xl'],
        lineHeight: theme.lineHeight['3xl'],
      },
    },
  },
  '4xl': {
    '@layer': {
      [base]: {
        fontSize: theme.fontSize['4xl'],
        lineHeight: theme.lineHeight['4xl'],
      },
    },
  },
});
