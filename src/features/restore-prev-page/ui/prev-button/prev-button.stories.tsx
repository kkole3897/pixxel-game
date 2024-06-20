import type { Meta, StoryObj } from '@storybook/react';

import PrevButton from './prev-button';
import { PrevPageStoreProvider } from '../../lib';

const meta: Meta<typeof PrevButton> = {
  title: 'Features/RestorePrevPage/PrevButton',
  component: PrevButton,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [
    (Story) => {
      return (
        <PrevPageStoreProvider>
          <Story />
        </PrevPageStoreProvider>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof PrevButton>;

export const Example: Story = {};
