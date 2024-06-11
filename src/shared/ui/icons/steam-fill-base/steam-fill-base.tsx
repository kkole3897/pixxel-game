import { forwardRef, useId } from 'react';

type SteamFillBaseProps = {
  /**
   * @default 24
   */
  size?: string | number;
  className?: string;
};
const SteamFillBase = forwardRef<SVGSVGElement, SteamFillBaseProps>(
  ({ size = 24, ...props } = {}, forwardedRef) => {
    const clipPathId = useId();
    const gradientId = useId();

    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={forwardedRef}
        {...props}
      >
        <g clipPath={`url(#${clipPathId})`}>
          <path
            d="M2.41318 14.8755C3.64863 18.9957 7.47034 22 11.9926 22C17.5162 22 21.9934 17.5227 21.9934 12C21.9934 6.47725 17.5162 2 11.9934 2C6.69386 2 2.35738 6.12275 2.01489 11.3356C2.66296 12.4223 2.91463 13.0944 2.41335 14.8755H2.41318Z"
            fill={`url(#${gradientId})`}
          />
          <path
            d="M11.4782 9.49529L11.4791 9.54467L9.03225 13.0994C8.636 13.0812 8.2385 13.1509 7.861 13.3062C7.69475 13.374 7.53912 13.4572 7.39287 13.5531L2.01943 11.3415C2.01943 11.3415 1.89506 13.3872 2.41318 14.9115L6.21193 16.479C6.39943 17.3315 6.98693 18.079 7.85006 18.4384C8.5291 18.7206 9.29237 18.7217 9.97223 18.4415C10.6521 18.1613 11.1929 17.6227 11.476 16.944C11.6291 16.5753 11.7001 16.1878 11.6897 15.8015L15.1907 13.3L15.2766 13.3015C17.3719 13.3015 19.0751 11.5934 19.0751 9.49529C19.0746 8.48749 18.6744 7.52102 17.9623 6.80784C17.2503 6.09466 16.2844 5.69299 15.2766 5.69092C13.1822 5.69092 11.4782 7.39717 11.4782 9.49529ZM10.8907 16.6984C10.4363 17.789 9.18256 18.3069 8.09287 17.8528C7.58975 17.6434 7.21068 17.2597 6.99162 16.8022L8.22818 17.3147C8.41921 17.3942 8.62403 17.4353 8.83094 17.4356C9.03785 17.4359 9.2428 17.3955 9.43408 17.3166C9.62536 17.2377 9.79921 17.1219 9.94571 16.9757C10.0922 16.8296 10.2085 16.6561 10.2879 16.465C10.4486 16.0789 10.4496 15.6448 10.2905 15.258C10.1314 14.8712 9.82532 14.5634 9.43943 14.4022L8.15818 13.8725C8.65131 13.685 9.21193 13.6787 9.73631 13.8965C10.2676 14.1162 10.6738 14.53 10.8913 15.059C11.1088 15.5881 11.1076 16.1715 10.8882 16.6984M15.2769 12.0312C13.8819 12.0312 12.7463 10.8937 12.7463 9.49592C12.747 8.82461 13.0138 8.18095 13.4881 7.70588C13.9624 7.23081 14.6056 6.96305 15.2769 6.96123C15.9483 6.96288 16.5917 7.23057 17.0662 7.70566C17.5406 8.18074 17.8074 8.8245 17.8082 9.49592C17.8076 10.1674 17.5409 10.8114 17.0664 11.2866C16.5919 11.7618 15.9485 12.0296 15.2769 12.0312ZM13.3807 9.49186C13.3807 8.43998 14.2322 7.58717 15.2807 7.58717C16.3291 7.58717 17.1819 8.44029 17.1819 9.49186C17.1822 9.99643 16.982 10.4805 16.6255 10.8375C16.269 11.1946 15.7853 11.3954 15.2807 11.3959C14.7763 11.3952 14.2928 11.1942 13.9365 10.8372C13.5801 10.4802 13.3804 9.99627 13.3807 9.49186Z"
            fill="white"
          />
        </g>
        <defs>
          <linearGradient
            id={gradientId}
            x1="12.0042"
            y1="2"
            x2="12.0042"
            y2="22"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#111D2E" />
            <stop offset="0.212" stopColor="#051839" />
            <stop offset="0.407" stopColor="#0A1B48" />
            <stop offset="0.581" stopColor="#132E62" />
            <stop offset="0.738" stopColor="#144B7E" />
            <stop offset="0.873" stopColor="#136497" />
            <stop offset="1" stopColor="#1387B8" />
          </linearGradient>
          <clipPath id={clipPathId}>
            <rect
              width="20"
              height="20"
              fill="white"
              transform="translate(2 2)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  }
);

SteamFillBase.displayName = 'SteamGradientFill';

export default SteamFillBase;
