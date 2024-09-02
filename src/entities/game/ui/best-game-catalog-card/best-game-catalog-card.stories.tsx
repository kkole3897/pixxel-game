import type { Meta, StoryObj } from '@storybook/react';

import BestGameCatalog, {
  type BestGameCatalogCardProps,
} from './best-game-catalog-card';
import mainImage from '~/stories/assets/game-main-image.png';

const meta: Meta<typeof BestGameCatalog> = {
  title: 'Entities/Game/BestGameCatalogCard',
  component: BestGameCatalog,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof BestGameCatalog>;

const regularGame: BestGameCatalogCardProps['game'] = {
  id: 1,
  publicId: '1234',
  type: 'game',
  title: 'Thumesia',
  titleKo: '티메시아',
  mainImage: mainImage.src,
  releaseYear: 2024,
  releaseMonth: 6,
  releaseDay: 15,
  gameCatalog: {
    id: 1,
    gameId: 1,
    url: 'https://store.steampowered.com/app/1343240/Thymesia/',
    store: 'steam',
    drm: 'steam',
    regularPrice: 27800,
    currentPrice: 13900,
    currentPriceExpireAt: '2024-05-28T00:00:00+09:00', // 실제로는 utc 0 기준
    salesEndedAt: null,
  },
  baseGame: null,
};

export const Regular: Story = {
  args: {
    game: regularGame,
  },
};

const discountGame: BestGameCatalogCardProps['game'] = {
  id: 1,
  publicId: '1234',
  type: 'game',
  title: 'Thumesia',
  titleKo: '티메시아',
  mainImage: mainImage.src,
  releaseYear: 2024,
  releaseMonth: 6,
  releaseDay: 15,
  gameCatalog: {
    id: 1,
    gameId: 1,
    url: 'https://store.steampowered.com/app/1343240/Thymesia/',
    store: 'steam',
    drm: 'steam',
    regularPrice: 27800,
    currentPrice: 13900,
    currentPriceExpireAt: '2024-06-28T00:00:00+09:00', // 실제로는 utc 0 기준
    salesEndedAt: null,
  },
  baseGame: null,
};

export const Discount: Story = {
  args: {
    game: discountGame,
  },
};

const unknownGame: BestGameCatalogCardProps['game'] = {
  id: 1,
  publicId: '1234',
  type: 'game',
  title: 'Thumesia',
  titleKo: '티메시아',
  mainImage: mainImage.src,
  releaseYear: null,
  releaseMonth: null,
  releaseDay: null,
  gameCatalog: {
    id: 1,
    gameId: 1,
    url: 'https://store.steampowered.com/app/1343240/Thymesia/',
    store: 'steam',
    drm: 'steam',
    regularPrice: null,
    currentPrice: null,
    currentPriceExpireAt: null, // 실제로는 utc 0 기준
    salesEndedAt: null,
  },
  baseGame: null,
};

export const Unknown: Story = {
  args: {
    game: unknownGame,
  },
};

const dlcGame: BestGameCatalogCardProps['game'] = {
  id: 1,
  publicId: '1234',
  type: 'dlc',
  title: 'Thumesia - DLC',
  titleKo: '티메시아 - DLC',
  mainImage: mainImage.src,
  releaseYear: 2024,
  releaseMonth: 6,
  releaseDay: 15,
  gameCatalog: {
    id: 1,
    gameId: 1,
    url: 'https://store.steampowered.com/app/1343240/Thymesia/',
    store: 'steam',
    drm: 'steam',
    regularPrice: 27800,
    currentPrice: 13900,
    currentPriceExpireAt: '2024-06-28T00:00:00+09:00', // 실제로는 utc 0 기준
    salesEndedAt: null,
  },
  baseGame: {
    id: 2,
    publicId: '12345',
    title: 'Thumesia',
    titleKo: '티메시아',
  },
};

export const DLC: Story = {
  args: {
    game: dlcGame,
  },
};

const salesEndedGame: BestGameCatalogCardProps['game'] = {
  id: 1,
  publicId: '1234',
  type: 'game',
  title: 'Thumesia',
  titleKo: '티메시아',
  mainImage: mainImage.src,
  releaseYear: 2024,
  releaseMonth: 6,
  releaseDay: 15,
  gameCatalog: {
    id: 1,
    gameId: 1,
    url: 'https://store.steampowered.com/app/1343240/Thymesia/',
    store: 'steam',
    drm: 'steam',
    regularPrice: 27800,
    currentPrice: 13900,
    currentPriceExpireAt: '2024-05-28T00:00:00+09:00', // 실제로는 utc 0 기준
    salesEndedAt: '2024-05-30T00:00:00+09:00',
  },
  baseGame: null,
};

export const SalesEnded: Story = {
  args: {
    game: salesEndedGame,
  },
};
