import { createContext, useContext } from 'react';

type FileUploadItemContextValue = {
  file: File;
  removeFile: () => void;
};

const FileUploadItemContext = createContext<
  FileUploadItemContextValue | undefined
>(undefined);

export const FileUploadItemProvider = FileUploadItemContext.Provider;

export function useFileUploadItemContext() {
  const context = useContext(FileUploadItemContext);

  if (!context) {
    throw new Error(
      'useFileUploadItemContext must be used within a FileUploadItemProvider'
    );
  }

  return context;
}
