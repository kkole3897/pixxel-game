import { globalStyle } from '@vanilla-extract/css';

import { base } from '@/shared/styles/layer.css';
import { theme } from '@/shared/styles/theme.css';

globalStyle('html, body', {
  '@layer': {
    [base]: {
      height: '100%',
    },
  },
});

globalStyle('body, input, textarea, select, button', {
  '@layer': {
    [base]: {
      fontFamily: 'var(--font-base)',
      fontSize: theme.fontSize.sm,
      fontWeight: theme.fontWeight.regular,
      lineHeight: theme.lineHeight.sm,
    },
  },
});

globalStyle('.page', {
  '@layer': {
    [base]: {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '768px',
      minWidth: '280px',
      minHeight: '100%',
      margin: '0 auto',
    },
  },
});

globalStyle('.layout', {
  '@layer': {
    [base]: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
    },
  },
});
