import { style } from '@vanilla-extract/css';

import { text } from '@/shared/styles/typography.css';
import { theme } from '@/shared/styles/theme.css';
import { clampLine } from '@/shared/styles/utils.css';

export const link = style([
  text.base,
  {
    color: theme.colors.gray[900],
    textDecoration: 'none',
  },
]);

export const linkInner = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const leftArea = style({
  display: 'flex',
  flex: 1,
  columnGap: '8px',
});

export const mediaArea = style({
  flexShrink: 0,
  overflow: 'hidden',
  width: '100px',
  borderRadius: '8px',
});

export const mainImage = style({
  display: 'block',
  width: '100px',
  height: '68px',
  objectFit: 'cover',
});

export const descriptionArea = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

export const title = style([clampLine(2)]);

export const rightArea = style({
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
  width: '24px',
});
