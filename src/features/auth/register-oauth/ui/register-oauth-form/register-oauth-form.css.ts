import { style } from '@vanilla-extract/css';

export const formInner = style({
  maxWidth: '360px',
});

export const label = style({
  display: 'inline-block',
  marginBottom: '12px',
  color: '#010715',
  fontSize: '1rem',
  fontWeight: 700,
  lineHeight: '1.25rem',
});

export const formHelperText = style({
  marginBottom: '8px',
  color: '#999CA1',
  fontSize: '0.875rem',
  lineHeight: '1.25rem',
});

export const input = style({
  width: '100%',
});

export const submitArea = style({
  marginTop: '30px',
});

export const submitButton = style({
  width: '100%',
});

export const field = style({
  selectors: {
    '& + &': {
      marginTop: '20px',
    },
  },
});

export const checkboxContainer = style({
  display: 'flex',
});

export const checkbox = style({
  flexShrink: 0,
  marginRight: '8px',
});

export const checkboxLabel = style({
  paddingTop: '1px',
});

export const fieldErrorMessage = style({
  marginTop: '8px',
  color: '#E64B4B',
});
