import { style, styleVariants } from '@vanilla-extract/css';

export const basicCarousel = style({
  position: 'relative',
  width: '400px',
});

export const basicCarouselSlides = style({
  display: 'flex',
  overflow: 'hidden',
  width: '400px',
});

export const basicCarouselSlide = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: '0 0 400px',
  width: '400px',
  height: '200px',
  backgroundColor: '#202020',
  color: '#fff',
  fontWeight: 'bold',
});

const carouselControlBase = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '24px',
  height: '24px',
  border: 0,
  borderRadius: '50%',
  background: '#fff',
  cursor: 'pointer',
  selectors: {
    '&:disabled': {
      cursor: 'default',
    },
  },
});

export const carouselControl = styleVariants({
  left: [
    carouselControlBase,
    {
      position: 'absolute',
      top: '50%',
      left: '4px',
      transform: 'translateY(-50%)',
    },
  ],
  right: [
    carouselControlBase,
    {
      position: 'absolute',
      top: '50%',
      right: '4px',
      transform: 'translateY(-50%)',
    },
  ],
});
