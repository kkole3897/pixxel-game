import type { Meta } from '@storybook/react';
import { RiSearchLine } from '@remixicon/react';

import * as Combobox from './combobox';
import * as Input from '@/shared/ui/input';

const meta: Meta = {
  title: 'Shared/Combobox',
  tags: ['autodocs'],
};

export default meta;

export const Default = () => (
  <Combobox.Root>
    <Combobox.Control>
      <Combobox.Input />
    </Combobox.Control>
    <Combobox.Content>
      <Combobox.Item value="1" label="Item 1">
        Item 1
      </Combobox.Item>
      <Combobox.Item value="2" label="Item 2">
        Item 2
      </Combobox.Item>
      <Combobox.Item value="3" label="Item 3">
        Item 3
      </Combobox.Item>
    </Combobox.Content>
  </Combobox.Root>
);

export const WithIconInput = () => (
  <Combobox.Root>
    <Combobox.Control>
      <Combobox.Input asChild>
        <Input.Root>
          <Input.Slot side="left">
            <RiSearchLine />
          </Input.Slot>
        </Input.Root>
      </Combobox.Input>
    </Combobox.Control>
    <Combobox.Content>
      <Combobox.Item value="1" label="Item 1">
        Item 1
      </Combobox.Item>
      <Combobox.Item value="2" label="Item 2">
        Item 2
      </Combobox.Item>
      <Combobox.Item value="3" label="Item 3">
        Item 3
      </Combobox.Item>
    </Combobox.Content>
  </Combobox.Root>
);

export const Multiple = () => (
  <Combobox.Root multiple>
    <Combobox.Control>
      <Combobox.Input />
    </Combobox.Control>
    <Combobox.Content>
      <Combobox.Item value="1" label="Item 1">
        Item 1
      </Combobox.Item>
      <Combobox.Item value="2" label="Item 2">
        Item 2
      </Combobox.Item>
      <Combobox.Item value="3" label="Item 3">
        Item 3
      </Combobox.Item>
    </Combobox.Content>
  </Combobox.Root>
);
