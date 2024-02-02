'use client';

import Image, { ImageProps } from 'next/image';
import { useState, useEffect, SyntheticEvent } from 'react';

import fallbackImage from '@/public/images/fallback-image.png';

interface ImageWithFallbackProps extends Pick<Partial<ImageProps>, 'src'>, Omit<ImageProps, 'src'> {
  fallback?: ImageProps['src'];
}

export default function ImageWithFallback(props: ImageWithFallbackProps) {
  const { src, alt, fallback = fallbackImage, ...rest} = props;

  const [error, setError] = useState<null | SyntheticEvent<HTMLImageElement, Event>>(null);

  useEffect(() => {
    setError(null);
  }, [src]);

  return (
    <Image
      src={!src || error ? fallback : src}
      alt={alt}
      onError={(error) => setError(error)}
      {...rest}
    />
  );
}
