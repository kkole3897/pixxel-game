import Image from 'next/image';
import cn from 'classnames';
import { RiImageAddLine, RiCloseLine } from '@remixicon/react';

import * as FileUpload from '@/shared/lib/primitives/file-upload';
import * as styles from './upload-main-image-input.css';

type UploadMainImageInputProps = {
  id?: string;
  className?: string;
  onChange?: (url: string | null) => void;
};

export default function UploadMainImageInput({
  id,
  className,
}: UploadMainImageInputProps) {
  const composedClassName = cn(styles.fileUpload, className);

  return (
    <FileUpload.Root
      className={composedClassName}
      accept="image/*"
      maxFileSize={52_428_800}
    >
      <FileUpload.Trigger className={styles.trigger}>
        <FileUpload.Context>
          {({ acceptedFiles }) => {
            if (acceptedFiles.length === 0) {
              return (
                <div className={styles.iconArea}>
                  <RiImageAddLine size={36} />
                </div>
              );
            }

            const file = acceptedFiles[0];

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
                  <FileUpload.DeleteItemTrigger
                    className={styles.deleteItemTrigger}
                    onClick={(event) => event.stopPropagation()}
                  >
                    <RiCloseLine size={20} />
                  </FileUpload.DeleteItemTrigger>
                </div>
              </FileUpload.Item>
            );
          }}
        </FileUpload.Context>
      </FileUpload.Trigger>
      <FileUpload.Input id={id} />
    </FileUpload.Root>
  );
}
