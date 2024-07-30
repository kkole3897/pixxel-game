import { style } from '@vanilla-extract/css';

import { theme } from '@/shared/styles/theme.css';

export const badge = style({
  display: 'inline-block',
  padding: '0 4px',
  borderRadius: '999px',
  backgroundColor: theme.colors.gray[800],
  color: '#fff',
  fontSize: theme.fontSize['xs'],
  fontWeight: theme.fontWeight.regular,
  lineHeight: theme.lineHeight['xs'],
});
