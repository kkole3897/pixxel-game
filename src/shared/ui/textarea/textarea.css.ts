import { recipe } from '@vanilla-extract/recipes';

import { base } from '@/shared/styles/layer.css';
import { theme } from '@/shared/styles/theme.css';

export const textarea = recipe({
  base: {
    '@layer': {
      [base]: {
        height: '104px',
        padding: '12px 20px',
        border: `1px solid ${theme.colors.gray[200]}`,
        borderRadius: '8px',
        backgroundColor: '#fff',
        color: theme.colors.gray[950],
        resize: 'none',

        selectors: {
          '&::placeholder': {
            color: theme.colors.gray[200],
          },
          '&:hover': {
            borderColor: theme.colors.gray[700],
          },
          '&:focus': {
            borderColor: theme.colors.blue[400],
            outline: 'none',
            boxShadow: '0 0 0px 2px #cedff4',
          },
          '&:disabled': {
            borderColor: theme.colors.gray[200],
            backgroundColor: '#f4f4f4',
            color: theme.colors.gray[200],
            cursor: 'default',
          },
          '&::-webkit-scrollbar': {
            width: '12px',
            height: '12px',
          },
          '&::-webkit-scrollbar-track,\
          &::-webkit-scrollbar-thumb': {
            backgroundClip: 'content-box',
            border: '4px solid transparent',
            borderRadius: '12px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: theme.colors.gray[100],
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: theme.colors.gray[200],
          },
        },
      },
    },
  },
  variants: {
    size: {
      md: {},
      lg: {
        '@layer': {
          [base]: {
            height: '120px',
            padding: '16px 24px',
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
                borderColor: theme.colors.red[950],
              },
              '&:focus': {
                borderColor: theme.colors.red[950],
                boxShadow: '0 0 0px 2px #f9d2d2',
              },
              '&:disabled': {
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
