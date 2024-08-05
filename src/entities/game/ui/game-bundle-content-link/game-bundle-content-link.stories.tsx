import type { Meta, StoryObj } from '@storybook/react';

import GameBundleContentLink from './game-bundle-content-link';
import mainImage from '~/stories/assets/game-main-image.png';

const meta: Meta = {
  title: 'Entities/Game/GameBundleContentLink',
  component: GameBundleContentLink,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof GameBundleContentLink>;

export const Thymesia: Story = {
  args: {
    content: {
      title: 'Thymesia',
      titleKo: '티메시아',
      mainImage: mainImage.src,
      publicId: 'publicId',
      isFree: false,
      gameCatalog: [
        {
          currentPrice: 10000,
          regularPrice: 20000,
          currentPriceExpireAt: null,
        },
      ],
    },
  },
};

export const FreeGame: Story = {
  args: {
    content: {
      title: 'Free Game',
      titleKo: '무료 게임',
      mainImage: mainImage.src,
      publicId: 'publicId',
      isFree: true,
      gameCatalog: [],
    },
  },
};

export const NoPrice: Story = {
  args: {
    content: {
      title: 'No Price',
      titleKo: '가격 없음',
      mainImage: mainImage.src,
      publicId: 'publicId',
      isFree: false,
      gameCatalog: [],
    },
  },
};
