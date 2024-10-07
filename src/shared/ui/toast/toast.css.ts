import { style, keyframes, styleVariants } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { base } from '@/shared/styles/layer.css';
import { theme } from '@/shared/styles/theme.css';
import { text } from '@/shared/styles/typography.css';
import { screen } from '@/shared/styles/constants';

const slidingUpAnimation = keyframes({
  to: {
    transform: 'translateY(-2000px)',
  },
});

const slidingRightAnimation = keyframes({
  to: {
    transform: 'translateX(2000px)',
  },
});

const slidingDownAnimation = keyframes({
  to: {
    transform: 'translateY(2000px)',
  },
});

const slidingLeftAnimation = keyframes({
  to: {
    transform: 'translateX(-2000px)',
  },
});

const shrinkingAnimation = keyframes({
  to: {
    height: 0,
    margin: 0,
    padding: 0,
  },
});

const rootBase = style({
  '@layer': {
    [base]: {
      display: 'flex',
      alignItems: 'center',
      maxWidth: 'calc(100vw - 88px)',
      padding: '14px 20px',
      borderRadius: '16px',
      transform: 'translate(var(--toast-swipe-x), var(--toast-swipe-y))',

      '@media': {
        [screen.sm]: {
          maxWidth: '392px',
        },
      },

      selectors: {
        '* + &': {
          marginTop: '12px',
        },
        '&[data-state="closed"]': {
          animation: `${slidingUpAnimation} 500ms forwards, ${shrinkingAnimation} 300ms forwards`,
        },
        '&[data-state="closed"][data-swipe-direction="right"]': {
          animation: `${slidingRightAnimation} 500ms forwards, ${shrinkingAnimation} 300ms forwards`,
        },
        '&[data-state="closed"][data-swipe-direction="down"]': {
          animation: `${slidingDownAnimation} 500ms forwards, ${shrinkingAnimation} 300ms forwards`,
        },
        '&[data-state="closed"][data-swipe-direction="left"]': {
          animation: `${slidingLeftAnimation} 500ms forwards, ${shrinkingAnimation} 300ms forwards`,
        },
      },
    },
  },
});

const rootTypeVariants = styleVariants({
  default: {
    '@layer': {
      [base]: {
        backgroundColor: '#80838A',
        color: theme.colors.gray[50],
      },
    },
  },
  error: {
    '@layer': {
      [base]: {
        backgroundColor: theme.colors.red[100],
        color: theme.colors.red[900],
      },
    },
  },
});

export const root = recipe({
  base: [rootBase],
  variants: {
    hasIcon: {
      true: {
        '@layer': {
          [base]: {
            paddingLeft: '16px',
          },
        },
      },
    },
    hasAction: {
      true: {
        '@layer': {
          [base]: {
            width: 'calc(100vw - 88px)',
            paddingRight: '14px',
          },
        },
      },
    },
    type: rootTypeVariants,
  },
  defaultVariants: {
    hasIcon: false,
    hasAction: false,
    type: 'default',
  },
});

export const center = style({
  '@layer': {
    [base]: {
      flex: 1,
      margin: '0 20px 0 12px',

      selectors: {
        [`${rootBase} > &:first-child`]: {
          marginLeft: '0',
        },
        [`${rootBase} > &:last-child`]: {
          marginRight: '0',
        },
      },
    },
  },
});

export const title = style([
  text.base,
  {
    fontWeight: theme.fontWeight.semibold,
  },
]);

export const description = style([text.sm]);

export const action = style([
  text.sm,
  {
    '@layer': {
      [base]: {
        flexShrink: 0,
        padding: '6px 12px',
        borderRadius: '999px',
        border: 0,
        backgroundColor: '#5F6C7B',
        color: theme.colors.gray[50],
        cursor: 'pointer',

        selectors: {
          [`${rootTypeVariants.error} &`]: {
            backgroundColor: theme.colors.red[700],
          },
        },
      },
    },
  },
]);
