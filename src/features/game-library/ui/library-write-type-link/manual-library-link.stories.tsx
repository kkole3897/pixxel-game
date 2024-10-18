import type { Meta, StoryObj } from '@storybook/react';

import ManualLibraryLink from './manual-library-link';

const meta: Meta = {
  title: 'Features/GameLibrary/LibraryWriteTypeLink/ManualLibraryLink',
  component: ManualLibraryLink,
  tags: ['autodoc'],
};

export default meta;

type Story = StoryObj<typeof ManualLibraryLink>;

export const Default: Story = {};
