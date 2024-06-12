import type { Meta, StoryObj } from '@storybook/react';

import GamePreviewCard, {
  type GamePreviewCardProps,
} from './game-preview-card';
import mainImage from './assets/main.jpg';

const meta: Meta<typeof GamePreviewCard> = {
  title: 'Entities/Game/GamePreviewCard',
  component: GamePreviewCard,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof GamePreviewCard>;

const gamePreview: GamePreviewCardProps['gamePreview'] = {
  id: 1,
  title: 'Game Name',
  titleKo:
    '게임 이름게임 이름게임 이름게임 이름게임 이름게임 이름게임 이름게임 이름게임 이름게임 이름게임 이름게임 이름게임 이름게임 이름게임 이름게임 이름게임 이름게임 이름게임 이름게임 이름게임 이름게임 이름게임 이름게임 이름게임 이름게임 이름게임 이름게임 이름게임 이름게임 이름게임 이름게임 이름게임 이름게임 이름게임 이름게임 이름게임 이름게임 이름게임 이름게임 이름게임 이름게임 이름게임 이름게임 이름게임 이름게임 이름게임 이름',
  mainImage: mainImage.src,
  type: 'game',
  isFree: false,
  publicId: '123',
  gameCatalog: [],
};

export const Default: Story = {
  args: {
    gamePreview,
  },
};
