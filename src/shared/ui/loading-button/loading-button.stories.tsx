import type { Meta, StoryObj } from '@storybook/react';

import LoadingButton from './loading-button';
import { BouncingDots1 } from '@/shared/ui/icons';

const meta: Meta = {
  title: 'Shared/LoadingButton',
  component: LoadingButton,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof LoadingButton>;

export const Default: Story = {
  args: {
    children: 'Click me',
    isLoading: true,
  },
};

export const CustomSpinner: Story = {
  args: {
    children: 'Click me',
    isLoading: true,
    spinner: <BouncingDots1 color="#fff" />,
  },
};
