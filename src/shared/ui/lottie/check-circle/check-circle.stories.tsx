import type { Meta, StoryObj } from '@storybook/react';

import CheckCircle from './check-circle';

const meta: Meta = {
  title: 'Shared/Lottie/CheckCircle',
  component: CheckCircle,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CheckCircle>;

export const Default: Story = {
  args: {},
};
