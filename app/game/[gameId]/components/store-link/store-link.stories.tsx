import type { Meta, StoryObj } from '@storybook/react';

import StoreLink from './store-link';

const meta: Meta<typeof StoreLink> = {
  title: 'App/Game/[GameId]/StoreLink',
  component: StoreLink,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof StoreLink>;

export const Regular: Story = {
  args: {
    href: 'https://store.steampowered.com/app/1086940/Baldurs_Gate_3/',
    store: 'steam',
    regular: 66000,
    current: 66000,
    lowest: 58000,
  },
};

export const Discount: Story = {
  args: {
    href: 'https://store.steampowered.com/app/1086940/Baldurs_Gate_3/',
    store: 'steam',
    regular: 66000,
    current: 58000,
    lowest: 55000,
  },
};

export const Lowest: Story = {
  args: {
    href: 'https://store.steampowered.com/app/1086940/Baldurs_Gate_3/',
    store: 'steam',
    regular: 66000,
    current: 55000,
    lowest: 55000,
  },
};
