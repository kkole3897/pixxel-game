import type { Meta, StoryObj } from '@storybook/react';

import ImageWithFallback from './image-with-fallback';
import SampleJpg480 from '~/stories/assets/sample-480x360.jpg';

const meta: Meta<typeof ImageWithFallback> = {
  title: 'Shared/ImageWithFallback',
  component: ImageWithFallback,
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
      description: '이미지 url 또는 static import',
    },
    fallbackSrc: {
      control: 'text',
      description:
        'src가 비어 있거나 오류가 있을 때 나타낼 대체 이미지의 url 또는 static import',
    },
    alt: {
      control: 'text',
    },
    width: {
      control: {
        type: 'number',
        min: 0,
      },
    },
    height: {
      control: {
        type: 'number',
        min: 0,
      },
    },
    fill: {
      control: 'boolean',
      description:
        'false일 경우 또는 static import가 아닌 경우 width, height 값을 반드시 명시해야 함',
    },
  },
};

export default meta;

type Story = StoryObj<typeof ImageWithFallback>;

export const DefaultFallback: Story = {
  args: {
    alt: 'default fallback',
  },
};

export const StaticImage: Story = {
  args: {
    src: SampleJpg480,
    alt: 'static image',
  },
};

export const BrokenImage: Story = {
  args: {
    src: 'dsdfs',
    width: 128,
    height: 128,
    fallbackSrc: '/images/fallback-image.png',
    alt: 'broken image',
  },
};
