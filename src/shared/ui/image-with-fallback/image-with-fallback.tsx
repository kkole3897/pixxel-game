'use client';

import Image, { ImageProps } from 'next/image';
import { useState, useEffect, SyntheticEvent } from 'react';

import fallbackImage from '~/public/images/fallback-image.png';

interface ImageWithFallbackProps extends Omit<ImageProps, 'src'> {
  fallbackSrc?: ImageProps['src'];
  src?: ImageProps['src'] | null;
  children?: React.ReactNode;
}

export default function ImageWithFallback(props: ImageWithFallbackProps) {
  const {
    src,
    alt,
    fallbackSrc: fallback = fallbackImage,
    children,
    ...rest
  } = props;

  const [error, setError] = useState<null | SyntheticEvent<
    HTMLImageElement,
    Event
  >>(null);

  useEffect(() => {
    setError(null);
  }, [src]);

  if ((!src || !!error) && !!children) {
    return children;
  }

  return (
    <Image
      src={!src || error ? fallback : src}
      alt={alt}
      onError={(error) => setError(error)}
      {...rest}
    />
  );
}
