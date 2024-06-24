import { style } from '@vanilla-extract/css';
import { theme } from '@/shared/styles/theme.css';

export const header = style({
  position: 'sticky',
  top: 0,
  padding: '12px 16px',
  background: '#fff',
  zIndex: 10,
});

export const prevLink = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '24px',
  height: '24px',
  padding: 0,
  border: 0,
  background: 'transparent',
  color: 'pointer',
});

export const prevIcon = style({
  width: '100%',
  height: '100%',
  color: theme.colors.gray[900],
});

export const profileDetailSection = style({
  marginTop: '24px',
  padding: '0 16px',
});

export const deleteUserArea = style({
  display: 'flex',
  justifyContent: 'flex-end',
  maxWidth: '480px',
  margin: '16px auto 0',
  padding: '0 16px',
});
