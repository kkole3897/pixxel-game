import type { Meta, StoryObj } from '@storybook/react';

import GenreBadge from './genre-badge';

const meta: Meta<typeof GenreBadge> = {
  title: 'Entities/Game/GenreBadge',
  component: GenreBadge,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof GenreBadge>;

export const Base: Story = {
  args: {
    genre: 'action',
  },
};
