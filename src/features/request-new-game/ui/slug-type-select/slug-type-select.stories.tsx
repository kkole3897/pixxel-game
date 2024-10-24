import type { Meta, StoryObj } from '@storybook/react';
import { useState, useCallback } from 'react';

import SlugTypeSelect from './slug-type-select';
import {
  type SteamSlugType,
  type EpicSlugType,
  type GameStore,
} from '@/entities/game';

const meta: Meta = {
  title: 'Features/RequestNewGame/SlugTypeSelect',
  component: SlugTypeSelect,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SlugTypeSelect>;

const SteamSelect = () => {
  return <SlugTypeSelect store="steam" />;
};

export const Steam: Story = {
  render: () => {
    return <SteamSelect />;
  },
};

const EpicSelect = () => {
  return <SlugTypeSelect store="epic" defaultValue="bundles" />;
};

export const Epic: Story = {
  render: () => {
    return <EpicSelect />;
  },
};

const MixSelect = ({ store }: { store: GameStore }) => {
  return <SlugTypeSelect store={store} />;
};

export const Mix: Story = {
  render: (args) => <MixSelect {...args} />,
  args: {
    store: 'steam',
  },
  argTypes: {
    store: {
      control: 'select',
      options: ['steam', 'epic'],
    },
  },
};

export const Invalid: Story = {
  args: {
    store: 'steam',
    defaultValue: 'p',
  },
};
