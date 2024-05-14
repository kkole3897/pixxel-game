import { style } from '@vanilla-extract/css';

export const checkbox = style({
  width: '16px',
  height: '16px',
  padding: 0,
  borderRadius: '4px',
  border: '1px solid #80838a',
  backgroundColor: 'transparent',

  selectors: {
    '&:hover': {
      borderColor: '#6b9fdd',
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
});

export const checkboxIndicator = style({
  display: 'block',
});

export const icon = style({
  display: 'block',
});
