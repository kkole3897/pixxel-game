import { style } from '@vanilla-extract/css';

export const contentBox = style({
  padding: '16px',
});

export const contentTitle = style({
  marginBottom: '12px',
  fontSize: '1.125rem',
  fontWeight: '600',
});

export const contentDivider = style({
  height: '4px',
  background: '#eaedef',
});

export const gameTitle = style({
  marginBottom: '4px',
  fontSize: '1.5rem',
  fontWeight: 'bold',
});

export const genreArea = style({
  marginTop: '8px',
});

export const genreTitle = style({
  marginBottom: '4px',
  fontSize: '1.125rem',
});

export const genreList = style({
  display: 'flex',
  gap: '4px',
});

export const reviewSites = style({
  display: 'flex',
  columnGap: '28px',
});

export const reviewSiteName = style({
  marginBottom: '8px',
});

export const reviewSiteScores = style({
  display: 'flex',
  columnGap: '8px',
});

export const reviewSiteLink = style({
  textDecoration: 'none',
});

export const steamScoreArea = style({
  marginTop: '20px',
});

export const descriptionContainer = style({
  marginTop: '24px',
});
