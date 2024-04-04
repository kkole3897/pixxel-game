import { style } from '@vanilla-extract/css';

export const storeLink = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '16px 12px',
  borderLeft: '5px solid #2a475e',
  borderRadius: '4px',
  color: 'unset',
  textDecoration: 'none',
});

export const priceArea = style({
  textAlign: 'end',
});

export const initialPriceArea = style({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '4px',
  marginBottom: '4px',
});

export const discountPercent = style({
  color: '#2563eb',
  fontWeight: '600',
});

export const initialPrice = style({
  color: '#94a3b8',
  textDecoration: 'line-through',
});

export const finalPrice = style({
  color: '#1d4ed8',
  fontSize: '1.125rem',
  fontWeight: 'bold',
});

export const lowestPriceArea = style({
  marginTop: '4px',
  color: '#94a3b8',
});

export const lowestPrice = style({
  textDecoration: 'underline',
});

export const finalPriceArea = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '4px',
});

export const lowestBadge = style({
  display: 'inline-block',
  padding: '4px',
  borderRadius: '4px',
  backgroundColor: '#2563eb',
  color: '#fff',
  fontSize: '0.875rem',
});

export const priceNa = style({
  color: '#c7d5e0',
  fontSize: '1.125rem',
  fontWeight: 600,
});
