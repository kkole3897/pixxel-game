import { style, styleVariants } from '@vanilla-extract/css';

const baseContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '40px',
  height: '40px',
  fontSize: '1.125rem',
  fontWeight: 'bold',
  color: '#262626',
});

const scoreShape = styleVariants({
  meta: [
    baseContainer,
    {
      borderRadius: '4px',
    },
  ],
  user: [
    baseContainer,
    {
      borderRadius: '50%',
    },
  ],
});

const grades = {
  default: {
    border: '1px solid #808080',
    background: 'transparent',
  },
  good: {
    background: '#00ce7a',
  },
  normal: {
    background: '#ffbd3f',
  },
  bad: {
    background: '#ff6874',
    color: '#fff',
  },
};

export const metaScore = styleVariants(grades, (grade) => [
  scoreShape.meta,
  grade,
]);

export const userScore = styleVariants(grades, (grade) => [
  scoreShape.user,
  grade,
]);
