import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const input = style({
  width: '100%',
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
  },
});

export const inputContainer = recipe({
  base: {
    display: 'inline-flex',
    padding: '10px 18px',
    border: '1px solid #cccdd0',
    borderRadius: '8px',
    backgroundColor: '#fff',
    color: '#010715',
    cursor: 'text',
    boxSizing: 'border-box',

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
    },
  },
  variants: {
    size: {
      md: {
        fontSize: '0.875rem',
        lineHeight: '1.25rem',
      },
      lg: {
        fontSize: '1rem',
        lineHeight: '1.5rem',
      },
    },
    isInvalid: {
      true: {
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
  defaultVariants: {
    size: 'md',
    isInvalid: false,
  },
});
