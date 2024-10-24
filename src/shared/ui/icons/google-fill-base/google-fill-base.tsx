import { forwardRef, useId } from 'react';
import { CommonSvgIconProps } from '../types';

type GoogleFileBaseProps = CommonSvgIconProps & {
  /**
   * @defaultValue 24
   */
  size?: number;
};

const GoogleFillBase = forwardRef<SVGSVGElement, GoogleFileBaseProps>(
  ({ size = 24, ...props }, forwardedRef) => {
    const maskId = useId();

    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={forwardedRef}
      >
        <mask
          id={maskId}
          style={{ maskType: 'luminance' }}
          maskUnits="userSpaceOnUse"
          x="2"
          y="2"
          width="20"
          height="20"
        >
          <path d="M22 2H2V22H22V2Z" fill="white" />
        </mask>
        <g mask={`url(#${maskId})`}>
          <path
            d="M21.6 12.2274C21.6 11.5183 21.5364 10.8365 21.4182 10.1819H12V14.0501H17.3818C17.15 15.3001 16.4455 16.3592 15.3864 17.0683V19.5774H18.6182C20.5091 17.8365 21.6 15.2728 21.6 12.2274Z"
            fill="#4285F4"
          />
          <path
            d="M12.0001 21.9999C14.7001 21.9999 16.9637 21.1044 18.6182 19.5772L15.3864 17.0681C14.491 17.6681 13.3455 18.0226 12.0001 18.0226C9.39552 18.0226 7.19102 16.2635 6.40462 13.8999H3.06372V16.4908C4.70922 19.759 8.09102 21.9999 12.0001 21.9999Z"
            fill="#34A853"
          />
          <path
            d="M6.4045 13.8999C6.2045 13.2999 6.0909 12.659 6.0909 11.9999C6.0909 11.3408 6.2045 10.6999 6.4045 10.0999V7.50903H3.0636C2.3864 8.85903 2 10.3863 2 11.9999C2 13.6135 2.3864 15.1408 3.0636 16.4908L6.4045 13.8999Z"
            fill="#FBBC04"
          />
          <path
            d="M12.0001 5.9773C13.4682 5.9773 14.7864 6.4818 15.8228 7.4727L18.691 4.6045C16.9592 2.9909 14.6955 2 12.0001 2C8.09102 2 4.70922 4.2409 3.06372 7.5091L6.40462 10.1C7.19102 7.7364 9.39552 5.9773 12.0001 5.9773Z"
            fill="#E94235"
          />
        </g>
      </svg>
    );
  }
);

GoogleFillBase.displayName = 'GoogleFillBase';

export default GoogleFillBase;
