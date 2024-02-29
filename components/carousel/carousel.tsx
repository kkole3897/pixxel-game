'use client';

import {
  forwardRef,
  createContext,
  useRef,
  useContext,
  useState,
  useCallback,
} from 'react';

type CarouselContextValue = {
  isNextDisabled: boolean;
  isPrevDisabled: boolean;
  onSlideNext(): void;
  onSlidePrev(): void;
};

const CarouselContext = createContext<CarouselContextValue>({
  isNextDisabled: true,
  isPrevDisabled: true,
  onSlideNext: () => {},
  onSlidePrev: () => {},
});

type CarouselProps = React.PropsWithoutRef<React.ComponentProps<'div'>>;

const Carousel = forwardRef<HTMLDivElement, CarouselProps>(
  (props, forwardedRef) => {
    const { children, ...carouselProps } = props;

    const [isNextDisabled, setIsNextDisabled] = useState(false);
    const [isPrevDisabled, setIsPrevDisabled] = useState(true);

    const handleNext = useCallback(() => {}, []);

    const handlePrev = useCallback(() => {}, []);

    return (
      <CarouselContext.Provider
        value={{
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

    return (
      <div {...carouselViewProps} ref={forwardedRef}>
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

    return (
      <div
        role="group"
        aria-roledescription="slide"
        {...carouselSlideProps}
        ref={forwardedRef}
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
