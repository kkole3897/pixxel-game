import type { Meta, StoryObj } from '@storybook/react';

import CreateAutoLibraryItemForm from './create-auto-library-item-form';

const meta: Meta = {
  title: 'Features/GameLibrary/CreateAutoLibraryItemForm',
  component: CreateAutoLibraryItemForm,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CreateAutoLibraryItemForm>;

export const Default: Story = {
  args: {
    publicId: 'public_id_1',
    availableDrms: ['steam', 'epic'],
  },
};
