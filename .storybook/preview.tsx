import React from 'react';
import type { Preview } from '@storybook/react';
import cn from 'classnames';

import '../src/app/styles/globals.css';
import { base, serif } from '../src/shared/fonts/fonts';

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
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
