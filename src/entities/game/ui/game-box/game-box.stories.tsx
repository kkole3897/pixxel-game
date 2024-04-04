import { faker } from '@faker-js/faker';
import type { Meta, StoryObj } from '@storybook/react';
import GameBox from './game-box';
import type { Game } from '../../model';

const meta: Meta<typeof GameBox> = {
  title: 'Entities/Game/GameBox',
  component: GameBox,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof GameBox>;

function createRandomGame(): Game {
  const regularPrice = faker.number.int({ min: 2000, max: 200000 });
  const currentPrice = faker.number.int({ min: 0, max: regularPrice });
  const lowestPrice = faker.number.int({ min: 0, max: currentPrice });

  return {
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    defaultName: faker.commerce.productName(),
    type: 'game',
    genres: [],
    tags: [],
    releaseDate: faker.date.past({ years: 5 }).toString(),
    thumbnail: faker.image.urlLoremFlickr({ width: 640, height: 640 }),
    storeInfo: {
      steam: {
        storeId: faker.string.uuid(),
        releaseDate: faker.date.past({ years: 5 }).toString(),
        url: faker.internet.url(),
        price: {
          regular: regularPrice,
          current: currentPrice,
          lowest: lowestPrice,
        },
      },
    },
  };
}

export const Random: Story = {
  args: {
    game: createRandomGame(),
  },
};
