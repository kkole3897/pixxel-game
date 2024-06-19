'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

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

  const [isError, setIsError] = useState(false);

  const handleError = () => {
    if (!isError) {
      setIsError(true);
    }
  };

  if ((!src || isError) && !!children) {
    return children;
  } else if (!src || isError) {
    return <Image src={fallback} alt={alt} {...rest} />;
  }

  return <Image src={src} alt={alt} onError={handleError} {...rest} />;
}
