import type { Meta, StoryObj } from '@storybook/react';

import AutoLibraryLink from './auto-library-link';

const meta: Meta = {
  title: 'Features/GameLibrary/LibraryWriteTypeLink/AutoLibraryLink',
  component: AutoLibraryLink,
  tags: ['autodoc'],
};

export default meta;

type Story = StoryObj<typeof AutoLibraryLink>;

export const Default: Story = {};
