import { forwardRef, useRef, useState } from 'react';

import { FileUploadProvider, useFileUploadContext, type FileUploadContextValue } from './use-file-upload-context';
import { isValidFileType } from './is-valid-file-type'
import { isValidFileSize } from './is-valid-file-size';
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

  if (!event.target.multiple && context.acceptedFiles.length + files.length >= 2) {
    return {
      acceptedFiles,
      rejectedFiles: files,
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
  multiple?: boolean;
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
  multiple = false,
  onFileChange,
  onFileAccept,
  onFileReject,
  ...props
}, forwardedRef) => {
  const inputElementRef = useRef<HTMLInputElement | null>(null);
  const [acceptedFiles, setAcceptedFiles] = useState<File[]>([]);
  const [rejectedFiles, setRejectedFiles] = useState<File[]>([]);

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

type FileUploadInputProps = React.PropsWithChildren<Omit<React.ComponentProps<'input'>, 'type'>>;

const FileUploadInput = forwardRef<HTMLInputElement, FileUploadInputProps>(({ style, name: nameProp, accept: acceptProp, multiple: multipleProp, onChange, ...props }, forwardedRef) => {
  const context = useFileUploadContext();
  const { inputElementRef, name: nameContext, accept: acceptContext, multiple: multipleContext } = context;

  const ref = composeRefs(forwardedRef, inputElementRef);

  const mergedStyle = { ...visuallyHiddenStyle, ...style };
  const mergedName = nameProp ?? nameContext;
  const mergedAccept = acceptProp ?? acceptContext;
  const mergedMultiple = multipleProp ?? multipleContext;

  const handleChange = composeEventHandlers(onChange, (event) => {
    if (event.defaultPrevented) {
      return;
    }

    setFilesFromEvent(context, event);
  });

  return <input {...props} ref={ref} type="file" style={mergedStyle} name={mergedName} accept={mergedAccept} multiple={mergedMultiple} onChange={handleChange} />;
});

FileUploadInput.displayName = 'PrimitiveFileUploadInput';

const Root = FileUpload;
const Trigger = FileUploadTrigger;
const Input = FileUploadInput;

export {
  Root,
  Trigger,
  Input,
  FileUpload,
  FileUploadTrigger,
  FileUploadInput,
};
