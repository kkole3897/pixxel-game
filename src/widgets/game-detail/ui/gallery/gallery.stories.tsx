import { faker } from '@faker-js/faker';
import type { Meta, StoryObj } from '@storybook/react';

import Gallery from './gallery';

const meta: Meta<typeof Gallery> = {
  title: 'Widgets/GameDetail/Gallery',
  component: Gallery,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Gallery>;

function getContents(length: number): { url: string }[] {
  const contents = Array.from({ length }).map(() => {
    return {
      url: faker.image.urlLoremFlickr({
        height: 1080,
        width: 1200,
      }),
    };
  });

  return contents;
}

export const Random: Story = {
  args: {
    name: 'example',
    contents: getContents(10),
  },
};
