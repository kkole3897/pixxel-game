import Image from 'next/image';
import cn from 'classnames';
import { RiImageAddLine, RiCloseLine } from '@remixicon/react';

import * as FileUpload from '@/shared/lib/primitives/file-upload';
import { SpinnerRing1 } from '@/shared/ui/icons';
import * as styles from './upload-main-image-input.css';

type UploadStatus = 'idle' | 'loading' | 'success' | 'error';

export type UploadMainImageInputProps = {
  id?: string;
  className?: string;
  name?: string;
  url?: string | null;
  status?: UploadStatus;
  onUpload?: (file: File | null) => void;
  onDelete?: () => void;
};

export default function UploadMainImageInput({
  id,
  className,
  url,
  onUpload,
  onDelete,
  status = 'idle',
  ...props
}: UploadMainImageInputProps) {
  const composedClassName = cn(styles.fileUpload, className);
  const handleFilesChange = (files: File[]) => {
    if (files.length > 0) {
      onUpload?.(files[0]);
    }
  };

  const handleClickDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onDelete?.();
  };

  return (
    <FileUpload.Root
      {...props}
      className={composedClassName}
      accept="image/*"
      maxFileSize={52_428_800}
      onFileChange={handleFilesChange}
    >
      <FileUpload.Trigger className={styles.trigger} />
      <FileUpload.Context>
        {({ acceptedFiles }) => {
          const file = acceptedFiles[0];

          if (file && url) {
            return (
              <FileUpload.Item file={file} className={styles.item} asChild>
                <div>
                  <Image
                    src={url}
                    alt=""
                    width={180}
                    height={180}
                    className={styles.image}
                  />
                  <FileUpload.Trigger className={styles.trigger} />
                  <FileUpload.DeleteItemTrigger
                    className={styles.deleteItemTrigger}
                    onClick={handleClickDelete}
                  >
                    <RiCloseLine size={20} />
                  </FileUpload.DeleteItemTrigger>
                </div>
              </FileUpload.Item>
            );
          } else if (url) {
            return (
              <div className={styles.item}>
                <Image
                  src={url}
                  alt=""
                  width={180}
                  height={180}
                  className={styles.image}
                />
                <FileUpload.Trigger className={styles.trigger} />
                <button
                  type="button"
                  className={styles.deleteItemTrigger}
                  onClick={handleClickDelete}
                >
                  <RiCloseLine size={20} />
                </button>
              </div>
            );
          } else if (file) {
            return (
              <FileUpload.Item file={file} asChild className={styles.item}>
                <div>
                  <Image
                    src={URL.createObjectURL(file)}
                    alt=""
                    width={180}
                    height={180}
                    className={styles.image}
                  />
                  <FileUpload.Trigger className={styles.trigger} />
                  <FileUpload.DeleteItemTrigger
                    className={styles.deleteItemTrigger}
                    onClick={handleClickDelete}
                  >
                    <RiCloseLine size={20} />
                  </FileUpload.DeleteItemTrigger>
                </div>
              </FileUpload.Item>
            );
          }

          return (
            <div className={styles.iconArea}>
              <RiImageAddLine size={36} />
            </div>
          );
        }}
      </FileUpload.Context>
      {status === 'loading' && (
        <SpinnerRing1 className={styles.loadingIndicator} />
      )}
      <FileUpload.Input id={id} />
    </FileUpload.Root>
  );
}
