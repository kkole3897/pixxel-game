import type { Meta, StoryObj } from '@storybook/react';

import StoreLink from './store-link';

const meta: Meta<typeof StoreLink> = {
  title: 'Entities/Game/StoreLink',
  component: StoreLink,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof StoreLink>;

export const Regular: Story = {
  args: {
    url: 'https://store.steampowered.com/app/1086940/Baldurs_Gate_3/',
    store: 'steam',
    regularPrice: 66000,
    currentPrice: 66000,
    lowestPrice: 58000,
  },
};

export const Discount: Story = {
  args: {
    url: 'https://store.steampowered.com/app/1086940/Baldurs_Gate_3/',
    store: 'steam',
    regularPrice: 66000,
    currentPrice: 58000,
    lowestPrice: 55000,
  },
};

export const Lowest: Story = {
  args: {
    url: 'https://store.steampowered.com/app/1086940/Baldurs_Gate_3/',
    store: 'steam',
    regularPrice: 66000,
    currentPrice: 55000,
    lowestPrice: 55000,
  },
};
