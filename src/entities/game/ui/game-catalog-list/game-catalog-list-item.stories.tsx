import type { Meta, StoryObj } from '@storybook/react';

import GameCatalogListItem, {
  type GameCatalogListItemProps,
} from './game-catalog-list-item';

const meta: Meta<typeof GameCatalogListItem> = {
  title: 'Entities/Game/GameCatalogListItem',
  component: GameCatalogListItem,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof GameCatalogListItem>;

const gameCatalogItem: GameCatalogListItemProps['item'] = {
  url: 'https://store.steampowered.com/app/1343240/Thymesia/?l=koreana',
  store: 'steam',
  drm: 'steam',
  regularPrice: 27800,
  currentPrice: 13900,
  currentPriceExpireAt: '2024-06-28T00:00:00+09:00',
};

export const Default: Story = {
  args: {
    item: gameCatalogItem,
  },
};
