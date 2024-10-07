import React, { forwardRef } from 'react';
import { CommonSvgIconProps } from '../types';

type SpinnerRing1Props = CommonSvgIconProps & {
  /**
   * @defaultValue 24
   */
  size?: number;
  /**
   * @defaultValue `currentColor`
   */
  color?: string;
};

const SpinnerRing1 = forwardRef<SVGSVGElement, SpinnerRing1Props>(
  ({ size = 24, color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        ref={forwardedRef}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill={color}
        {...props}
      >
        <path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z">
          <animateTransform
            attributeName="transform"
            type="rotate"
            dur="0.75s"
            values="0 12 12;360 12 12"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    );
  }
);

SpinnerRing1.displayName = 'SpinnerRing1';

export default SpinnerRing1;
