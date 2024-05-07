'use client';

import Image from 'next/image';
import {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
  PointerEventHandler,
} from 'react';
import { RiArrowRightSLine, RiArrowLeftSLine } from '@remixicon/react';

import * as Carousel from '@/shared/ui/carousel';
import * as styles from './gallery.css';

type GalleryProps = {
  contents: { url: string; name?: string }[];
  name: string;
};

export default function Gallery(props: GalleryProps) {
  const { contents } = props;

  const [slideIndex, setSlideIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [mouseDX, setMouseDX] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      const observer = new ResizeObserver(([entry]) => {
        const [borderContentSize] = entry.borderBoxSize;
        setCarouselWidth(borderContentSize.inlineSize);
      });

      observer.observe(carouselRef.current);

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  const onSlideNext = useCallback(() => {
    if (slideIndex === contents.length - 1) {
      return;
    }

    setSlideIndex(slideIndex + 1);
  }, [slideIndex, contents.length]);

  const onSlidePrev = useCallback(() => {
    if (slideIndex === 0) {
      return;
    }

    setSlideIndex(slideIndex - 1);
  }, [slideIndex]);

  const onPointerDown: PointerEventHandler<HTMLDivElement> = useCallback(
    (downEvent) => {
      setIsDragging(true);

      const onPointerMove = (moveEvent: PointerEvent) => {
        setMouseDX(moveEvent.screenX - downEvent.screenX);
      };

      const onPointerUp = (upEvent: PointerEvent) => {
        const dx = upEvent.screenX - downEvent.screenX;
        if (dx < -50) {
          onSlideNext();
        } else if (dx > 50) {
          onSlidePrev();
        }
        setIsDragging(false);
        setMouseDX(0);
        document.removeEventListener('pointermove', onPointerMove);
      };

      document.addEventListener('pointermove', onPointerMove);
      document.addEventListener('pointerup', onPointerUp, { once: true });
    },
    [onSlideNext, onSlidePrev]
  );

  const viewStyle = useMemo(() => {
    if (isDragging) {
      return {
        transform: `translateX(${-1 * carouselWidth * slideIndex + mouseDX}px)`,
        transition: 'none',
      };
    }

    return {
      transform: `translateX(${-1 * carouselWidth * slideIndex}px)`,
    };
  }, [slideIndex, carouselWidth, isDragging, mouseDX]);

  return (
    <Carousel.Root
      value={slideIndex}
      className={styles.gallery}
      ref={carouselRef}
      onPointerDown={onPointerDown}
    >
      <Carousel.View className={styles.galleryView} style={viewStyle}>
        {contents.map((content) => {
          return (
            <Carousel.Slide key={content.url} className={styles.slide}>
              <Image
                src={content.url}
                alt={content.name ?? props.name}
                fill
                className={styles.image}
              />
            </Carousel.Slide>
          );
        })}
      </Carousel.View>
      <Carousel.Prev
        className={styles.controlButton.prev}
        onClick={onSlidePrev}
      >
        <RiArrowLeftSLine />
      </Carousel.Prev>
      <Carousel.Next
        className={styles.controlButton.next}
        onClick={onSlideNext}
      >
        <RiArrowRightSLine />
      </Carousel.Next>
    </Carousel.Root>
  );
}
