import type { Meta, StoryObj } from '@storybook/react';

import Input from './input';

const meta: Meta<typeof Input> = {
  title: 'Shared/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    size: {
      control: { type: 'select' },
      options: ['lg', 'md'],
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    isInvalid: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: '입력해주세요',
  },
};
export const Large: Story = {
  args: {
    placeholder: '입력해주세요',
    size: 'lg',
  },
};
export const Invalid: Story = {
  args: {
    placeholder: '입력해주세요',
    isInvalid: true,
  },
};
export const Disabled: Story = {
  args: {
    placeholder: '입력해주세요',
    disabled: true,
  },
};
