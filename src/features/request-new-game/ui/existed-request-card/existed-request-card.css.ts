import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { text } from '@/shared/styles/typography.css';
import { theme } from '@/shared/styles/theme.css';

export const card = style({
  display: 'block',
  width: '100%',
  maxWidth: '480px',
  overflow: 'hidden',
  border: `1px solid ${theme.colors.gray[100]}`,
  borderRadius: '12px',
});

export const mediaArea = style({
  position: 'relative',
  aspectRatio: '480 / 270',
});

export const mainImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const contentArea = style({
  padding: '12px',
});

export const title = style([
  text.base,
  {
    fontWeight: theme.fontWeight.medium,
  },
]);

export const tagArea = style({
  marginBottom: '4px',
});

export const statusBadge = recipe({
  base: [
    text.sm,
    {
      display: 'inline-block',
      padding: '0 8px',
      borderRadius: '999px',
      fontWeight: theme.fontWeight.medium,
    },
  ],
  variants: {
    status: {
      processing: {
        backgroundColor: '#fdedd3',
        color: theme.colors.yellow[950],
      },
      completed: {
        backgroundColor: '#ceebff',
        color: theme.colors.blue[500],
      },
    },
  },
});

export const descriptionArea = style({
  marginTop: '4px',
});

export const descriptionListItem = style({
  display: 'flex',
  columnGap: '4px',
});

export const descriptionKey = style([
  text.sm,
  {
    color: theme.colors.gray[600],
  },
]);

export const descriptionValue = style([
  text.sm,
  {
    color: theme.colors.gray[600],
  },
]);

export const footerArea = style({
  padding: '0 12px 8px',
});

export const storeUrl = style([
  text.sm,
  {
    display: 'flex',
    alignItems: 'center',
    columnGap: '4px',
    color: theme.colors.gray[400],
  },
]);

export const storeLinkIcon = style({
  marginTop: '-2px',
});
