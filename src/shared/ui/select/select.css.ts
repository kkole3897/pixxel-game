import { style } from '@vanilla-extract/css';

import { theme } from '@/shared/styles/theme.css';
import { text } from '@/shared/styles/typography.css';
import { base } from '@/shared/styles/layer.css';

export const trigger = style([
  text.base,
  {
    '@layer': {
      [base]: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        columnGap: '10px',
        width: '100%',
        height: '48px',
        padding: '12px 20px',
        border: `1px solid ${theme.colors.gray[200]}`,
        borderRadius: '8px',
        backgroundColor: 'transparent',
        color: theme.colors.gray[900],
        fontWeight: theme.fontWeight.regular,

        selectors: {
          '&:hover': {
            borderColor: theme.colors.gray[700],
          },
          '&:focus': {
            borderColor: theme.colors.blue[400],
            outline: 'none',
            boxShadow: '0 0 0 3px #cedff4',
          },
          '&[data-placeholder]': {
            color: theme.colors.gray[700],
          },
          '&[data-disabled]': {
            borderColor: theme.colors.gray[200],
            color: theme.colors.gray[500],
          },
          '&[aria-invalid="true"]': {
            borderColor: '#ec7878',
          },
          '&[aria-invalid="true"]:hover': {
            borderColor: '#e01e1e',
          },
          '&[aria-invalid="true"]:focus': {
            borderColor: '#e01e1e',
            boxShadow: '0 0 0 3px #f9d2d2',
          },
        },
      },
    },
  },
]);

export const iconContainer = style({
  '@layer': {
    [base]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      width: '20px',
      height: '20px',
      color: theme.colors.gray[700],

      selectors: {
        [`${trigger}[data-state="open"] &`]: {
          color: theme.colors.gray[900],
        },
        [`${trigger}[data-disabled] &`]: {
          color: theme.colors.gray[400],
        },
      },
    },
  },
});

export const downIcon = style({
  '@layer': {
    [base]: {
      display: 'block',

      selectors: {
        [`${trigger}[data-state="open"] &`]: {
          display: 'none',
        },
      },
    },
  },
});

export const upIcon = style({
  '@layer': {
    [base]: {
      display: 'none',

      selectors: {
        [`${trigger}[data-state="open"] &`]: {
          display: 'block',
        },
      },
    },
  },
});

export const content = style({
  '@layer': {
    [base]: {
      width: 'var(--radix-select-trigger-width)',
      maxHeight: 'var(--radix-select-content-available-height)',
    },
  },
});

export const contentScrollArea = style({
  '@layer': {
    [base]: {
      width: '100%',
      maxHeight: 'calc(var(--radix-select-content-available-height) - 24px)',
    },
  },
});

export const viewport = style({
  '@layer': {
    [base]: {
      width: '100%',
      maxHeight: 'calc(var(--radix-select-content-available-height) - 24px)',
    },
  },
});

export const contentScrollbar = style({
  '@layer': {
    [base]: {
      width: '8px',
    },
  },
});

export const contentScrollThumb = style({
  '@layer': {
    [base]: {
      borderRadius: '27px',
      backgroundColor: theme.colors.gray[200],
    },
  },
});

export const item = style([
  text.base,
  {
    '@layer': {
      [base]: {
        display: 'flex',
        alignItems: 'center',
        columnGap: '12px',
        padding: '12px 20px',
        fontWeight: theme.fontWeight.regular,
        outline: 'none',
        cursor: 'default',
      },
    },
  },
]);

export const itemContent = style({
  '@layer': {
    [base]: {
      display: 'block',
      flex: 1,
    },
  },
});

export const itemIndicator = style({
  '@layer': {
    [base]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      width: '16px',
      height: '16px',
      border: `1px solid ${theme.colors.gray[500]}`,
      borderRadius: '4px',
      color: theme.colors.gray[50],

      selectors: {
        [`${item}[data-state="checked"] &`]: {
          borderColor: theme.colors.blue[500],
          backgroundColor: theme.colors.blue[500],
        },
        [`${item}[data-disabled] &`]: {
          borderColor: theme.colors.gray[400],
        },
      },
    },
  },
});
