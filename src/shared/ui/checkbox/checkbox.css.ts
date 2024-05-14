import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const checkbox = recipe({
  base: {
    width: '16px',
    height: '16px',
    padding: 0,
    borderRadius: '4px',
    border: '1px solid #cccdd0',
    backgroundColor: 'transparent',

    selectors: {
      '&:hover': {
        borderColor: '#4d515b',
      },
      '&[aria-checked=true]': {
        borderColor: '#3786FB',
        backgroundColor: '#3786FB',
      },
      '&:focus-visible': {
        outline: 'none',
        boxShadow: '0 0 0 3px #cedff4',
      },
      '&:disabled': {
        borderColor: '#B3B5B9',
        backgroundColor: '#F4F4F4',
      },
      '&:disabled[aria-checked=true]': {
        borderColor: '#9CBFE8',
        backgroundColor: '#9CBFE8',
      },
    },
  },
  variants: {
    isInvalid: {
      true: {
        borderColor: '#ec7878',

        selectors: {
          '&:hover': {
            borderColor: '#e01e1e',
          },
          '&:focus-visible': {
            borderColor: '#e01e1e',
            boxShadow: '0 0 0 3px #F9D2D2',
          },
          '&[aria-checked=true]': {
            borderColor: '#e01e1e',
            backgroundColor: '#e01e1e',
          },
        },
      },
    },
  },
  defaultVariants: {
    isInvalid: false,
  },
});

export const checkboxIndicator = style({
  display: 'block',
});

export const icon = style({
  display: 'block',
});
