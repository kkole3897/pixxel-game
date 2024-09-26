import type { Meta, StoryObj } from '@storybook/react';

import SpinnerRing180 from './spinner-ring-180';

const meta: Meta = {
  title: 'Shared/Icons/SpinnerRing180',
  component: SpinnerRing180,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SpinnerRing180>;

export const Default: Story = {};

export const Red: Story = {
  args: {
    color: 'red',
  },
};
