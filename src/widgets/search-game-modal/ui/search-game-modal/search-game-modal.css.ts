import { style } from '@vanilla-extract/css';

export const content = style({
  position: 'fixed',
  top: 0,
  left: '50%',
  width: '100%',
  // TODO: desktop 환경 대응 필요
  maxWidth: '768px',
  backgroundColor: '#fff',
  transform: 'translateX(-50%)',
  zIndex: 101,
});

export const searchArea = style({
  display: 'flex',
  alignItems: 'center',
  height: '60px',
});

export const closeButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  width: '48px',
  height: '48px',
  padding: 0,
  border: 0,
  background: 'transparent',
  cursor: 'pointer',
});

export const searchFormContainer = style({
  flex: 1,
  paddingRight: '16px',
});
