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
    src: AvatarImage.src,
    alt: '테스트 유저',
    size: 48,
  },
};
