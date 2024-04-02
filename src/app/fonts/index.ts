import localFont from 'next/font/local';

export const base = localFont({
  src: [
    {
      path: './Pretendard-Black.subset.woff2',
      weight: '900',
    },
    {
      path: './Pretendard-ExtraBold.subset.woff2',
      weight: '900',
    },
    {
      path: './Pretendard-ExtraBold.subset.woff2',
      weight: '800',
    },
    {
      path: './Pretendard-Bold.subset.woff2',
      weight: '700',
    },
    {
      path: './Pretendard-SemiBold.subset.woff2',
      weight: '600',
    },
    {
      path: './Pretendard-Medium.subset.woff2',
      weight: '500',
    },
    {
      path: './Pretendard-Regular.subset.woff2',
      weight: '400',
    },
    {
      path: './Pretendard-Light.subset.woff2',
      weight: '300',
    },
    {
      path: './Pretendard-ExtraLight.subset.woff2',
      weight: '200',
    },
    {
      path: './Pretendard-Thin.subset.woff2',
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
      path: './Pretendard-Black.subset.woff2',
      weight: '900',
    },
    {
      path: './Pretendard-ExtraBold.subset.woff2',
      weight: '900',
    },
    {
      path: './Pretendard-ExtraBold.subset.woff2',
      weight: '800',
    },
    {
      path: './Pretendard-Bold.subset.woff2',
      weight: '700',
    },
    {
      path: './Pretendard-SemiBold.subset.woff2',
      weight: '600',
    },
    {
      path: './Pretendard-Medium.subset.woff2',
      weight: '500',
    },
    {
      path: './Pretendard-Regular.subset.woff2',
      weight: '400',
    },
    {
      path: './Pretendard-Light.subset.woff2',
      weight: '300',
    },
    {
      path: './Pretendard-ExtraLight.subset.woff2',
      weight: '200',
    },
    {
      path: './Pretendard-Thin.subset.woff2',
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
