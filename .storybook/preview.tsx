import React from 'react';
import type { Preview } from '@storybook/react';
import cn from 'classnames';

import '../src/app/styles/globals.css';
import { base, serif } from '../src/shared/fonts/fonts';

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
        <div className={cn(base.className, base.variable, serif.variable)}>
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
