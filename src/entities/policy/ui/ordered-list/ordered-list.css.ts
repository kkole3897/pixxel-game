import { style } from '@vanilla-extract/css';

import { text } from '@/shared/styles/typography.css';

export const orderedList = style([
  text.base,
  {
    marginBlockStart: '0.6rem',
    marginBlockEnd: '0.6rem',
    paddingInlineStart: '1.6rem',
    listStyleType: 'decimal',

    selectors: {
      '& &': {
        listStyleType: 'lower-alpha',
      },
      '& & &': {
        listStyleType: 'lower-roman',
      },
    },
  },
]);

export const orderedListItem = style([
  text.base,
  {
    marginBlockStart: '0.6rem',
    marginBlockEnd: '0.6rem',
    paddingLeft: '0.2rem',
  },
]);
