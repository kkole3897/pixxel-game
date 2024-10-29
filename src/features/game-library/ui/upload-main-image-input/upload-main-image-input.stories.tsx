import type { Meta, StoryObj } from '@storybook/react';
import { useState, useRef } from 'react';

import UploadMainImageInput, {
  type UploadMainImageInputProps,
} from './upload-main-image-input';
import DefaultMainImage from '~/public/images/default-game-main-image.jpg';

const meta: Meta = {
  title: 'Features/GameLibrary/UploadMainImageInput',
  component: UploadMainImageInput,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof UploadMainImageInput>;

export const Default: Story = {
  argTypes: {
    status: {
      control: 'select',
      options: ['idle', 'loading', 'success', 'error'],
    },
  },
  args: {
    status: 'idle',
  },
};

export const Upload = () => {
  const [url, setUrl] = useState<string | null>(null);
  const [status, setStatus] =
    useState<Exclude<UploadMainImageInputProps['status'], undefined>>('idle');

  let timerRef = useRef<NodeJS.Timeout>();

  const handleUpload = (file: File | null) => {
    if (file) {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      setStatus('loading');

      timerRef.current = setTimeout(() => {
        setUrl(DefaultMainImage.src);
        setStatus('success');
      }, 2000);
    }
  };

  const handleDelete = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setStatus('idle');
    setUrl(null);
  };

  return (
    <UploadMainImageInput
      url={url}
      status={status}
      onUpload={handleUpload}
      onDelete={handleDelete}
    />
  );
};
