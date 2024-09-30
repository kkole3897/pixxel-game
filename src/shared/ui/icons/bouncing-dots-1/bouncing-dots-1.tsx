import { forwardRef } from 'react';

import { CommonSvgIconProps } from '../types';

type BouncingDots1Props = CommonSvgIconProps & {
  /**
   * @defaultValue 24
   */
  size?: number;
  /**
   * @defaultValue `currentColor`
   */
  color?: string;
};

const BouncingDots1 = forwardRef<SVGSVGElement, BouncingDots1Props>(
  ({ size = 24, color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        {...props}
        width={size}
        height={size}
        fill={color}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        ref={forwardedRef}
      >
        <circle cx="4" cy="12" r="3">
          <animate
            id="spinner_qFRN"
            begin="0;spinner_OcgL.end+0.25s"
            attributeName="cy"
            calcMode="spline"
            dur="0.6s"
            values="12;6;12"
            keySplines=".33,.66,.66,1;.33,0,.66,.33"
          />
        </circle>
        <circle cx="12" cy="12" r="3">
          <animate
            begin="spinner_qFRN.begin+0.1s"
            attributeName="cy"
            calcMode="spline"
            dur="0.6s"
            values="12;6;12"
            keySplines=".33,.66,.66,1;.33,0,.66,.33"
          />
        </circle>
        <circle cx="20" cy="12" r="3">
          <animate
            id="spinner_OcgL"
            begin="spinner_qFRN.begin+0.2s"
            attributeName="cy"
            calcMode="spline"
            dur="0.6s"
            values="12;6;12"
            keySplines=".33,.66,.66,1;.33,0,.66,.33"
          />
        </circle>
      </svg>
    );
  }
);

BouncingDots1.displayName = 'BouncingDots1';

export default BouncingDots1;
