import type { Meta, StoryObj } from '@storybook/react';
import GameBox from './game-box';
import GameMainImage from '~/stories/assets/game-main-image.png';

const meta: Meta<typeof GameBox> = {
  title: 'Entities/Game/GameBox',
  component: GameBox,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof GameBox>;

export const RegularGame: Story = {
  args: {
    game: {
      id: 1,
      publicId: '1',
      title: 'Thymesia',
      titleKo: '티메시아',
      type: 'game',
      isFree: false,
      mainImage: GameMainImage.src,
      gameCatalog: [
        {
          id: 1,
          gameId: 1,
          store: 'steam',
          drm: 'steam',
          currentPrice: 50000,
          currentPriceExpireAt: null,
          regularPrice: 50000,
          lowestPrice: 30000,
          salesEndedAt: null,
        },
      ],
    },
  },
};

export const DiscountGame: Story = {
  args: {
    game: {
      id: 1,
      publicId: '1',
      title: 'Thymesia',
      titleKo: '티메시아',
      type: 'game',
      isFree: false,
      mainImage: GameMainImage.src,
      gameCatalog: [
        {
          id: 1,
          gameId: 1,
          store: 'steam',
          drm: 'steam',
          currentPrice: 40000,
          currentPriceExpireAt: null,
          regularPrice: 50000,
          lowestPrice: 30000,
          salesEndedAt: null,
        },
      ],
    },
  },
};

export const LowestGame: Story = {
  args: {
    game: {
      id: 1,
      publicId: '1',
      title: 'Thymesia',
      titleKo: '티메시아',
      type: 'game',
      isFree: false,
      mainImage: GameMainImage.src,
      gameCatalog: [
        {
          id: 1,
          gameId: 1,
          store: 'steam',
          drm: 'steam',
          currentPrice: 30000,
          currentPriceExpireAt: null,
          regularPrice: 50000,
          lowestPrice: 30000,
          salesEndedAt: null,
        },
      ],
    },
  },
};

export const SalesEndedGame: Story = {
  args: {
    game: {
      id: 1,
      publicId: '1',
      title: 'Thymesia',
      titleKo: '티메시아',
      type: 'game',
      isFree: false,
      mainImage: GameMainImage.src,
      gameCatalog: [
        {
          id: 1,
          gameId: 1,
          store: 'steam',
          drm: 'steam',
          currentPrice: 30000,
          currentPriceExpireAt: null,
          regularPrice: 50000,
          lowestPrice: 30000,
          salesEndedAt: '2024-09-01T00:00:00Z',
        },
      ],
    },
  },
};
