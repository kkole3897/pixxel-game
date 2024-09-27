import type { Meta, StoryObj } from '@storybook/react';

import LoadingDialog from './loading-dialog';

const meta: Meta = {
  title: 'Shared/LoadingDialog',
  component: LoadingDialog,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof LoadingDialog>;

export const Default: Story = {
  args: {
    open: true,
  },
};
