import type { Meta, StoryObj } from '@storybook/react';

import GamePreviewCardSkeleton from './game-preview-card-skeleton';

const meta: Meta<typeof GamePreviewCardSkeleton> = {
  title: 'Entities/Game/GamePreviewCardSkeleton',
  component: GamePreviewCardSkeleton,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof GamePreviewCardSkeleton>;

export const Example: Story = {};
