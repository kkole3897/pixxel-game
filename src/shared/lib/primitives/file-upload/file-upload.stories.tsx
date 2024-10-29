import type { Meta } from '@storybook/react';

import * as FileUpload from './file-upload';

const meta: Meta = {
  title: 'Primitives/FileUpload',
  tags: ['autodocs'],
};

export default meta;

export const Default = () => {
  return (
    <FileUpload.Root>
      <FileUpload.Trigger>Upload a file</FileUpload.Trigger>
      <FileUpload.Input />
    </FileUpload.Root>
  );
}
