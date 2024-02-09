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
      maxWidth: '768px',
      minHeight: '100%',
      margin: '0 auto',
    },
  },
});

