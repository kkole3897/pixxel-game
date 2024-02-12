import { globalStyle } from '@vanilla-extract/css';

globalStyle('html, body', {
  '@layer': {
    base: {
      height: '100%',
    },
  },
});

globalStyle('body, input, textarea, select, button', {
  '@layer': {
    base: {
      fontFamily: 'var(--font-base)',
      fontSize: '0.875rem',
    },
  },
});

globalStyle('.page', {
  '@layer': {
    base: {
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
    base: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
    },
  },
})
