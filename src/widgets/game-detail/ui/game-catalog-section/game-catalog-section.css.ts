import { style } from '@vanilla-extract/css';
import { theme } from '@/shared/styles/theme.css';

export const catalogList = style({
  marginTop: '16px',
});

export const catalogItemLink = style({
  display: 'block',
  padding: '16px 12px',
  borderRadius: '8px',
  textDecoration: 'none',
  transition: 'background-color 0.3s ease-in-out',

  selectors: {
    '& + &': {
      borderTop: `1px solid ${theme.colors.gray[100]}`,
    },
    '&:hover': {
      backgroundColor: theme.colors.blue[100],
    },
  },
});
