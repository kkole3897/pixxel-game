import type { Meta, StoryObj } from '@storybook/react';

import SelectGameResult from './select-game-result';

const meta: Meta = {
  title: 'Features/GameLibrary/SelectGameResult',
  component: SelectGameResult,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SelectGameResult>;

export const Default: Story = {
  args: {
    game: {
      publicId: 'public_id_1',
      title: '엘든링',
      titleKo: '엘든링',
      mainImage: null,
    },
  },
};
