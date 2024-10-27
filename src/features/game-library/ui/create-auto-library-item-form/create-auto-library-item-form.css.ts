import { style } from '@vanilla-extract/css';

import { text } from '@/shared/styles/typography.css';
import { theme } from '@/shared/styles/theme.css';

export const field = style({
  selectors: {
    '& + &': {
      marginTop: '16px',
    },
  },
});

export const subField = style({
  marginTop: '4px',
});

export const control = style({
  width: '100%',
});

export const label = style([
  text.base,
  {
    display: 'inline-block',
    marginBottom: '4px',
    fontWeight: theme.fontWeight.medium,
  },
]);

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

export const instanceGroup = style({
  border: `1px solid ${theme.colors.gray[200]}`,
  borderRadius: '8px',

  selectors: {
    '& + &': {
      marginTop: '16px',
    },
  },
});

const instancePaddingX = '16px';

export const instanceHeader = style({
  padding: instancePaddingX,
});

export const instanceContent = style({
  padding: `0 ${instancePaddingX}`,
});

export const instanceFooter = style({
  display: 'flex',
  justifyContent: 'flex-end',
  padding: instancePaddingX,
});

export const instanceLegend = style([
  text.lg,
  {
    fontWeight: theme.fontWeight.semibold,
  },
]);

export const deleteInstanceButton = style({
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

export const addInstanceButtonIcon = style({
  marginRight: '4px',
});

export const requiredMark = style({
  color: theme.colors.red[900],
});

export const errorMessage = style({
  marginTop: '4px',
  color: theme.colors.red[900],
});
