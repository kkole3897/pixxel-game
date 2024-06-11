import type { Meta, StoryObj } from '@storybook/react';

import EpicFillBase from './epic-fill-base';

const meta: Meta<typeof EpicFillBase> = {
  title: 'Shared/Icons/EpicFillBase',
  component: EpicFillBase,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'number',
      description: '아이콘 크기, 정방형으로 조절 가능',
      table: {
        defaultValue: {
          summary: 24,
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof EpicFillBase>;

export const Default: Story = {};
