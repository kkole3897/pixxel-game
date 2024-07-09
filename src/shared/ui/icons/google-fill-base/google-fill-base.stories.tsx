import type { Meta, StoryObj } from '@storybook/react';

import GoogleFillBase from './google-fill-base';

const meta: Meta<typeof GoogleFillBase> = {
  title: 'Shared/Icons/GoogleFillBase',
  component: GoogleFillBase,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'number',
      description: '아이콘 크기, 정방형으로 조절 가능',
      table: {
        defaultValue: {
          summary: '24',
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof GoogleFillBase>;

export const Example: Story = {};
