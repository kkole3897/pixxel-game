import { style } from '@vanilla-extract/css';

import { theme } from '@/shared/styles/theme.css';

export const container = style({
  height: '400px',
  padding: '8px 0',
  borderRadius: '8px',
  backgroundColor: theme.colors.sky[50],
});

export const emptyContainer = style({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  height: '200px',
  borderRadius: '8px',
  backgroundColor: theme.colors.gray[100],
});

export const emptyMessage = style({
  paddingTop: '12px',
  color: theme.colors.gray[400],
  fontWeight: 500,
});
