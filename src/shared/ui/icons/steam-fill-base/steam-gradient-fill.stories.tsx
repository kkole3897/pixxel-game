import type { Meta, StoryObj } from '@storybook/react';

import SteamFillBase from './steam-fill-base';

const meta: Meta<typeof SteamFillBase> = {
  title: 'Shared/Icons/SteamFillBase',
  component: SteamFillBase,
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

type Story = StoryObj<typeof SteamFillBase>;

export const Default: Story = {};
