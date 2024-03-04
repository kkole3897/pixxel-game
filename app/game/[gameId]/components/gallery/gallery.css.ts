import { style, styleVariants } from '@vanilla-extract/css';

export const gallery = style({
  position: 'relative',
  overflow: 'hidden',
});

export const galleryView = style({
  display: 'flex',
  transitionProperty: 'transform',
  touchAction: 'pan-y',
  userSelect: 'none',
  transition: 'transform 0.2s',
});

const controlButtonBase = style({
  display: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: '0',
  bottom: '0',
  width: '32px',
  padding: 0,
  border: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: '#fff',
  cursor: 'pointer',
  ':disabled': {
    cursor: 'default',
    opacity: 0.45,
  },
  selectors: {
    [`${gallery}:hover &`]: {
      display: 'flex',
    },
  },
});

export const controlButton = styleVariants({
  prev: [
    controlButtonBase,
    {
      left: 0,
    },
  ],
  next: [
    controlButtonBase,
    {
      right: 0,
    },
  ],
});

export const slide = style({
  position: 'relative',
  flex: '0 0 100%',
  aspectRatio: '16 / 9',
});

export const image = style({
  objectFit: 'cover',
  pointerEvents: 'none',
});
