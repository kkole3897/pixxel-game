import { Meta, StoryObj } from '@storybook/react';

import LoginButton from './login-button';

const meta: Meta<typeof LoginButton> = {
  title: 'Features/Auth/Kakao/KakaoLoginButton',
  component: LoginButton,
};

export default meta;

type Story = StoryObj<typeof LoginButton>;

export const Example: Story = {};
