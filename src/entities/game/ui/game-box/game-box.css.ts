import { style } from '@vanilla-extract/css';

export const box = style({
  display: 'flex',
  columnGap: '8px',
  height: '68px',
  fontSize: '0.875rem',
});

export const thumbnailArea = style({
  flex: '0 0 100px',
  width: '100px',
  height: '100%',
});

export const summaryArea = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  flex: 1,
  overflow: 'hidden',
});

export const thumbnailImg = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const gameName = style({
  overflow: 'hidden',
  fontWeight: 'bold',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
});

export const lowestArea = style({
  flex: '0 0 16px',
  display: 'inline-block',
  width: '16px',
  height: '16px',
});

export const lowestText = style({
  position: 'absolute',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  clipPath: 'inset(50%)',
  height: '1px',
  width: '1px',
  whiteSpace: 'nowrap',
});

export const initialPriceArea = style({
  display: 'flex',
  alignItems: 'center',
});

export const finalPriceArea = style({
  display: 'flex',
  alignItems: 'center',
});

export const finalPrice = style({
  color: '#1d4ed8',
  fontSize: '1rem',
  fontWeight: 'bold',
});

export const discountRate = style({
  marginRight: '4px',
  padding: '4px',
  borderRadius: '4px',
  backgroundColor: '#2563eb',
  color: '#fff',
  fontSize: '0.75rem',
  fontWeight: '600',
});

export const initalPrice = style({
  color: '#94a3b8',
  textDecoration: 'line-through',
});

export const priceArea = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  marginTop: '4px',
});
