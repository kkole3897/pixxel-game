import type { Meta, StoryObj } from '@storybook/react';

import CreateManualLibraryItemForm from './create-manual-library-item-form';

const meta: Meta = {
  title: 'Features/GameLibrary/CreateManualLibraryItemForm',
  component: CreateManualLibraryItemForm,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CreateManualLibraryItemForm>;

export const Default: Story = {};
