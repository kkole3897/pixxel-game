import { style } from '@vanilla-extract/css';

import { theme } from '@/shared/styles/theme.css';
import { truncate } from '@/shared/styles/utils.css';

export const link = style({
  display: 'flex',
  width: '100%',
  maxWidth: '100%',
  height: '48px',
  color: theme.colors.gray[900],
  textDecoration: 'none',

  selectors: {
    '& + &': {
      borderTop: `1px solid ${theme.colors.gray[100]}`,
    },
  },
});

export const imageArea = style({
  flex: '0 0 88px',
  height: '100%',
  width: '88px',
});

export const mainImage = style({
  height: '100%',
  width: '100%',
  objectFit: 'cover',
});

export const mainImageFallback = style({
  width: '100%',
  height: '100%',
  backgroundColor: theme.colors.gray[100],
});

export const contentArea = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flex: '1 1',
  overflow: 'hidden',
  columnGap: '8px',
  height: '100%',
  padding: '0 16px',
});

export const title = style([
  truncate(),
  {
    fontSize: theme.fontSize.base,
    fontWeight: theme.fontWeight.medium,
    lineHeight: theme.lineHeight.base,
  },
]);

export const price = style({
  flex: '0 0 100px',
  color: theme.colors.blue[500],
  fontSize: theme.fontSize.base,
  fontWeight: theme.fontWeight.medium,
  lineHeight: theme.lineHeight.base,
});
