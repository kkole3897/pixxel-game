import { faker } from '@faker-js/faker';
import type { Meta, StoryObj } from '@storybook/react';
import GameBox from './game-box';
import type { GamePreview } from '../../model';

const meta: Meta<typeof GameBox> = {
  title: 'Entities/Game/GameBox',
  component: GameBox,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof GameBox>;

function createRandomGame(): GamePreview {
  const regularPrice = faker.number.int({ min: 2000, max: 200000 });
  const currentPrice = faker.number.int({ min: 0, max: regularPrice });
  const lowestPrice = faker.number.int({ min: 0, max: currentPrice });

  return {
    id: faker.number.int(),
    publicId: faker.string.uuid(),
    isFree: false,
    title: faker.commerce.productName(),
    titleKo: faker.commerce.productName(),
    type: 'game',
    mainImage: faker.image.urlLoremFlickr({ width: 640, height: 640 }),
    gameCatalog: [],
  };
}

export const Random: Story = {
  args: {
    game: createRandomGame(),
  },
};
