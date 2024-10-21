import type { Meta, StoryObj } from '@storybook/react';

import * as DropdownMenu from './dropdown-menu';

const meta: Meta = {
  title: 'Shared/DropdownMenu',
  component: DropdownMenu.Root,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof DropdownMenu.Root>;

export const Default: Story = {
  render: () => (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>Open</DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content>
          <DropdownMenu.Item>Item 1</DropdownMenu.Item>
          <DropdownMenu.Item>Item 2</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  ),
};
