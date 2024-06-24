import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { theme } from '@/shared/styles/theme.css';

export const overlay = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'rgba(0, 0, 0, 0.4)',
  zIndex: 20,
});

export const content = style({
  position: 'fixed',
  top: '50%',
  left: '50%',
  width: '90vw',
  maxWidth: '480px',
  maxHeight: '85vh',
  padding: '16px',
  borderRadius: '8px',
  background: '#fff',
  transform: 'translate(-50%, -50%)',
  boxSizing: 'border-box',
  zIndex: 30,
});

export const title = style({
  fontSize: theme.fontSize.lg,
  fontWeight: theme.fontWeight.bold,
  lineHeight: theme.lineHeight.lg,
  marginBottom: '8px',
});

export const description = style({
  color: theme.colors.gray[700],
  fontSize: theme.fontSize.base,
  lineHeight: theme.lineHeight.base,
});

export const actionArea = style({
  display: 'flex',
  justifyContent: 'flex-end',
  columnGap: '8px',
  marginTop: '16px',
});

const button = style({
  padding: '7px 15px',
  color: '#fff',
});

export const cancelButton = style([
  button,
  {
    borderColor: theme.colors.gray[700],
    backgroundColor: theme.colors.gray[700],
  },
]);

export const deleteButton = style([
  button,
  {
    borderColor: theme.colors.red[700],
    backgroundColor: theme.colors.red[700],
  },
]);
