import type { Meta } from '@storybook/react';

import * as LibraryField from './library-field';
import * as Input from '@/shared/ui/input';

const meta: Meta = {
  title: 'Features/GameLibrary/LibraryField',
  tags: ['autodocs'],
};

export default meta;

export const Default = () => (
  <LibraryField.Root name="field">
    <LibraryField.Label>
      Label <LibraryField.RequiredIndicator />
    </LibraryField.Label>
    <LibraryField.Control>
      <Input.Root type="text" />
    </LibraryField.Control>
    <LibraryField.ErrorText>Error</LibraryField.ErrorText>
  </LibraryField.Root>
);
