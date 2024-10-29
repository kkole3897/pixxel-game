import type { Meta, StoryObj } from '@storybook/react';

import Textarea from './textarea';

const meta: Meta = {
  title: 'Shared/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {
        type: 'radio',
        options: ['md', 'lg'],
      },
    },
    isInvalid: {
      control: {
        type: 'boolean',
      },
    },
    placeholder: {
      control: {
        type: 'text',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    value: {
      control: {
        type: 'text',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {};
