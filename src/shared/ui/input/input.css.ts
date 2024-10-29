import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { theme } from '@/shared/styles/theme.css';
import { base } from '@/shared/styles/layer.css';

export const input = style({
  '@layer': {
    [base]: {
      flex: 1,
      width: '100%',
      padding: 0,
      border: 0,
      backgroundColor: 'transparent',
      color: 'inherit',
      fontSize: 'inherit',
      lineHeight: 'inherit',
      cursor: 'inherit',

      selectors: {
        '&::placeholder': {
          color: '#cccdd0',
        },
        '&:focus': {
          outline: 'none',
        },
        '&[type="search"]::-webkit-search-decoration,\
        &[type="search"]::-webkit-search-cancel-button,\
        &[type="search"]::-webkit-search-results-button,\
        &[type="search"]::-webkit-search-results-decoration': {
          display: 'none',
        },
      },
    },
  },
});

export const inputSlot = recipe({
  base: {
    '@layer': {
      [base]: {
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexShrink: 0,
        padding: '0 18px',
      },
    },
  },
  variants: {
    side: {
      left: {
        '@layer': {
          [base]: {
            order: -1,
          },
        },
      },
      right: {
        '@layer': {
          [base]: {
            order: 1,
          },
        },
      },
    },
  },
  defaultVariants: {
    side: 'right',
  },
});

export const inputContainer = recipe({
  base: {
    '@layer': {
      [base]: {
        display: 'inline-flex',
        padding: '0 18px',
        border: '1px solid #cccdd0',
        borderRadius: '8px',
        backgroundColor: '#fff',
        color: '#010715',
        cursor: 'text',

        selectors: {
          [`&:hover`]: {
            borderColor: '#4d515b',
          },
          '&:focus-within': {
            borderColor: '#397fd1',
            boxShadow: '0 0 0 3px #cedff4',
          },
          [`&:has(${input}:disabled)`]: {
            backgroundColor: '#f4f4f4',
            color: '#cccdd0',
            cursor: 'default',
          },
          [`&:has(${input}:disabled):hover`]: {
            borderColor: '#cccdd0',
            backgroundColor: '#f4f4f4',
            color: '#cccdd0',
            cursor: 'default',
          },
          [`&:has(${inputSlot({ side: 'left' }).split(' ')[1]})`]: {
            paddingLeft: 0,
          },
          [`&:has(${inputSlot({ side: 'right' }).split(' ')[1]})`]: {
            paddingRight: 0,
          },
        },
      },
    },
  },
  variants: {
    size: {
      md: {
        '@layer': {
          [base]: {
            height: '40px',
            fontSize: theme.fontSize.base,
            lineHeight: theme.lineHeight.base,
          },
        },
      },
      lg: {
        '@layer': {
          [base]: {
            height: '48px',
            fontSize: theme.fontSize.lg,
            lineHeight: theme.fontSize.lg,
          },
        },
      },
    },
    isInvalid: {
      true: {
        '@layer': {
          [base]: {
            borderColor: '#ec7878',

            selectors: {
              '&:hover': {
                borderColor: '#e01e1e',
              },
              '&:focus-within': {
                borderColor: '#e01e1e',
                boxShadow: '0 0 0 3px #F9D2D2',
              },
              [`&:has(${input}:disabled):hover`]: {
                borderColor: '#ec7878',
              },
            },
          },
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
    isInvalid: false,
  },
});
