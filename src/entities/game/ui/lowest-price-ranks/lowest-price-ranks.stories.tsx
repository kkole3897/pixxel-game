import type { Meta, StoryObj } from '@storybook/react';

import LowestPriceRanks from './lowest-price-ranks';
import LowestPriceRankItem, {
  type LowestPriceRankItemProps,
} from './lowest-price-rank-item';

const meta: Meta<typeof LowestPriceRanks> = {
  title: 'Entities/Game/LowestPriceRanks',
  component: LowestPriceRanks,
  tags: ['!autodocs'],
};

export default meta;

type Story = StoryObj<typeof LowestPriceRanks>;

const data: LowestPriceRankItemProps['record'][] = [
  {
    currentPrice: 0,
    startAt: '2024-06-16T00:00:00+09:00',
    gameCatalog: { store: 'steam' },
  },
  {
    currentPrice: 10000,
    startAt: '2024-06-13T00:00:00+09:00',
    gameCatalog: { store: 'steam' },
  },
];

export const Example: Story = {
  render() {
    return (
      <LowestPriceRanks>
        {data.map((record, index) => (
          <LowestPriceRankItem key={index} record={record} />
        ))}
      </LowestPriceRanks>
    );
  },
};
