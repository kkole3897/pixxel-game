import type { Meta, StoryObj } from '@storybook/react';

import TrackingDateAlertBox from './tracking-date-alert-box';

const meta: Meta<typeof TrackingDateAlertBox> = {
  title: 'Entities/Game/TrackingDateAlertBox',
  component: TrackingDateAlertBox,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TrackingDateAlertBox>;

export const Example: Story = {
  args: {
    date: '2024-05-17T16:00:00.000Z',
  },
};
