import { style } from '@vanilla-extract/css';

export const box = style({
  display: 'flex',
  columnGap: '8px',
});

export const thumbnailArea = style({
  width: '64px',
  height: '64px',
});

export const thumbnailImg = style({
  width: '100%',
  height: '100%',
});

export const genreArea = style({
  display: 'flex',
  gap: '4px',
  marginTop: '4px',
});

export const gameName = style({
  marginBottom: '4px',
  fontSize: '1rem',
  fontWeight: 'bold',
});

export const releaseDate = style({
  color: '#6b7280',
});

export const lowestPriceBadge = style({
  display: 'inline-block',
  padding: '4px',
  borderRadius: '4px',
  backgroundColor: '#2563eb',
  color: '#fff',
});

export const initialPriceArea = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
});

export const finalPrice = style({
  color: '#1d4ed8',
  fontSize: '1.125rem',
  fontWeight: 'bold',
});

export const discountRate = style({
  color: '#2563eb',
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
