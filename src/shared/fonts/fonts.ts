import localFont from 'next/font/local';

/**
 * TODO: variable font 이슈 해결 후 variable font 적용
 *
 * - next/font/local weight 미지정시 webkit 엔진 브라우저에서 weight 이상하게 렌더링되는 이슈
 * - weight 지정시 storybook에서 classname 적절히 생성 못하는 이슈
 */
export const base = localFont({
  src: [
    {
      path: '../../../public/fonts/Pretendard-Black.subset.woff2',
      weight: '900',
    },
    {
      path: '../../../public/fonts/Pretendard-ExtraBold.subset.woff2',
      weight: '800',
    },
    {
      path: '../../../public/fonts/Pretendard-Bold.subset.woff2',
      weight: '700',
    },
    {
      path: '../../../public/fonts/Pretendard-SemiBold.subset.woff2',
      weight: '600',
    },
    {
      path: '../../../public/fonts/Pretendard-Medium.subset.woff2',
      weight: '500',
    },
    {
      path: '../../../public/fonts/Pretendard-Regular.subset.woff2',
      weight: '400',
    },
    {
      path: '../../../public/fonts/Pretendard-Light.subset.woff2',
      weight: '300',
    },
    {
      path: '../../../public/fonts/Pretendard-ExtraLight.subset.woff2',
      weight: '200',
    },
    {
      path: '../../../public/fonts/Pretendard-Thin.subset.woff2',
      weight: '100',
    },
  ],
  fallback: [
    'Pretendard',
    '-apple-system',
    'BlinkMacSystemFont',
    'system-ui',
    'Roboto',
    'Helvetica Neue',
    'Segoe UI',
    'Apple SD Gothic Neo',
    'Noto Sans KR',
    'Malgun Gothic',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'sans-serif',
  ],
  display: 'swap',
  variable: '--font-base',
});

export const serif = localFont({
  src: [
    {
      path: '../../../public/fonts/Pretendard-Black.subset.woff2',
      weight: '900',
    },
    {
      path: '../../../public/fonts/Pretendard-ExtraBold.subset.woff2',
      weight: '800',
    },
    {
      path: '../../../public/fonts/Pretendard-Bold.subset.woff2',
      weight: '700',
    },
    {
      path: '../../../public/fonts/Pretendard-SemiBold.subset.woff2',
      weight: '600',
    },
    {
      path: '../../../public/fonts/Pretendard-Medium.subset.woff2',
      weight: '500',
    },
    {
      path: '../../../public/fonts/Pretendard-Regular.subset.woff2',
      weight: '400',
    },
    {
      path: '../../../public/fonts/Pretendard-Light.subset.woff2',
      weight: '300',
    },
    {
      path: '../../../public/fonts/Pretendard-ExtraLight.subset.woff2',
      weight: '200',
    },
    {
      path: '../../../public/fonts/Pretendard-Thin.subset.woff2',
      weight: '100',
    },
  ],
  fallback: [
    'Pretendard',
    '-apple-system',
    'BlinkMacSystemFont',
    'system-ui',
    'Roboto',
    'Helvetica Neue',
    'Segoe UI',
    'Apple SD Gothic Neo',
    'Noto Sans KR',
    'Malgun Gothic',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'sans-serif',
  ],
  display: 'swap',
  variable: '--font-serif',
});
