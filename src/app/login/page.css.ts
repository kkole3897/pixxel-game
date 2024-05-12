import { style } from '@vanilla-extract/css';

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
