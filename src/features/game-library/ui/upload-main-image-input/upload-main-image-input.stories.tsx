import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import UploadMainImageInput from './upload-main-image-input';
import DefaultMainImage from '~/public/images/default-game-main-image.jpg';

const meta: Meta = {
  title: 'Features/GameLibrary/UploadMainImageInput',
  component: UploadMainImageInput,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof UploadMainImageInput>;

export const Default: Story = {};

export const ChangeUrl = () => {
  const [url, setUrl] = useState<string | null>(null);

  const handleUpload = (file: File | null) => {
    if (file) {
      setTimeout(() => {
        setUrl(DefaultMainImage.src);
      }, 2000);
    } else {
      setUrl(null);
    }
  };

  const handleDelete = () => {
    setUrl(null);
  };

  return (
    <UploadMainImageInput
      url={url}
      onUpload={handleUpload}
      onDelete={handleDelete}
    />
  );
};
