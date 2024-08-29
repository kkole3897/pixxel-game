import { globalStyle } from '@vanilla-extract/css';

import { reset } from '@/shared/styles/layer.css';

/* http://meyerweb.com/eric/tools/css/reset/
  v2.0 | 20110126
  License: none (public domain)
*/

globalStyle(
  `
  html,body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video
`,
  {
    '@layer': {
      [reset]: {
        margin: 0,
        padding: 0,
        border: 0,
        fontSize: '100%',
        font: 'inherit',
        verticalAlign: 'baseline',
      },
    },
  }
);

globalStyle(
  `
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section
`,
  {
    '@layer': {
      [reset]: {
        display: 'block',
      },
    },
  }
);

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
});

globalStyle('html', {
  '@layer': {
    [reset]: {
      textSizeAdjust: '100%',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
    },
  },
});

globalStyle('html, body', {
  '@layer': {
    [reset]: {
      height: '100%',
    },
  },
});

globalStyle('body', {
  '@layer': {
    [reset]: {
      lineHeight: 1,
    },
  },
});

globalStyle('ol, ul', {
  '@layer': {
    [reset]: {
      listStyle: 'none',
    },
  },
});

globalStyle('blockquote, q', {
  '@layer': {
    [reset]: {
      quotes: 'none',
    },
  },
});

globalStyle(
  `
  blockquote:before, blockquote:after,
  q:before, q:after
`,
  {
    '@layer': {
      [reset]: {
        content: '',
      },
    },
  }
);

globalStyle(
  `
  blockquote:before, blockquote:after,
  q:before, q:after
`,
  {
    '@layer': {
      [reset]: {
        content: 'none',
      },
    },
  }
);

globalStyle('table', {
  '@layer': {
    [reset]: {
      borderCollapse: 'collapse',
      borderSpacing: 0,
    },
  },
});

globalStyle('img', {
  '@layer': {
    [reset]: {
      verticalAlign: 'top',
    },
  },
});
