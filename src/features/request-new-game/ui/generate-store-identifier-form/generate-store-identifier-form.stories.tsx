import { type Meta, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import GenerateStoreIdentifierForm from './generate-store-identifier-form';
import { GeneratedStoreIdentifierStoreProvider } from '@/features/request-new-game';

const queryClient = new QueryClient();

const meta: Meta = {
  title: 'Features/RequestNewGame/GenerateStoreIdentifierForm',
  tags: ['autodocs'],
  component: GenerateStoreIdentifierForm,
  decorators: [
    (Story) => {
      return <QueryClientProvider client={queryClient}>
        <GeneratedStoreIdentifierStoreProvider>
          <Story />
        </GeneratedStoreIdentifierStoreProvider>
      </QueryClientProvider>;
    },
  ]
};

export default meta;

type Story = StoryObj<typeof GenerateStoreIdentifierForm>;

export const Default: Story = {};
