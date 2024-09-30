import { forwardRef } from 'react';

import { CommonSvgIconProps } from '../types';

interface SpeechBubbleProps extends CommonSvgIconProps {
  /**
   * @defaultValue '#000000'
   */
  color?: string;

  /**
   * @defaultValue 24
   */
  size?: string | number;
  className?: string;
}

const SpeechBubble = forwardRef<SVGSVGElement, SpeechBubbleProps>(
  ({ size = 24, color = '#000000', ...props } = {}, forwaredRef) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        ref={forwaredRef}
        {...props}
      >
        <path d="M12 5C8.15 5 5 7.42114 5 10.428C5 12.3024 6.20556 13.9816 8.07223 14.9579L7.29445 17.8085C7.21668 18.0819 7.48889 18.2771 7.72222 18.1209L11.1056 15.856C11.4167 15.882 11.7148 15.8951 12 15.8951C15.85 15.8951 19 13.4739 19 10.428C19 7.42114 15.85 5 12 5Z" />
      </svg>
    );
  }
);

SpeechBubble.displayName = 'KakaoSpeechBubbleFill';

export default SpeechBubble;
