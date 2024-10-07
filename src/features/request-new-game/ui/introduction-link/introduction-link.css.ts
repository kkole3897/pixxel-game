import { style } from '@vanilla-extract/css';

import { theme } from '@/shared/styles/theme.css';
import { text } from '@/shared/styles/typography.css';

export const link = style({
  display: 'flex',
  alignItems: 'center',
  padding: '8px 16px 8px 12px',
  borderRadius: '16px',
  backgroundColor: 'rgba(77, 81, 91, 0.04)',
});

export const mainIcon = style({
  flexShrink: 0,
  width: '48px',
  height: '48px',
  marginRight: '4px',
});

export const descriptionArea = style([
  text.sm,
  {
    flex: 1,
    fontWeight: theme.fontWeight.semibold,
  },
]);

export const emphasisText = style({
  fontWeight: theme.fontWeight.bold,
  color: theme.colors.blue[500],
});

export const rightIcon = style({
  flexShrink: 0,
  width: '20px',
  marginLeft: '4px',
  color: theme.colors.gray[400],
});
