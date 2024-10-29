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
      <FileUpload.ItemGroup>
        <FileUpload.Context>
          {({ acceptedFiles }) => acceptedFiles.map((file) => (
            <FileUpload.Item key={file.name} file={file}>
              <div>{file.name}</div>
              <FileUpload.DeleteItemTrigger>삭제</FileUpload.DeleteItemTrigger>
            </FileUpload.Item>
          ))}
        </FileUpload.Context>
      </FileUpload.ItemGroup>
      <FileUpload.Input />
    </FileUpload.Root>
  );
}
