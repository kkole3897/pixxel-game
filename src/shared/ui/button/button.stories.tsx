import type { Meta, StoryObj } from '@storybook/react';

import Button from './button';

const meta: Meta = {
  component: Button,
  title: 'Shared/Button',
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
  args: {
    children: '버튼',
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Solid: Story = {};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
  },
};
