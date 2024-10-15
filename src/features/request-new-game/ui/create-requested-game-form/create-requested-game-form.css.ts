import { style } from '@vanilla-extract/css';

import { text } from '@/shared/styles/typography.css';
import { theme } from '@/shared/styles/theme.css';

export const formInner = style({
  width: '100%',
  margin: '0 auto',
});

export const field = style({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '4px',

  selectors: {
    '& + &': {
      marginTop: '8px',
    },
  },
});

export const label = style([text.base]);

export const fieldHelperText = style({
  color: theme.colors.gray[500],
});

export const submitArea = style({
  marginTop: '32px',
});

export const submitButton = style({
  width: '100%',
});

export const noticeBox = style([
  text.base,
  {
    display: 'flex',
    margin: '16px 0 32px',
    padding: '8px 12px',
    borderRadius: '6px',
    backgroundColor: theme.colors.sky[100],
    color: theme.colors.sky[950],
  },
]);

export const noticeLink = style({
  color: theme.colors.blue[600],
  textDecoration: 'underline',
});

export const noticeText = style({
  wordBreak: 'break-word',
});

export const errorMessage = style({
  marginTop: '4px',
  color: theme.colors.red[900],
});
