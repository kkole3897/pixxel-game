import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { theme } from '@/shared/styles/theme.css';
import { text } from '@/shared/styles/typography.css';

export const bottomNav = style({
  display: 'flex',
  position: 'sticky',
  bottom: 0,
  width: '100%',
  borderRadius: '8px 8px 0 0',
  background: theme.colors.gray[50],
  zIndex: 10,
  boxShadow: '0 4px 24px 0 rgba(0, 0, 0, 0.15)',
});

export const navItem = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2px',
    flex: 1,
    height: '60px',
    color: theme.colors.gray[700],
    textDecoration: 'none',
  },
  variants: {
    active: {
      true: {
        color: theme.colors.blue[500],
      },
    },
  },
  defaultVariants: {
    active: false,
  },
});

export const navLabel = style([text.xs]);
