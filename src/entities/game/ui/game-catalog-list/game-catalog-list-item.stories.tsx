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
  store: 'steam',
  drm: 'steam',
  regularPrice: 27800,
  currentPrice: 13900,
  currentPriceExpireAt: '2024-06-28T00:00:00+09:00',
  salesEndedAt: null,
};

export const Default: Story = {
  args: {
    item: gameCatalogItem,
  },
};
