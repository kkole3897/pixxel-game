import localFont from 'next/font/local';

export const base = localFont({
  src: './pretendard-variable.woff2',
  fallback: [
    'Pretendard Variable',
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
  weight: '45 920',
  variable: '--font-base',
});

console.log(base.style.fontFamily);

export const serif = localFont({
  src: './pretendard-variable.woff2',
  fallback: [
    'Pretendard Variable',
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
  weight: '45 920',
  variable: '--font-serif',
});
