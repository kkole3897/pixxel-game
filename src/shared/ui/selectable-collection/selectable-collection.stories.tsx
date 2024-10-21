import type { Meta, StoryObj } from '@storybook/react';

import SelectableCollection from './selectable-collection';
import SelectableCollectionItem from './selectable-collection-item';

const meta: Meta = {
  title: 'Shared/SelectableCollection',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SelectableCollection>;

export const Default: Story = {
  render: () => {
    return (
      <SelectableCollection>
        <SelectableCollectionItem>Item 1</SelectableCollectionItem>
        <SelectableCollectionItem>Item 2</SelectableCollectionItem>
        <SelectableCollectionItem>Item 3</SelectableCollectionItem>
      </SelectableCollection>
    );
  },
};

export const WithHighlightedItem: Story = {
  render: () => {
    return (
      <SelectableCollection>
        <SelectableCollectionItem data-highlighted>
          Item 1
        </SelectableCollectionItem>
        <SelectableCollectionItem>Item 2</SelectableCollectionItem>
        <SelectableCollectionItem>Item 3</SelectableCollectionItem>
      </SelectableCollection>
    );
  },
};

export const WithCheckedItem: Story = {
  render: () => {
    return (
      <SelectableCollection>
        <SelectableCollectionItem data-state="checked">
          Item 1
        </SelectableCollectionItem>
        <SelectableCollectionItem>Item 2</SelectableCollectionItem>
        <SelectableCollectionItem>Item 3</SelectableCollectionItem>
      </SelectableCollection>
    );
  },
};

export const WithDisabledItem: Story = {
  render: () => {
    return (
      <SelectableCollection>
        <SelectableCollectionItem data-disabled>
          Item 1
        </SelectableCollectionItem>
        <SelectableCollectionItem>Item 2</SelectableCollectionItem>
        <SelectableCollectionItem>Item 3</SelectableCollectionItem>
      </SelectableCollection>
    );
  },
};
