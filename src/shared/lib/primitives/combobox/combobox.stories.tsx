import type { Meta } from '@storybook/react';
import { useState } from 'react';

import * as Combobox from './combobox';

const meta: Meta = {
  title: 'Primitives/Combobox',
};

export default meta;

export const Single = () => (
  <Combobox.Root defaultValue={['A']}>
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

export const Controlled = () => {
  const [open, setOpen] = useState(true);
  const [values, setValues] = useState<string[]>([]);
  const [value, setValue] = useState<string>('hello');

  return (
    <Combobox.Root
      open={open}
      onOpenChange={setOpen}
      value={values}
      onValueChange={setValues}
    >
      <Combobox.Control>
        <div>{values[0]}</div>
        <Combobox.Input value={value} onValueChange={setValue} />
      </Combobox.Control>
      <Combobox.Content>
        <Combobox.Item value="A">A</Combobox.Item>
        <Combobox.Item value="B">B</Combobox.Item>
        <Combobox.Item value="C">C</Combobox.Item>
      </Combobox.Content>
    </Combobox.Root>
  );
};

export const ControlledMultiple = () => {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState<string[]>([]);
  const inputValue = values.join(', ');

  return (
    <Combobox.Root
      open={open}
      onOpenChange={setOpen}
      value={values}
      onValueChange={setValues}
      multiple
    >
      <Combobox.Control>
        {values.map((value) => (
          <div key={value}>{value}</div>
        ))}
        <Combobox.Input value={inputValue}/>
      </Combobox.Control>
      <Combobox.Content>
        <Combobox.Item value="A">A</Combobox.Item>
        <Combobox.Item value="B">B</Combobox.Item>
        <Combobox.Item value="C">C</Combobox.Item>
      </Combobox.Content>
    </Combobox.Root>
  );
}
