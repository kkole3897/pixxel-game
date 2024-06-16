import type { Meta, StoryObj } from '@storybook/react';

import EpicFill from './epic-fill';

const meta: Meta<typeof EpicFill> = {
  title: 'Shared/Icons/EpicFill',
  component: EpicFill,
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
    color: {
      control: 'color',
      description: '아이콘 색상',
      table: {
        defaultValue: {
          summary: '#000000',
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof EpicFill>;

export const Default: Story = {
  args: {
    size: 24,
    color: '#000000',
  },
};
