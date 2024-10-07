import type { Meta, StoryObj } from '@storybook/react';

import Megaphone from './megaphone';

const meta: Meta = {
  title: 'Shared/Lottie/Megaphone',
  component: Megaphone,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Megaphone>;

export const Default: Story = {
  args: {},
};
