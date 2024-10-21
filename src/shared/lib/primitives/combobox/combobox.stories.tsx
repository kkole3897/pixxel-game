import type { Meta } from '@storybook/react';

import * as Combobox from './combobox';

const meta: Meta = {
  title: 'Primitives/Combobox',
};

export default meta;

export const Single = () => (
  <Combobox.Root>
    <Combobox.Control>
      <Combobox.Input />
    </Combobox.Control>
    <Combobox.Content>
      <Combobox.Item value="A">A</Combobox.Item>
      <Combobox.Item value="B">B</Combobox.Item>
      <Combobox.Item value="C">C</Combobox.Item>
    </Combobox.Content>
  </Combobox.Root>
);

export const Multiple = () => (
  <Combobox.Root multiple>
    <Combobox.Control>
      <Combobox.Input />
    </Combobox.Control>
    <Combobox.Content>
      <Combobox.Item value="A">A</Combobox.Item>
      <Combobox.Item value="B">B</Combobox.Item>
      <Combobox.Item value="C">C</Combobox.Item>
    </Combobox.Content>
  </Combobox.Root>
);

export const Disabled = () => (
  <Combobox.Root disabled>
    <Combobox.Control>
      <Combobox.Input />
    </Combobox.Control>
    <Combobox.Content>
      <Combobox.Item value="A">A</Combobox.Item>
      <Combobox.Item value="B">B</Combobox.Item>
      <Combobox.Item value="C">C</Combobox.Item>
    </Combobox.Content>
  </Combobox.Root>
);

export const WithDisabledItems = () => (
  <Combobox.Root>
    <Combobox.Control>
      <Combobox.Input />
    </Combobox.Control>
    <Combobox.Content>
      <Combobox.Item value="A">A</Combobox.Item>
      <Combobox.Item value="B" disabled>
        B
      </Combobox.Item>
      <Combobox.Item value="C">C</Combobox.Item>
    </Combobox.Content>
  </Combobox.Root>
);
