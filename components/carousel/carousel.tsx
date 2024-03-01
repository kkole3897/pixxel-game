'use client';

import { useComposedRefs } from '@/libs/react';
import {
  forwardRef,
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useRef,
  useId,
  useMemo,
} from 'react';

type CarouselContextValue = {
  slides: Set<HTMLDivElement>;
  collectionRef: React.RefObject<HTMLDivElement>;
  itemMap: Map<string, { ref: React.RefObject<HTMLDivElement> }>;
  isNextDisabled: boolean;
  isPrevDisabled: boolean;
  onSlideNext(): void;
  onSlidePrev(): void;
};

const CarouselContext = createContext<CarouselContextValue>({
  slides: new Set(),
  collectionRef: { current: null },
  itemMap: new Map(),
  isNextDisabled: true,
  isPrevDisabled: true,
  onSlideNext: () => {},
  onSlidePrev: () => {},
});

type CarouselProps = React.PropsWithoutRef<React.ComponentProps<'div'>>;

const Carousel = forwardRef<HTMLDivElement, CarouselProps>(
  (props, forwardedRef) => {
    const { children, ...carouselProps } = props;

    const slideRefs = useRef<CarouselContextValue['slides']>(new Set());

    const collectionRef = useRef<HTMLDivElement>(null);
    const itemMapRef = useRef<CarouselContextValue['itemMap']>(new Map());

    const [targetIndex, setTargetIndex] = useState(0);
    const [isNextDisabled, setIsNextDisabled] = useState(false);
    const [isPrevDisabled, setIsPrevDisabled] = useState(true);

    const handleNext = useCallback(() => {
      if (targetIndex === slideRefs.current.size - 1) {
        return;
      }

      setTargetIndex(targetIndex + 1);

      if (targetIndex === slideRefs.current.size) {
        setIsNextDisabled(true);
      } else {
        setIsNextDisabled(false);
      }
    }, [targetIndex]);

    const handlePrev = useCallback(() => {
      if (targetIndex === 0) {
        return;
      }

      setTargetIndex(targetIndex - 1);

      if (targetIndex === 0) {
        setIsPrevDisabled(true);
      } else {
        setIsPrevDisabled(false);
      }
    }, [targetIndex]);

    return (
      <CarouselContext.Provider
        value={{
          slides: slideRefs.current,
          collectionRef,
          itemMap: itemMapRef.current,
          isNextDisabled,
          isPrevDisabled,
          onSlideNext: handleNext,
          onSlidePrev: handlePrev,
        }}
      >
        <div
          role="group"
          aria-roledescription="carousel"
          {...carouselProps}
          ref={forwardedRef}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  }
);

Carousel.displayName = 'Carousel';

type CarouselViewProps = React.PropsWithoutRef<React.ComponentProps<'div'>>;

const CarouselView = forwardRef<HTMLDivElement, CarouselViewProps>(
  (props, forwardedRef) => {
    const { children, ...carouselViewProps } = props;

    const context = useContext(CarouselContext);

    const composedRefs = useComposedRefs(forwardedRef, context.collectionRef);

    return (
      <div {...carouselViewProps} ref={composedRefs}>
        {children}
      </div>
    );
  }
);

CarouselView.displayName = 'CarouselView';

type CarouselSlideProps = React.PropsWithoutRef<React.ComponentProps<'div'>>;

const CarouselSlide = forwardRef<HTMLDivElement, CarouselSlideProps>(
  (props, forwardedRef) => {
    const { children, ...carouselSlideProps } = props;

    const slideId = useId();
    const ref = useRef<HTMLDivElement>(null);
    const [slide, setSlide] = useState<HTMLDivElement | null>(null);
    const context = useContext(CarouselContext);

    const getItems = useCallback(() => {
      const collectionNode = context.collectionRef.current;
      if (!collectionNode) {
        return [];
      }
      const orderedNodes = Array.from(
        collectionNode.querySelectorAll('[data-collection-item]')
      );
      const items = Array.from(context.itemMap.values());
      const orderedItems = items.sort((a, b) => {
        const indexA = orderedNodes.indexOf(a.ref.current!);
        const indexB = orderedNodes.indexOf(b.ref.current!);

        return indexA - indexB;
      });

      return orderedItems;
    }, [context.collectionRef, context.itemMap]);

    const index = useMemo(() => {
      const items = getItems();
      const _index = slide
        ? items.findIndex((item) => item.ref.current === slide)
        : -1;

      return _index;
    }, [getItems, slide]);

    const composedRefs = useComposedRefs(forwardedRef, ref, (node) =>
      setSlide(node)
    );

    useEffect(() => {
      context.itemMap.set(slideId, { ref });

      return () => {
        context.itemMap.delete(slideId);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
      if (slide) {
        context.slides.add(slide);

        return () => {
          context.slides.delete(slide);
        };
      }
    }, [slide, context.slides]);

    return (
      <div
        role="group"
        aria-roledescription="slide"
        {...carouselSlideProps}
        ref={composedRefs}
        data-collection-item
      >
        {children}
      </div>
    );
  }
);

CarouselSlide.displayName = 'CarouselSlide';

function composeEventHandlers<E>(
  originalEventHandler?: (event: E) => void,
  myEventHandler?: (event: E) => void
) {
  return (event: E) => {
    originalEventHandler?.(event);

    if (!(event as Event).defaultPrevented) {
      return myEventHandler?.(event);
    }
  };
}

type CarouselControlProps = React.PropsWithoutRef<
  React.ComponentProps<'button'>
>;

const CarouselNext = forwardRef<HTMLButtonElement, CarouselControlProps>(
  (props, forwardedRef) => {
    const { children, ...carouselControlProps } = props;
    const carouselContext = useContext(CarouselContext);

    return (
      <button
        disabled={carouselContext.isNextDisabled}
        {...carouselControlProps}
        ref={forwardedRef}
        onClick={composeEventHandlers(
          carouselControlProps.onClick,
          carouselContext.onSlideNext
        )}
      >
        {children}
      </button>
    );
  }
);

CarouselNext.displayName = 'CarouselNext';

const CarouselPrev = forwardRef<HTMLButtonElement, CarouselControlProps>(
  (props, forwardedRef) => {
    const { children, ...carouselControlProps } = props;
    const carouselContext = useContext(CarouselContext);

    return (
      <button
        disabled={carouselContext.isPrevDisabled}
        {...carouselControlProps}
        ref={forwardedRef}
        onClick={composeEventHandlers(
          carouselControlProps.onClick,
          carouselContext.onSlidePrev
        )}
      >
        {children}
      </button>
    );
  }
);

CarouselPrev.displayName = 'CarouselPrev';

export const Root = Carousel;
export const View = CarouselView;
export const Slide = CarouselSlide;
export const Next = CarouselNext;
export const Prev = CarouselPrev;
