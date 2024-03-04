import { style, globalStyle, styleVariants } from '@vanilla-extract/css';

export const description = style({
  position: 'relative',
  fontSize: '0.875rem',
  lineHeight: '1.25rem',
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
  fontSize: '1.25rem',
  cursor: 'pointer',
});

globalStyle(`${description} h2`, {
  marginBottom: '12px',
  fontSize: '1rem',
  fontWeight: '600',
  lineHeight: '1.75rem',
});

globalStyle(`${description} img`, {
  width: '100%',
});
