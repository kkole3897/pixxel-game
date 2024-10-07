import {
  createGlobalTheme,
  createGlobalThemeContract,
  globalFontFace,
} from '@vanilla-extract/css';

const pretendardFont = 'Pretendard';

globalFontFace(pretendardFont, [
  {
    src: 'url(../public/fonts/Pretendard-Black.subset.woff2)',
    fontWeight: '900',
  },
  {
    src: 'url(../public/fonts/Pretendard-ExtraBold.subset.woff2)',
    fontWeight: '800',
  },
  {
    src: 'url(../public/fonts/Pretendard-Bold.subset.woff2)',
    fontWeight: '700',
  },
  {
    src: 'url(../public/fonts/Pretendard-SemiBold.subset.woff2)',
    fontWeight: '600',
  },
  {
    src: 'url(../public/fonts/Pretendard-Medium.subset.woff2)',
    fontWeight: '500',
  },
  {
    src: 'url(../public/fonts/Pretendard-Regular.subset.woff2)',
    fontWeight: '400',
  },
  {
    src: 'url(../public/fonts/Pretendard-Light.subset.woff2)',
    fontWeight: '300',
  },
  {
    src: 'url(../public/fonts/Pretendard-ExtraLight.subset.woff2)',
    fontWeight: '200',
  },
  {
    src: 'url(../public/fonts/Pretendard-Thin.subset.woff2)',
    fontWeight: '100',
  },
]);

const vars = createGlobalThemeContract({
  font: {
    base: 'font-base',
    serif: 'font-serif',
  },
});

createGlobalTheme(':root', vars, {
  font: {
    base: pretendardFont,
    serif: pretendardFont,
  },
});
