import type { Meta, StoryObj } from '@storybook/react';

import KakaoSpeechBubbleFill from './speech-bubble';

const meta: Meta<typeof KakaoSpeechBubbleFill> = {
  title: 'Shared/Icons/KakaoSpeechBubbleFill',
  component: KakaoSpeechBubbleFill,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'color',
      description: '아이콘 색상',
      table: {
        defaultValue: {
          summary: '#000000',
        },
      },
    },
    size: {
      control: 'number',
      description: '아이콘 크기, 정방형으로 조절 가능',
      table: {
        defaultValue: {
          summary: '24',
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof KakaoSpeechBubbleFill>;

export const Default: Story = {};
