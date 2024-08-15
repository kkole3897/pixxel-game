import type { Meta, StoryObj } from '@storybook/react';

import SearchIconButton from './search-icon-button';

const meta: Meta = {
  title: 'Features/SearchGameTitle/SearchIconButton',
  component: SearchIconButton,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SearchIconButton>;

export const Template: Story = {};
