import type { Meta, StoryObj } from '@storybook/react';

import BaseLink from './base-link';

const meta: Meta = {
  title: 'Features/GameLibrary/LibraryWriteTypeLink/BaseLink',
  component: BaseLink,
  tags: ['autodoc'],
};

export default meta;

type Story = StoryObj<typeof BaseLink>;

export const Default: Story = {
  args: {
    href: '/',
    children: 'Link',
  },
};
