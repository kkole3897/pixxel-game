import type { Meta } from '@storybook/react';
import { RiAddCircleLine } from '@remixicon/react';

import * as Input from './input';

const meta: Meta<typeof Input> = {
  title: 'Shared/Input',
};

export default meta;

const placeholder = '입력해주세요';

export const Medium = () => {
  return <Input.Root placeholder={placeholder} />;
};

export const MediumWithRightIcon = () => {
  return (
    <Input.Root placeholder={placeholder}>
      <Input.Slot>
        <RiAddCircleLine />
      </Input.Slot>
    </Input.Root>
  );
};

export const MediumWithLeftIcon = () => {
  return (
    <Input.Root placeholder={placeholder}>
      <Input.Slot side="left">
        <RiAddCircleLine />
      </Input.Slot>
    </Input.Root>
  );
};

export const MediumWithBothSideIcon = () => {
  return (
    <Input.Root placeholder={placeholder}>
      <Input.Slot side="left">
        <RiAddCircleLine />
      </Input.Slot>
      <Input.Slot side="right">
        <RiAddCircleLine />
      </Input.Slot>
    </Input.Root>
  );
};

export const Large = () => {
  return <Input.Root size="lg" placeholder={placeholder} />;
};

export const Invalid = () => {
  return <Input.Root isInvalid placeholder={placeholder} />;
};

export const Disabled = () => {
  return <Input.Root disabled placeholder={placeholder} />;
};
