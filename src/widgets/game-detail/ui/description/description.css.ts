import { style, globalStyle, styleVariants } from '@vanilla-extract/css';

import { theme } from '@/shared/styles/theme.css';
import { text } from '@/shared/styles/typography.css';

export const description = style({
  position: 'relative',
});

const collapsibleBase = style({
  overflow: 'hidden',
});

export const collapsible = styleVariants({
  collapsed: [
    collapsibleBase,
    {
      maxHeight: '850px',
    },
  ],
  opened: [
    collapsibleBase,
    {
      maxHeight: 'auto',
    },
  ],
});

export const collapseControlBase = style({});

export const collapseControl = styleVariants({
  collapsed: [
    collapseControlBase,
    {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: 0,
      height: '100px',
      background:
        'linear-gradient(rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 100%)',
    },
  ],
  opened: [collapseControlBase, {}],
});

export const collapseControlButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '40px',
  padding: 0,
  border: 0,
  backgroundColor: 'transparent',
  color: '#777',
  cursor: 'pointer',
});

export const content = style([
  text.sm,
  {
    color: theme.colors.gray[600],
  },
]);

globalStyle(`${content} h2`, {
  marginTop: '12px',
  color: theme.colors.gray[900],
  fontSize: theme.fontSize.base,
  fontWeight: theme.fontWeight.semibold,
  lineHeight: theme.lineHeight.base,
});

globalStyle(`${content} strong`, {
  fontWeight: theme.fontWeight.semibold,
});

globalStyle(`${content} i`, {
  fontStyle: 'italic',
});

globalStyle(`${content} img`, {
  display: 'inline-block',
  width: 'auto',
  maxWidth: '100%',
  height: 'auto',
});

globalStyle(`${content} a`, {
  color: theme.colors.gray[900],
  textDecoration: 'none',
});
globalStyle(`${content} a:hover`, {
  color: theme.colors.blue[500],
});

globalStyle(`${content} ul`, {
  marginLeft: '16px',
  listStyleType: 'disc',
});

globalStyle(`${content} ol`, {
  marginLeft: '16px',
  listStyleType: 'decimal',
});

globalStyle(`${content} li`, {
  marginBottom: '8px',
  listStylePosition: 'outside',
});
