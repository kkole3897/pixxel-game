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

const emptyCatalog: GamePreviewCardProps['gamePreview'] = {
  id: 1,
  title: 'Thymesia',
  titleKo: '티메시아',
  mainImage: mainImage.src,
  type: 'game',
  isFree: false,
  publicId: '123',
  gameCatalog: [],
};

export const Default: Story = {
  args: {
    gamePreview: emptyCatalog,
  },
};

const bestSteamCatalog: GamePreviewCardProps['gamePreview'] = {
  id: 1,
  title: 'Thymesia',
  titleKo: '티메시아',
  mainImage: mainImage.src,
  type: 'game',
  isFree: false,
  publicId: '123',
  gameCatalog: [
    {
      id: 1,
      gameId: 1,
      store: 'steam',
      drm: 'steam',
      currentPrice: 3000,
      currentPriceExpireAt: '2021-01-01T00:00:00+09:00',
      lowestPrice: 10000,
      regularPrice: 10000,
    },
  ],
};

export const Steam: Story = {
  args: {
    gamePreview: bestSteamCatalog,
  },
};

const bestEpicCatalog: GamePreviewCardProps['gamePreview'] = {
  id: 1,
  title: 'Thymesia',
  titleKo: '티메시아',
  mainImage: mainImage.src,
  type: 'game',
  isFree: false,
  publicId: '123',
  gameCatalog: [
    {
      id: 1,
      gameId: 1,
      store: 'epic',
      drm: 'epic',
      currentPrice: 3000,
      currentPriceExpireAt: '2031-01-01T00:00:00+09:00',
      lowestPrice: 3000,
      regularPrice: 10000,
    },
  ],
};

export const Epic: Story = {
  args: {
    gamePreview: bestEpicCatalog,
  },
};
