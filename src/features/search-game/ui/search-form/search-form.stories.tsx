import type { Meta, StoryObj } from '@storybook/react';

import SearchForm from './search-form';

const meta: Meta = {
  title: 'Features/SearchGame/SearchForm',
  component: SearchForm,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SearchForm>;

export const Default: Story = {
  args: {},
};
