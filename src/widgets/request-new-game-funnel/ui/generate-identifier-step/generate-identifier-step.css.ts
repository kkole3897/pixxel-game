import { style } from '@vanilla-extract/css';

import { text } from '@/shared/styles/typography.css';

export const container = style({
  padding: '24px 8px',
});

export const guideArea = style([
  text.base,
  {
    marginBottom: '16px',
  },
]);

export const result = style({
  marginTop: '16px',
});
