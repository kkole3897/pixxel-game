import type { Meta, StoryObj } from '@storybook/react';

import RegisterOauthForm from './register-oauth-form';

const meta: Meta<typeof RegisterOauthForm> = {
  title: 'Features/Auth/RegisterOauth/RegisterOauthForm',
  component: RegisterOauthForm,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof RegisterOauthForm>;

export const Example: Story = {};
