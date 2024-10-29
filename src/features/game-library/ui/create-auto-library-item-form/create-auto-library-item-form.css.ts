import { style } from '@vanilla-extract/css';

import { theme } from '@/shared/styles/theme.css';

export const subField = style({
  marginTop: '4px',
});

export const checkboxGroup = style({
  display: 'flex',
  alignItems: 'center',
  columnGap: '4px',
});

export const actionArea = style({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '24px',
});

export const selectTrigger = style({
  height: '40px',
});

export const deletePlayRecordButton = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  padding: 0,
  borderRadius: '8px',
  color: theme.colors.gray[700],

  selectors: {
    '&:hover': {
      backgroundColor: theme.colors.gray[100],
    },
  },
});

export const addPlayRecordButtonIcon = style({
  marginRight: '4px',
});

export const checkboxControl = style({
  width: '16px',
});

export const checkboxLabel = style({
  margin: 0,
  fontSize: theme.fontSize.sm,
  fontWeight: theme.fontWeight.regular,
  lineHeight: theme.lineHeight.sm,
});
