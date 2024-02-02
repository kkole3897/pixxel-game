import { globalStyle } from '@vanilla-extract/css';

globalStyle('html, body', {
  '@layer': {
    base: {
      minHeight: '100%',
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
