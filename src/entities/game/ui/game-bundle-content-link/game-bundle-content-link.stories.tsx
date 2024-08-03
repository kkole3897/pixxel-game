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

export const BioShock: Story = {
  args: {
    game: {
      title: 'Thymesia',
      titleKo: '티메시아',
      mainImage: mainImage.src,
      price: 10000,
      publicId: 'publicId',
    },
  },
};
