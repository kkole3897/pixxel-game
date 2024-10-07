import { style } from '@vanilla-extract/css';

import { theme } from '@/shared/styles/theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const header = style({
  width: '100%',
});

export const backButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '48px',
  height: '48px',
  padding: 0,
  color: theme.colors.gray[800],
});

export const formArea = style({
  maxWidth: '480px',
  width: '100%',
  padding: '0 12px',
});

export const form = style({
  width: '100%',
});
