import type { Meta, StoryObj } from '@storybook/react';

import ExistedRequestCard from './existed-request-card';

const meta: Meta = {
  title: 'Features/RequestNewGame/ExistedRequestCard',
  component: ExistedRequestCard,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ExistedRequestCard>;

export const Completed: Story = {
  args: {
    request: {
      id: 1,
      slug: 'app/1343240',
      store: 'steam',
      createdAt: '2024-09-20T00:00:00Z',
      completedAt: '2024-09-21T00:00:00Z',
      failedAt: null,
      title: '티메시아',
    },
  },
};

export const Processing: Story = {
  args: {
    request: {
      id: 1,
      slug: 'app/1343240',
      store: 'steam',
      createdAt: '2024-09-20T00:00:00Z',
      completedAt: null,
      failedAt: null,
      title: '티메시아',
    },
  },
};

export const Failed: Story = {
  args: {
    request: {
      id: 1,
      slug: 'app/1343240',
      store: 'steam',
      createdAt: '2024-09-20T00:00:00Z',
      completedAt: null,
      failedAt: '2024-09-21T00:00:00Z',
      title: '티메시아',
    },
  },
};

export const Epic: Story = {
  args: {
    request: {
      id: 1,
      slug: 'thymesia-f4f399',
      store: 'epic',
      createdAt: '2024-09-20T00:00:00Z',
      completedAt: null,
      title: '티메시아',
      failedAt: null,
    },
  },
};
