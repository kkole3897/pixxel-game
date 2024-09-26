import { recipe } from '@vanilla-extract/recipes';

import { base as baseLayer } from '@/shared/styles/layer.css';
import { theme } from '@/shared/styles/theme.css';

export const button = recipe({
  base: {
    '@layer': {
      [baseLayer]: {
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 19px',
        border: '1px solid transparent',
        borderRadius: '8px',
        fontWeight: 600,
        outline: 'none',
        cursor: 'pointer',

        selectors: {
          '&:focus-visible': {
            boxShadow: `0 0 0 2px ${theme.colors.blue[200]}`,
          },
          '&:disabled': {
            cursor: 'default',
          },
        },
      },
    },
  },
  variants: {
    size: {
      md: {
        '@layer': {
          [baseLayer]: {
            height: '44px',
            fontSize: theme.fontSize.sm,
            lineHeight: theme.lineHeight.sm,
          },
        },
      },
      lg: {
        '@layer': {
          [baseLayer]: {
            height: '48px',
            fontSize: theme.fontSize.base,
            lineHeight: theme.lineHeight.base,
          },
        },
      },
    },
    variant: {
      solid: {
        '@layer': {
          [baseLayer]: {
            borderColor: theme.colors.blue[500],
            backgroundColor: theme.colors.blue[500],
            color: theme.colors.blue[50],

            selectors: {
              '&:hover': {
                borderColor: theme.colors.blue[400],
                backgroundColor: theme.colors.blue[400],
              },
              '&:active': {
                borderColor: theme.colors.blue[600],
                backgroundColor: theme.colors.blue[600],
              },
              '&:disabled': {
                borderColor: theme.colors.gray[200],
                backgroundColor: theme.colors.gray[200],
                color: theme.colors.gray[400],
              },
            },
          },
        },
      },
      ghost: {
        '@layer': {
          [baseLayer]: {
            borderColor: theme.colors.blue[500],
            backgroundColor: 'transparent',
            color: theme.colors.blue[500],

            selectors: {
              '&:hover': {
                borderColor: theme.colors.blue[400],
                color: theme.colors.blue[400],
              },
              '&:active': {
                borderColor: theme.colors.blue[600],
                color: theme.colors.blue[600],
              },
              '&:disabled': {
                borderColor: theme.colors.gray[200],
                color: theme.colors.gray[200],
              },
            },
          },
        },
      },
      text: {
        '@layer': {
          [baseLayer]: {
            backgroundColor: 'transparent',
            color: theme.colors.blue[500],

            selectors: {
              '&:hover': {
                color: theme.colors.blue[400],
              },
              '&:active': {
                color: theme.colors.blue[600],
              },
              '&:disabled': {
                color: theme.colors.gray[300],
              },
            },
          },
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'solid',
  },
});
