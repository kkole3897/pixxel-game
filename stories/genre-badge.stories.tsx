import type { Meta, StoryObj } from '@storybook/react';

import { GenreBadge } from "@/app/games/components/genre-badge";

const meta: Meta<typeof GenreBadge> = {
  component: GenreBadge,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof GenreBadge>;

export const Base: Story = {
  args: {
    label: '액션',
  },
};
