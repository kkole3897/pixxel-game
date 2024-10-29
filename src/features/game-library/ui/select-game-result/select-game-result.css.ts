import { style } from '@vanilla-extract/css';

import { theme } from '@/shared/styles/theme.css';
import { text } from '@/shared/styles/typography.css';

export const result = style({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '12px',
});

export const textItem = style([
  text.sm,
  {
    display: 'flex',
    alignItems: 'center',
    maxWidth: '768px',
    height: '40px',
    padding: '0 18px',
    border: `1px solid ${theme.colors.gray[200]}`,
    borderRadius: '8px',
  },
]);

export const imageItem = style({
  overflow: 'hidden',
  width: '200px',
  maxWidth: '100%',
  borderRadius: '8px',
  aspectRatio: '4 / 3',
});

export const image = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});
