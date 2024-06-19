import { style } from '@vanilla-extract/css';

export const avatarContainer = style({
  display: 'inline-flex',
  overflow: 'hidden',
  borderRadius: '50%',
});

export const avatarImage = style({
  objectFit: 'cover',
});
