import { style } from '@vanilla-extract/css';

import { text } from '@/shared/styles/typography.css';

export const paragraph = style([
  text.base,
  {
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
    whiteSpace: 'pre-wrap',
  },
]);
