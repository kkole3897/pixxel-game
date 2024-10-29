import type { Meta } from '@storybook/react';

import * as FileUpload from './file-upload';

const meta: Meta = {
  title: 'Primitives/FileUpload',
  tags: ['autodocs'],
};

export default meta;

export const Single = () => {
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

export const Multiple = () => {
  return (
    <FileUpload.Root maxFiles={3}>
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

export const AcceptImage = () => {
  return (
    <FileUpload.Root maxFiles={3} accept='image/*'>
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

export const AcceptImageInput = () => {
  return (
    <FileUpload.Root maxFiles={3}>
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
      <FileUpload.Input accept='image/*' />
    </FileUpload.Root>
  );
}
