import { style, StyleRule } from '@vanilla-extract/css';

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
   * @defaultValue 'ellipsis'
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

export const visuallyHiddenRule: StyleRule = {
  position: 'absolute',
  overflow: 'hidden',
  width: '1px',
  height: '1px',
  margin: '-1px',
  padding: '0',
  borderWidth: '0',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
};

export const visuallyHidden = style(visuallyHiddenRule);
