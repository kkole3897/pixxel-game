import { style, type StyleRule } from '@vanilla-extract/css';

export const truncate = (
  textOverflow: StyleRule['textOverflow'] = 'ellipsis'
) =>
  style({
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow,
  });

type ClampLineOptions = {
  /**
   * @default 'ellipsis'
   */
  textOverflow?: StyleRule['textOverflow'];
};

// 지원 브라우저 범위 넓히면 수정 필요
export const clampLine = (
  line: number,
  { textOverflow = 'ellipsis' }: ClampLineOptions = {}
) => {
  return style({
    display: '-webkit-box',
    WebkitLineClamp: line,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow,
  });
};
