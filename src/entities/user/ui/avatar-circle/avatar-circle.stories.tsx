import type { Meta, StoryObj } from '@storybook/react';

import AvatarCircle from './avatar-circle';
import AvatarImage from './assets/avatar-sample.jpg';

const meta: Meta<typeof AvatarCircle> = {
  title: 'Entities/User/AvatarCircle',
  component: AvatarCircle,
  argTypes: {
    size: {
      control: 'number',
      table: {
        defaultValue: { summary: '48' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof AvatarCircle>;

export const Example: Story = {
  args: {
    user: {
      avatarUrl: AvatarImage.src,
      name: '테스트',
    },
    size: 48,
  },
};
