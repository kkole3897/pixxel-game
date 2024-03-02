'use client';

import {
  forwardRef,
  createContext,
  useContext,
  useRef,
  useEffect,
  useMemo,
  useId,
  useState,
  useCallback,
} from 'react';

type CarouselContextValue = {
  slides: Set<string>;
  isNextDisabled: boolean;
  isPrevDisabled: boolean;
  auto: boolean;
  slideChangeTrigger(): void;
};

const CarouselContext = createContext<CarouselContextValue>({
  slides: new Set(),
  isNextDisabled: true,
  isPrevDisabled: false,
  auto: false,
  slideChangeTrigger() {},
});

interface CarouselProps
  extends React.PropsWithoutRef<React.ComponentProps<'div'>> {
  role?: 'group' | 'region';
  loop?: boolean;
  auto?: boolean;
  value: number;
}

const Carousel = forwardRef<HTMLDivElement, CarouselProps>(
  (props, forwardedRef) => {
    const {
      children,
      role = 'group',
      loop = false,
      auto = false,
      value,
      ...carouselProps
    } = props;

    const slideRefs = useRef(new Set<string>());
    const [isSlideChanged, setIsSlideChanged] = useState(false);
    const slideChangeTrigger = useCallback(() => {
      setIsSlideChanged(true);
    }, []);

    const [isNextDisabled, setIsNextDisabled] = useState(false);

    useEffect(() => {
      if (isSlideChanged) {
        setIsSlideChanged(false);
        if (loop) {
          setIsNextDisabled(false);
        } else if (value < slideRefs.current.size - 1) {
          setIsNextDisabled(false);
        } else {
          setIsNextDisabled(true);
        }
      }
    }, [value, loop, isSlideChanged]);

    const isPrevDisabled = useMemo(() => {
      if (loop) {
        return false;
      }
      if (value > 0) {
        return false;
      }

      return true;
    }, [loop, value]);

    return (
      <CarouselContext.Provider
        value={{
          slides: slideRefs.current,
          isNextDisabled,
          isPrevDisabled,
          auto,
          slideChangeTrigger,
        }}
      >
        <div
          role={role}
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

    return (
      <div
        {...carouselViewProps}
        ref={forwardedRef}
        aria-atomic="false"
        aria-live={context.auto ? 'off' : 'polite'}
      >
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
    const context = useContext(CarouselContext);
    const { slides, slideChangeTrigger } = context;

    useEffect(() => {
      slides.add(slideId);
      slideChangeTrigger();

      return () => {
        slides.delete(slideId);
        slideChangeTrigger();
      };
    }, []);

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
