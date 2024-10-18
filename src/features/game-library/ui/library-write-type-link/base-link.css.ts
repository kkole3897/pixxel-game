import { style } from '@vanilla-extract/css';

import { theme } from '@/shared/styles/theme.css';

export const link = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '240px',
  padding: '8px',
  borderRadius: '12px',
  backgroundColor: theme.colors.gray[100],
  color: theme.colors.gray[500],
  textDecoration: 'none',
  aspectRatio: '1 / 1',

  selectors: {
    '&:hover': {
      backgroundColor: theme.colors.sky[100],
      color: theme.colors.blue[500],
      transition: 'background-color 0.2s',
    },
  },
});

export const iconArea = style({
  marginBottom: '12px',
});

export const icon = style({
  width: '40px',
  height: '40px',
});

export const mainLabel = style({
  fontSize: theme.fontSize.base,
  fontWeight: theme.fontWeight.semibold,
  lineHeight: theme.lineHeight.base,
});
