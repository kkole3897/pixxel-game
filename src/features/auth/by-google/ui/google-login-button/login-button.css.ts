import { style } from '@vanilla-extract/css';

export const button = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  columnGap: '4px',
  width: '240px',
  height: '42px',
  padding: '0 8px 0 6px',
  border: 0,
  borderRadius: '12px',
  backgroundColor: '#f2f2f2',
  fontSize: '1rem',
  cursor: 'pointer',
});

export const iconArea = style({
  width: '20px',
  height: '20px',
});

export const labelArea = style({
  color: 'rgba(0, 0, 0, 0.85)',
  fontWeight: 600,
});
