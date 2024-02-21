import { faker } from '@faker-js/faker';
import type { Meta, StoryObj } from '@storybook/react';
import { GameBox } from '@/app/components/game-box';
import type { AppPreview } from '@/app/types';

const meta: Meta<typeof GameBox> = {
  component: GameBox,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof GameBox>;

function createRandomGame(): AppPreview {
  const regularPrice = faker.number.int({ min: 2000, max: 200000 });
  const discountPrice = faker.number.int({ min: 0, max: regularPrice });
  const lowestPrice = faker.number.int({ min: 0, max: discountPrice });

  return {
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    type: 'game',
    genres: [
      { id: '1', description: '액션' },
      { id: '2', description: '어드벤처' },
    ],
    releaseDate: faker.date.past({ years: 5 }).toString(),
    thumbnail: faker.image.urlLoremFlickr({ width: 640, height: 640 }),
    prices: [
      {
        store: 'steam',
        regular: regularPrice,
        discount: discountPrice,
        lowest: lowestPrice,
      },
    ],
    purchases: [{ store: 'steam', url: faker.internet.url() }],
  };
}

export const Random: Story = {
  args: {
    game: createRandomGame(),
  },
};
