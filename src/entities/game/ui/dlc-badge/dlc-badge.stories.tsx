import type { Meta, StoryObj } from '@storybook/react';

import DlcBadge from './dlc-badge';

const meta: Meta<typeof DlcBadge> = {
  title: 'Entities/Game/DlcBadge',
  component: DlcBadge,
};

export default meta;

type Story = StoryObj<typeof DlcBadge>;

export const Example: Story = {};
