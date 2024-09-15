import type { Meta, StoryObj } from '@storybook/react';

import { Root, Item, Indicator } from './radio-group';

const meta: Meta<typeof Root> = {
  title: 'Shared/RadioGroup',
  component: Root,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Root>;

export const Default: Story = {
  render: () => {
    return (
      <Root>
        <label>
          첫번째
          <Item value="1">
            <Indicator />
          </Item>
        </label>
        <label>
          두번째
          <Item value="2">
            <Indicator />
          </Item>
        </label>
      </Root>
    );
  },
};

export const WithDisabled: Story = {
  render: () => {
    return (
      <Root defaultValue="1">
        <label>
          첫번째 (비활성화)
          <Item value="1" disabled>
            <Indicator />
          </Item>
        </label>
        <label>
          두번째
          <Item value="2">
            <Indicator />
          </Item>
        </label>
      </Root>
    );
  },
};
