import type { Meta, StoryObj } from '@storybook/react';

import DeleteWishListButton from './delete-wish-list-button';

const meta: Meta<typeof DeleteWishListButton> = {
  title: 'Features/DeleteWishList/DeleteWishListButton',
  component: DeleteWishListButton,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof DeleteWishListButton>;

export const Default: Story = {};
