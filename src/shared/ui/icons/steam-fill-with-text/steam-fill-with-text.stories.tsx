import type { Meta, StoryObj } from '@storybook/react';

import SteamFillWithText from './steam-fill-with-text';

const meta: Meta<typeof SteamFillWithText> = {
  title: 'Shared/Icons/SteamFillWithText',
  component: SteamFillWithText,
  tags: ['autodocs'],
  argTypes: {
    scaleBy: {
      control: 'radio',
      options: ['width', 'height'],
      table: {
        defaultValue: {
          summary: 'width',
        },
      },
    },
    width: {
      control: 'number',
      description: '아이콘 너비 조절',
      table: {
        defaultValue: {
          summary: '192',
        },
      },
    },
    height: {
      control: 'number',
      description: '아이콘 너비 조절',
      table: {
        defaultValue: {
          summary: '58',
        },
      },
    },
    color: {
      control: 'color',
      description: '아이콘 색상 조절',
      table: {
        defaultValue: {
          summary: '#231F20',
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof SteamFillWithText>;

export const Default: Story = {
  args: {
    width: 192,
    color: '#231F20',
    scaleBy: 'width',
  },
};
