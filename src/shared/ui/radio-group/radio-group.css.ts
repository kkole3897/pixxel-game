import { style } from '@vanilla-extract/css';

import { theme } from '@/shared/styles/theme.css';

export const radioGroupItem = style({
  width: '16px',
  height: '16px',
  padding: 0,
  border: `1px solid ${theme.colors.gray[500]}`,
  borderRadius: '50%',
  backgroundColor: theme.colors.gray[50],
  verticalAlign: 'top',

  selectors: {
    '&:hover': {
      borderColor: theme.colors.blue[300],
    },
    '&:focus-visible': {
      outline: 'none',
      boxShadow: '0 0 0 3px #cedff4',
    },
    '&[aria-checked=true]': {
      borderColor: theme.colors.blue[500],
    },
    '&:disabled': {
      borderColor: theme.colors.gray[300],
      backgroundColor: theme.colors.gray[100],
      cursor: 'default',
    },
    '&:disabled[aria-checked=true]': {
      borderColor: theme.colors.blue[300],
    },
  },
});

export const radioGroupIndicator = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  height: '100%',
  borderRadius: '50%',

  selectors: {
    '&:after': {
      content: '',
      display: 'block',
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      backgroundColor: theme.colors.blue[500],
    },
    [`${radioGroupItem}:disabled[aria-checked=true] &:after`]: {
      backgroundColor: theme.colors.blue[300],
    },
  },
});
