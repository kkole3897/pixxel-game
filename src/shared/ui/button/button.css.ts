import { recipe } from '@vanilla-extract/recipes';

import { base as baseLayer } from '@/shared/styles/layer.css';

export const button = recipe({
  base: {
    '@layer': {
      [baseLayer]: {
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '11px 19px',
        border: '1px solid transparent',
        borderRadius: '8px',
        fontWeight: 600,
        outline: 'none',
        cursor: 'pointer',

        selectors: {
          '&:focus-visible': {
            boxShadow: '0 0 0 2px #9CBFE8',
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
            fontSize: '0.875rem',
            lineHeight: '1.25rem',
          },
        },
      },
      lg: {
        '@layer': {
          [baseLayer]: {
            fontSize: '1rem',
            lineHeight: '1.5rem',
          },
        },
      },
    },
    variant: {
      solid: {
        '@layer': {
          [baseLayer]: {
            borderColor: '#3786fb',
            backgroundColor: '#3786fb',
            color: '#fff',

            selectors: {
              '&:hover': {
                borderColor: '#397fd1',
                backgroundColor: '#397fd1',
              },
              '&:active': {
                borderColor: '#064c9e',
                backgroundColor: '#064c9e',
              },
              '&:disabled': {
                borderColor: '#cccdd0',
                backgroundColor: '#cccdd0',
                color: '#999ca1',
              },
            },
          },
        },
      },
      ghost: {
        '@layer': {
          [baseLayer]: {
            borderColor: '#3786fb',
            backgroundColor: 'transparent',
            color: '#3786fb',

            selectors: {
              '&:hover': {
                borderColor: '#397fd1',
                color: '#397fd1',
              },
              '&:active': {
                borderColor: '#064c9e',
                color: '#064c9e',
              },
              '&:disabled': {
                borderColor: '#cccdd0',
                color: '#b3b5b9',
              },
            },
          },
        },
      },
      text: {
        '@layer': {
          [baseLayer]: {
            backgroundColor: 'transparent',
            color: '#3786fb',

            selectors: {
              '&:hover': {
                color: '#397fd1',
              },
              '&:active': {
                color: '#064c9e',
              },
              '&:disabled': {
                color: '#b3b5b9',
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
