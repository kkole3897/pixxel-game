import { style } from '@vanilla-extract/css';

import { theme } from '@/shared/styles/theme.css';
export { visuallyHidden } from '@/shared/styles/utils.css';

export const fileUpload = style({
  position: 'relative',
  width: '180px',
  height: '180px',
  borderRadius: '8px',
});

export const trigger = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  inset: 0,
  padding: 0,
  border: 0,
  borderRadius: '8px',
  backgroundColor: 'transparent',
  cursor: 'pointer',
});

export const item = style({
  position: 'relative',
  borderRadius: '8px',
  selectors: {
    '&:before': {
      content: '',
      position: 'absolute',
      inset: 0,
      border: '1px solid rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
    },
  },
});

export const image = style({
  borderRadius: '8px',
  objectFit: 'cover',
});

export const iconArea = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  borderRadius: '8px',
  backgroundColor: theme.colors.gray[100],
  color: theme.colors.gray[400],
});

export const deleteItemTrigger = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: '8px',
  right: '8px',
  width: '24px',
  height: '24px',
  padding: 0,
  border: 0,
  borderRadius: '50%',
  backgroundColor: theme.colors.gray[500],
  color: '#fff',
  cursor: 'pointer',
});
