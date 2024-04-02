import React from 'react';
import type { Preview } from '@storybook/react';

import '../src/app/styles/globals.css';
import { base, serif } from '../src/app/fonts';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <div className={`${base.className} ${serif.className}`}>
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
