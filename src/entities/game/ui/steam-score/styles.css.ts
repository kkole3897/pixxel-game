import { style, createVar } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  minWidth: '200px',
  maxWidth: '300px',
});

export const gradeContainer = style({
  display: 'flex',
  justifyContent: 'flex-end',
  columnGap: '0.25rem',
  marginBottom: '4px',
  color: '#c5c5c5',
  fontSize: '0.875rem',
});

export const progressRoot = style({
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  height: '8px',
  borderRadius: '4px',
  background: '#c7d5e0',
  transform: 'translateZ(0)',
});

export const indicatorActive = createVar();

export const progressIndicator = style({
  width: '100%',
  height: '100%',
  borderRadius: 'inherit',
  background: '#2a475e',
  transform: indicatorActive,
});
