import { style } from '@vanilla-extract/css';

import { theme } from '@/shared/styles/theme.css';

export const rootContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
});

export const logoArea = style({
  marginBottom: '24px',
  fontSize: '2.5rem',
  fontWeight: 'bold',
});

export const socialLoginArea = style({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '8px',
  marginTop: '32px',
});

export const description = style({
  color: theme.colors.gray[800],
  fontWeight: 500,
});

export const terms = style({
  marginTop: '32px',
  color: theme.colors.gray[500],
  textAlign: 'center',
});

export const termsStrongText = style({
  color: 'inherit',
  fontWeight: 'inherit',
  textDecoration: 'underline',
});
