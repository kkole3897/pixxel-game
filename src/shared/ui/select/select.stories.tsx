import type { Meta, StoryObj } from '@storybook/react';

import {
  Root,
  Trigger,
  Value,
  Icon,
  Content,
  Item,
  ItemIndicator,
} from './select';
import { SteamFillBase, EpicFillBase } from '@/shared/ui/icons';

const meta: Meta<typeof Root> = {
  title: 'Shared/Select',
  component: Root,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Root>;

export const Default: Story = {
  render: () => {
    return (
      <Root>
        <Trigger>
          <Value placeholder="선택" />
          <Icon />
        </Trigger>
        <Content sideOffset={8}>
          <Item value="1">첫번째</Item>
          <Item value="2">두번째</Item>
          <Item value="3">세번째</Item>
          <Item value="4">네번째</Item>
          <Item value="5">다섯번째</Item>
          <Item value="6">여섯번째</Item>
          <Item value="7">일곱번째</Item>
          <Item value="8">여덟번째</Item>
          <Item value="9">아홉번째</Item>
          <Item value="10">열번째</Item>
          <Item value="11">열한번째</Item>
          <Item value="12">열두번째</Item>
          <Item value="13">열세번째</Item>
        </Content>
      </Root>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    return (
      <Root disabled>
        <Trigger>
          <Value />
          <Icon />
        </Trigger>
        <Content sideOffset={8}>
          <Item value="1">첫번째</Item>
          <Item value="2">두번째</Item>
          <Item value="3">세번째</Item>
          <Item value="4">네번째</Item>
          <Item value="5">다섯번째</Item>
          <Item value="6">여섯번째</Item>
          <Item value="7">일곱번째</Item>
          <Item value="8">여덟번째</Item>
          <Item value="9">아홉번째</Item>
          <Item value="10">열번째</Item>
          <Item value="11">열한번째</Item>
          <Item value="12">열두번째</Item>
          <Item value="13">열세번째</Item>
        </Content>
      </Root>
    );
  },
};

export const WithDisabledItem: Story = {
  render: () => {
    return (
      <Root>
        <Trigger>
          <Value />
          <Icon />
        </Trigger>
        <Content sideOffset={8}>
          <Item value="1">첫번째</Item>
          <Item value="2">두번째</Item>
          <Item value="3" disabled>
            세번째
          </Item>
          <Item value="4">네번째</Item>
          <Item value="5">다섯번째</Item>
          <Item value="6">여섯번째</Item>
          <Item value="7">일곱번째</Item>
          <Item value="8">여덟번째</Item>
          <Item value="9">아홉번째</Item>
          <Item value="10">열번째</Item>
          <Item value="11">열한번째</Item>
          <Item value="12">열두번째</Item>
          <Item value="13">열세번째</Item>
        </Content>
      </Root>
    );
  },
};

export const WithItemIndicators: Story = {
  render: () => {
    return (
      <Root>
        <Trigger>
          <Value />
          <Icon />
        </Trigger>
        <Content sideOffset={8}>
          <Item value="1" left={<ItemIndicator />}>
            첫번째
          </Item>
          <Item value="2" left={<ItemIndicator />}>
            두번째
          </Item>
          <Item value="3" right={<ItemIndicator />}>
            세번째
          </Item>
          <Item value="4" right={<ItemIndicator />} disabled>
            네번째
          </Item>
        </Content>
      </Root>
    );
  },
};

export const WithComplexItems: Story = {
  render: () => {
    return (
      <Root>
        <Trigger>
          <Value />
          <Icon />
        </Trigger>
        <Content sideOffset={8}>
          <Item value="steam">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <SteamFillBase />
              스팀
            </div>
          </Item>
          <Item value="epic">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <EpicFillBase />
              에픽
            </div>
          </Item>
        </Content>
      </Root>
    );
  },
};
