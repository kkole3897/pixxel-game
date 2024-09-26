import { style } from '@vanilla-extract/css';

import { text } from '@/shared/styles/typography.css';
import { theme } from '@/shared/styles/theme.css';
import { visuallyHidden } from '@/shared/styles/utils.css';

export const formInner = style({
  display: 'flex',
  flexDirection: 'column',
});

export const field = style([
  text.base,
  {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    height: '100%',
  },
]);

export const urlInput = style({
  width: '100%',
  height: '100%',
});

export const submitArea = style({
  flexShrink: 0,
  height: '100%',
});

export const errorMessage = style([
  text.sm,
  {
    marginTop: '4px',
    color: theme.colors.red[800],
    fontWeight: theme.fontWeight.medium,
  },
]);

export const searchArea = style({
  display: 'flex',
  columnGap: '8px',
  height: '40px',
});

export const submitButton = style({
  height: '100%',
  width: '40px',
  padding: 0,
});

export const submitButtonLabel = style([visuallyHidden]);
