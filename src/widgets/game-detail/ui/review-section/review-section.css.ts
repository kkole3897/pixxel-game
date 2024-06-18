import { style } from '@vanilla-extract/css';

import { theme } from '@/shared/styles/theme.css';

export const section = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px 24px',
});

export const reviewSiteArea = style({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '2px',
  flexShrink: 0,
  position: 'relative',
});

export const reviewSiteAreaGrow = style([
  reviewSiteArea,
  {
    flexGrow: 1,
  },
]);

export const reviewSiteName = style([
  {
    color: theme.colors.gray[400],
  },
]);

export const reviewScoreArea = style({
  display: 'flex',
  gap: '8px',
});
