import { type Meta, StoryObj } from '@storybook/react';

import CheckRequestNewGameForm from './check-request-new-game-form';

const meta: Meta = {
  title: 'Features/RequestNewGame/CheckRequestNewGameForm',
  tags: ['autodocs'],
  component: CheckRequestNewGameForm,
};

export default meta;

type Story = StoryObj<typeof CheckRequestNewGameForm>;

export const Default: Story = {};
