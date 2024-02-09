import { faker } from "@faker-js/faker";

import type { AppPreview } from '@/app/types';

export function getGames() {
  function createRandomGame(): AppPreview {
    const regularPrice = faker.number.int({ min: 2000, max: 200000 });
    const discountPrice = faker.number.int({ min: 0, max: regularPrice });
    const lowestPrice = faker.number.int({ min: 0, max: discountPrice });
  
    return {
      id: faker.string.uuid(),
      name: faker.commerce.productName(),
      type: "game",
      genres: [
        { id: '1', description: '액션' },
        { id: '2', description: '어드벤처' },
      ],
      releaseDate: faker.date.past({ years: 5 }).toString(),
      thumbnail: faker.image.urlLoremFlickr({ width: 640, height: 640 }),
      prices: [
        { store: 'steam', regular: regularPrice, discount: discountPrice, lowest: lowestPrice }
      ],
      purchases: [
        { store: 'steam', url: faker.internet.url() }
      ],
    };
  }

  const games = Array(10).fill(0).map(() => createRandomGame());

  return games;
}
