import { style, styleVariants, createVar } from '@vanilla-extract/css';

export const container = style({
  position: 'relative',
  width: '38px',
  height: '38px',
});

export const outerOrb = style({
  position: 'absolute',
  top: '-1px',
  right: '-1px',
  bottom: '-1px',
  left: '-1px',
  borderRadius: '50%',
  background: '#2e2e2e',
  zIndex: -1,
});

export const innerOrb = style({
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: '4px',
  right: '4px',
  bottom: '4px',
  left: '4px',
  borderRadius: '50%',
  background: '#2e2e2e',
  color: '#fff',
});

export const radialTransform = createVar();

export const radial = style({
  borderRadius: '50%',
  transform: radialTransform,
});

export const circleDashArray = createVar();

export const circle = style({
  strokeDasharray: circleDashArray,
});

export const colorCircle = styleVariants({
  Mighty: [
    circle,
    {
      fill: '#fc430a',
    },
  ],
  Strong: [
    circle,
    {
      fill: '#9e00b4',
    },
  ],
  Fair: [
    circle,
    {
      fill: '#4aa1ce',
    },
  ],
  Weak: [
    circle,
    {
      fill: '#80b06a',
    },
  ],
});

export const gradientStart = styleVariants({
  Mighty: {
    stopColor: '#ffd86f',
  },
  Strong: {
    stopColor: '#ff6ec4',
  },
  Fair: {
    stopColor: '#478c77',
  },
  Weak: {
    stopColor: '#80b06a',
  },
});

export const gradientStop = styleVariants({
  Mighty: {
    stopColor: '#fc430a',
  },
  Strong: {
    stopColor: '#7873f5',
  },
  Fair: {
    stopColor: '#76c8ff',
  },
  Weak: {
    stopColor: '#638151',
  },
});
