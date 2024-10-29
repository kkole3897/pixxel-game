'use client';

import React, { createContext, useContext } from 'react';

export type FileUploadContextValue = {
  name?: string;
  accept?: string;
  inputElementRef: React.RefObject<HTMLInputElement | null>;
  maxFiles: number;
  maxFileSize: number;
  disabled?: boolean;
  required?: boolean;
  invalid?: boolean;
  multiple: boolean;
  acceptedFiles: File[];
  setAcceptedFiles: (files: File[]) => void;
  rejectedFiles: File[];
  setRejectedFiles: (files: File[]) => void;
  onFileChange?: (files: File[]) => void;
  onFileAccept?: (files: File[]) => void;
  onFileReject?: (files: File[]) => void;
};

const FileUploadContext = createContext<FileUploadContextValue | undefined>(
  undefined
);

export const FileUploadProvider = FileUploadContext.Provider;

export function useFileUploadContext() {
  const context = useContext(FileUploadContext);

  if (!context) {
    throw new Error(
      'useFileUploadContext must be used within a FileUploadProvider'
    );
  }

  return context;
}
