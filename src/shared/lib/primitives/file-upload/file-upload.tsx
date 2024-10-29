import React, { forwardRef, useRef, useState } from 'react';
import { Slot } from '@radix-ui/react-slot';

import { FileUploadProvider, useFileUploadContext, type FileUploadContextValue } from './use-file-upload-context';
import { isValidFileType } from './is-valid-file-type'
import { isValidFileSize } from './is-valid-file-size';
import { FileUploadItemProvider, useFileUploadItemContext } from './use-file-upload-item-context';
import { visuallyHiddenStyle } from '../lib';
import { composeRefs, composeEventHandlers } from '@/shared/lib/react';

function getFilesFromEvent(context: FileUploadContextValue, event: React.ChangeEvent<HTMLInputElement>) {
  const acceptedFiles: File[] = [];
  const rejectedFiles: File[] = [];

  const files = Array.from(event.target.files ?? []);

  if (!event.target.multiple && files.length > 1) {
    return {
      acceptedFiles,
      rejectedFiles: files,
    };
  }

  if (!event.target.multiple) {
    return {
      acceptedFiles: files,
      rejectedFiles,
    };
  }

  if (context.maxFiles < files.length + context.acceptedFiles.length) {
    return {
      acceptedFiles,
      rejectedFiles: files,
    };
  }

  files.forEach((file) => {
    const isValidType = isValidFileType(file, event.target.accept);
    const isValidSize = isValidFileSize(file, context.maxFileSize);

    if (isValidType && isValidSize) {
      acceptedFiles.push(file);
    } else {
      rejectedFiles.push(file);
    }
  });

  return {
    acceptedFiles,
    rejectedFiles,
  }
}

function setFiles(context: FileUploadContextValue, acceptedFiles: File[], rejectedFiles: File[]) {
  context.setAcceptedFiles(acceptedFiles);

  context.onFileAccept?.(acceptedFiles);

  if (rejectedFiles.length > 0) {
    context.setRejectedFiles(rejectedFiles);
    context.onFileReject?.(rejectedFiles);
  }

  context.onFileChange?.(acceptedFiles);
}

function setFilesFromEvent(context: FileUploadContextValue, event: React.ChangeEvent<HTMLInputElement>) {
  const { acceptedFiles, rejectedFiles } = getFilesFromEvent(context, event);

  if (context.multiple) {
    const files = [...context.acceptedFiles, ...acceptedFiles];
    setFiles(context, files, rejectedFiles);
    return;
  }

  if (acceptedFiles.length) {
    const files = [acceptedFiles[0]];
    setFiles(context, files, rejectedFiles);
  } else if (rejectedFiles.length) {
    setFiles(context, context.acceptedFiles, rejectedFiles);
  }
}

type FileUploadProps = React.PropsWithChildren<{
  id?: string;
  className?: string;
  name?: string;
  accept?: string;
  /**
   * @default 1
   */
  maxFiles?: number;
  /**
   * @default Infinity
   */
  maxFileSize?: number;
  required?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  onFileChange?: (files: File[]) => void;
  onFileAccept?: (files: File[]) => void;
  onFileReject?: (files: File[]) => void;
}>;

const FileUpload = forwardRef<HTMLDivElement, FileUploadProps>(({
  children,
  name,
  accept,
  maxFiles = 1,
  maxFileSize = Infinity,
  required,
  disabled,
  invalid,
  onFileChange,
  onFileAccept,
  onFileReject,
  ...props
}, forwardedRef) => {
  const inputElementRef = useRef<HTMLInputElement | null>(null);
  const [acceptedFiles, setAcceptedFiles] = useState<File[]>([]);
  const [rejectedFiles, setRejectedFiles] = useState<File[]>([]);
  const multiple = maxFiles > 1;

  const contextValue = {
    name,
    accept,
    inputElementRef,
    maxFiles,
    maxFileSize,
    required,
    disabled,
    invalid,
    multiple,
    acceptedFiles,
    setAcceptedFiles,
    rejectedFiles,
    setRejectedFiles,
    onFileChange,
    onFileAccept,
    onFileReject,
  };

  return <FileUploadProvider value={contextValue}>
    <div {...props} ref={forwardedRef}>{children}</div>
  </FileUploadProvider>
});

FileUpload.displayName = 'PrimitiveFileUpload';

type FileUploadTriggerProps = React.PropsWithChildren<Omit<React.ComponentProps<'button'>, 'type'>>;

const FileUploadTrigger = forwardRef<HTMLButtonElement, FileUploadTriggerProps>(({ children, onClick, ...props }, forwardedRef) => {
  const { inputElementRef } = useFileUploadContext();

  const handleOpenFilePicker: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    if (event.defaultPrevented) {
      return;
    }

    inputElementRef.current?.click();
  }

  const handleClick = composeEventHandlers(onClick, handleOpenFilePicker);

  return <button {...props} ref={forwardedRef} type="button" onClick={handleClick}>{children}</button>;
});

FileUploadTrigger.displayName = 'PrimitiveFileUploadTrigger';

type FileUploadInputProps = React.PropsWithChildren<Omit<React.ComponentProps<'input'>, 'type' | 'multiple'>>;

const FileUploadInput = forwardRef<HTMLInputElement, FileUploadInputProps>(({ style, name: nameProp, accept: acceptProp, onChange, ...props }, forwardedRef) => {
  const context = useFileUploadContext();
  const { inputElementRef, name: nameContext, accept: acceptContext, multiple } = context;

  const ref = composeRefs(forwardedRef, inputElementRef);

  const mergedStyle = { ...visuallyHiddenStyle, ...style };
  const mergedName = nameProp ?? nameContext;
  const mergedAccept = acceptProp ?? acceptContext;

  const handleChange = composeEventHandlers(onChange, (event) => {
    if (event.defaultPrevented) {
      return;
    }

    setFilesFromEvent(context, event);
  });

  return <input {...props} ref={ref} type="file" style={mergedStyle} name={mergedName} accept={mergedAccept} multiple={multiple} onChange={handleChange} />;
});

FileUploadInput.displayName = 'PrimitiveFileUploadInput';

type FileUploadContextProps = {
  children: (context: FileUploadContextValue) => React.ReactNode;
}

const FileUploadContext = ({ children }: FileUploadContextProps) => children(useFileUploadContext());

type FileUploadItemGroupProps = React.PropsWithChildren<React.ComponentProps<'ul'>> & {
  asChild?: boolean;
};

const FileUploadItemGroup = forwardRef<HTMLUListElement, FileUploadItemGroupProps>(({ children, asChild, ...props }, forwardedRef) => {
  const Component = asChild ? Slot : 'ul';

  return <Component {...props} ref={forwardedRef}>{children}</Component>;
});

FileUploadItemGroup.displayName = 'PrimitiveFileUploadItemGroup';

type FileUploadItemProps = React.PropsWithChildren<React.ComponentProps<'li'>> & {
  asChild?: boolean;
  file: File;
};

const FileUploadItem = forwardRef<HTMLLIElement, FileUploadItemProps>(({ children, asChild, file, ...props }, forwardedRef) => {
  const Component = asChild ? Slot : 'li';

  const fileUploadContext = useFileUploadContext();

  const removeFile = () => {
    const newFiles = fileUploadContext.acceptedFiles.filter((acceptedFile) => acceptedFile !== file);

    fileUploadContext.setAcceptedFiles(newFiles);
    fileUploadContext.onFileChange?.(newFiles);
  }

  const context = {
    file,
    removeFile,
  };

  return <FileUploadItemProvider value={context}>
    <Component {...props} ref={forwardedRef}>{children}</Component>
  </FileUploadItemProvider>;
});

FileUploadItem.displayName = 'PrimitiveFileUploadItem';

type FileUploadDeleteItemTriggerProps = Omit<React.PropsWithChildren<React.ComponentProps<'button'>>, 'type'>;

const FileUploadDeleteItemTrigger = forwardRef<HTMLButtonElement, FileUploadDeleteItemTriggerProps>(({ onClick, children, "aria-label": ariaLabelProp, ...props }, forwardedRef) => {
  const { removeFile, file } = useFileUploadItemContext();

  const handleClick = composeEventHandlers(onClick, (event) => {
    if (event.defaultPrevented) {
      return;
    }

    removeFile();
  });

  const ariaLabel = ariaLabelProp ?? `Delete file ${file.name}`;

  return <button {...props} ref={forwardedRef} type="button" aria-label={ariaLabel}  onClick={handleClick}>{children}</button>;
});

FileUploadDeleteItemTrigger.displayName = 'PrimitiveFileUploadDeleteItemTrigger';

const Root = FileUpload;
const Trigger = FileUploadTrigger;
const Input = FileUploadInput;
const Context = FileUploadContext;
const ItemGroup = FileUploadItemGroup;
const Item = FileUploadItem;
const DeleteItemTrigger = FileUploadDeleteItemTrigger;

export {
  Root,
  Trigger,
  Input,
  Context,
  ItemGroup,
  Item,
  DeleteItemTrigger,
  FileUpload,
  FileUploadTrigger,
  FileUploadInput,
  FileUploadContext,
  FileUploadItemGroup,
  FileUploadItem,
};
