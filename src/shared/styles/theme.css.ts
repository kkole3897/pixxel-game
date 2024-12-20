import { createGlobalTheme } from '@vanilla-extract/css';

export const theme = createGlobalTheme(':root', {
  colors: {
    blue: {
      50: '#fff',
      100: '#e5f1ff',
      200: '#9cbfe8',
      300: '#6b9fdd',
      400: '#397fd1',
      500: '#3786fb',
      600: '#064c9e',
      700: '#053977',
      800: '#03264f',
      900: '#021328',
      950: '#000000',
    },
    gray: {
      50: '#fff',
      100: '#f4f4f4',
      200: '#cccdd0',
      300: '#b3b5b9',
      400: '#999ca1',
      500: '#80838a',
      600: '#676a73',
      700: '#4d515b',
      800: '#343944',
      900: '#1a202c',
      950: '#010715',
    },
    red: {
      50: '#fdf4f4',
      100: '#fce9e9',
      200: '#f9d2d2',
      300: '#f6bcbc',
      400: '#f3a5a5',
      500: '#f08f8f',
      600: '#f08f8f',
      700: '#e96262',
      800: '#e64b4b',
      900: '#e33434',
      950: '#e01e1e',
    },
    yellow: {
      50: '#fffaf4',
      100: '#fff6e8',
      200: '#feecd1',
      300: '#fee3ba',
      400: '#fed9a3',
      500: '#fed08c',
      600: '#fdc775',
      700: '#fdbd5e',
      800: '#fdb447',
      900: '#fcaa30',
      950: '#fca119',
    },
    green: {
      50: '#f3fdf7',
      100: '#e7fcef',
      200: '#cff8e0',
      300: '#b8f5d0',
      400: '#a0f1c0',
      500: '#88eeb1',
      600: '#70eba1',
      700: '#58e791',
      800: '#41e481',
      900: '#29e072',
      950: '#0cc857',
    },
    sky: {
      50: '#f3fafe',
      100: '#e7f4fe',
      200: '#cfe9fc',
      300: '#b7dffb',
      400: '#9fd4f9',
      500: '#88c9f8',
      600: '#70bef7',
      700: '#58b3f5',
      800: '#40a9f4',
      900: '#289ef2',
      950: '#1093f1',
    },
  },
  fontSize: {
    '3xs': '0.5rem',
    '2xs': '0.625rem',
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.25rem',
    xl: '1.5rem',
    '2xl': '1.75rem',
    '3xl': '2.25rem',
    '4xl': '2.625rem',
  },
  lineHeight: {
    '3xs': '1rem',
    '2xs': '1rem',
    xs: '1.125rem',
    sm: '1.25rem',
    base: '1.5rem',
    lg: '1.75rem',
    xl: '2.25rem',
    '2xl': '2.375rem',
    '3xl': '2.875rem',
    '4xl': '3.375rem',
  },
  fontWeight: {
    thin: '100',
    extralight: '200',
    light: '300',
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
});
