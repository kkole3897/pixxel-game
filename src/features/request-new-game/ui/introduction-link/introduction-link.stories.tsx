import type { Meta, StoryObj } from '@storybook/react';

import IntroductionLink from './introductoin-link';

const meta: Meta = {
  title: 'Features/RequestNewGame/IntroductionLink',
  component: IntroductionLink,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof IntroductionLink>;

export const Default: Story = {};
