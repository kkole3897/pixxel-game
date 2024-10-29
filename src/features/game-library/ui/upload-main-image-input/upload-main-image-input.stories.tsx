import type { Meta, StoryObj } from '@storybook/react';

import UploadMainImageInput from './upload-main-image-input';

const meta: Meta = {
  title: 'Features/GameLibrary/UploadMainImageInput',
  component: UploadMainImageInput,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof UploadMainImageInput>;

export const Default: Story = {};
