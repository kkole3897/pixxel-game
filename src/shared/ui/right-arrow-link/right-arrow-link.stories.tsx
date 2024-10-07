import type { Meta, StoryObj } from '@storybook/react';

import RightArrowLink from './right-arrow-link';

const meta: Meta = {
  title: 'Shared/RightArrowLink',
  component: RightArrowLink,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof RightArrowLink>;

export const Default: Story = {
  args: {
    children: '링크',
    href: '/',
  },
};
