import { type Meta, StoryObj } from '@storybook/react';

import RequestNewGameForm from './request-new-game-form';

const meta: Meta = {
  title: 'Features/RequestNewGame/RequestNewGameForm',
  tags: ['autodocs'],
  component: RequestNewGameForm,
};

export default meta;

type Story = StoryObj<typeof RequestNewGameForm>;

export const Default: Story = {};
