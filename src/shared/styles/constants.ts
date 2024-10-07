export const breakpoint = {
  xs: '320px',
  sm: '480px',
  md: '768px',
  lg: '1024px',
  xl: '1440px',
} as const;

export const screen = {
  xs: `(min-width: ${breakpoint.xs})`,
  sm: `(min-width: ${breakpoint.sm})`,
  md: `(min-width: ${breakpoint.md})`,
  lg: `(min-width: ${breakpoint.lg})`,
  xl: `(min-width: ${breakpoint.xl})`,
} as const;
