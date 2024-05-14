import type { Meta, StoryObj } from '@storybook/react';

import Checkbox from './checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Shared/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Example: Story = {};
