import type { Meta, StoryObj } from '@storybook/react';

import PaperAirplane from './paper-airplane';

const meta: Meta = {
  title: 'Shared/Lottie/PaperAirplane',
  component: PaperAirplane,
};

export default meta;

type Story = StoryObj<typeof PaperAirplane>;

export const Default: Story = {};
