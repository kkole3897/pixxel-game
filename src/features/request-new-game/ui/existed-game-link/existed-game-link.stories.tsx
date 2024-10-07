import type { Meta, StoryObj } from '@storybook/react';

import ExistedGameLink from './existed-game-link';
import GameMainImage from '~/stories/assets/game-main-image.png';

const meta: Meta = {
  title: 'Features/RequestNewGame/ExistedGameLink',
  component: ExistedGameLink,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ExistedGameLink>;

export const Default: Story = {
  args: {
    game: {
      publicId: 'dkafj09eu3jidkjfae-03dj',
      title: 'Thymesia',
      titleKo: '티메시아',
      mainImage: GameMainImage.src,
    },
  },
};

export const EmtpyImage: Story = {
  args: {
    game: {
      publicId: 'dkafj09eu3jidkjfae-03dj',
      title: 'Thymesia',
      titleKo: '티메시아',
      mainImage: null,
    },
  },
};

export const TruncatedTitle: Story = {
  args: {
    game: {
      publicId: 'dkafj09eu3jidkjfae-03dj',
      title: 'Thymesia: The Dark Souls of Dark Souls',
      titleKo:
        '티메시아: 다크 소울즈의 다크 소울즈 티메시아: 다크 소울즈의 다크 소울즈 티메시아: 다크 소울즈의 다크 소울즈 티메시아: 다크 소울즈의 다크 소울즈 티메시아: 다크 소울즈의 다크 소울즈 티메시아: 다크 소울즈의 다크 소울즈 티메시아: 다크 소울즈의 다크 소울즈 티메시아: 다크 소울즈의 다크 소울즈 티메시아: 다크 소울즈의 다크 소울즈 티메시아: 다크 소울즈의 다크 소울즈',
      mainImage: GameMainImage.src,
    },
  },
};
