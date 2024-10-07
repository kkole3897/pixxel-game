import { type Meta, StoryObj } from '@storybook/react';

import GenerateStoreIdentifierForm from './generate-store-identifier-form';

const meta: Meta = {
  title: 'Features/RequestNewGame/GenerateStoreIdentifierForm',
  tags: ['autodocs'],
  component: GenerateStoreIdentifierForm,
};

export default meta;

type Story = StoryObj<typeof GenerateStoreIdentifierForm>;

export const Default: Story = {};
