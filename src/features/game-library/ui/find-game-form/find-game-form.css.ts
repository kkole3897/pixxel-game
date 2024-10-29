import { style } from '@vanilla-extract/css';

import { truncate } from '@/shared/styles/utils.css';
import { text } from '@/shared/styles/typography.css';
import { theme } from '@/shared/styles/theme.css';

export const searchComboboxControl = style({
  width: '100%',
});

export const searchComboboxInput = style({
  width: '100%',
});

export const searchComboboxItemInner = style({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
});

export const searchComboboxItemMediaArea = style({});

export const searchComboboxItemMainImage = style({
  width: '75px',
  height: '60px',
  objectFit: 'cover',
});

export const searchComboboxItemTitle = style([
  truncate(),
  {
    flex: 1,
    padding: '0 8px',
  },
]);

export const emptySuggestedGames = style([
  text.base,
  {
    padding: '4px 12px',
    color: theme.colors.gray[900],
    fontWeight: theme.fontWeight.medium,
  },
]);
