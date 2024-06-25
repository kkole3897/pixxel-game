import { style } from '@vanilla-extract/css';

import { theme } from '@/shared/styles/theme.css';

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const avatar = style({
  marginBottom: '32px',
});

export const descriptionArea = style({
  overflow: 'hidden',
  width: '100%',
  maxWidth: '480px',
  border: `1px solid ${theme.colors.gray[100]}`,
  borderRadius: '8px',

  selectors: {
    '& + &': {
      marginTop: '16px',
    },
  },
});

export const descriptionCell = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  columnGap: '4px',
  width: '100%',
  padding: '16px',

  selectors: {
    '& + &': {
      borderTop: `1px solid ${theme.colors.gray[100]}`,
    },
  },
});

export const descriptionCellTitle = style({
  fontWeight: theme.fontWeight.semibold,
});

export const descriptionCellValue = style({
  color: theme.colors.gray[700],
});
