import { style, keyframes } from '@vanilla-extract/css';

import { text } from '@/shared/styles/typography.css';
import { theme } from '@/shared/styles/theme.css';

const overlayShow = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

export const overlay = style({
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  zIndex: 1,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
});

export const contentShow = keyframes({
  from: {
    opacity: 0,
    transform: 'translate(-50%, -48%) scale(0.96)',
  },
  to: {
    opacity: 1,
    transform: 'translate(-50%, -50%) scale(1)',
  },
});

export const content = style({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '280px',
  borderRadius: '20px',
  backgroundColor: '#fff',
  zIndex: 2,
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.10)',
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,

  selectors: {
    '&:focus': {
      outline: 'none',
    },
  },
});

export const contentInner = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '8px 16px 20px',
});

export const title = style([
  text.base,
  {
    marginTop: '-8px',
    color: theme.colors.gray[800],
    fontWeight: theme.fontWeight.semibold,
  },
]);

export const paperAirplane = style({
  width: '150px',
});
