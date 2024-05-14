type CheckLineProps = {
  /**
   * @default '#000000'
   */
  color?: string;

  /**
   * @default 24
   */
  size?: string | number;
  className?: string;
};

export default function CheckLine(props: CheckLineProps) {
  const { color = '#000000', size = 24, ...rest } = props;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M9.9997 15.1709L18.485 6.68562C18.8755 6.2951 19.5087 6.2951 19.8992 6.68563V6.68563C20.2897 7.07615 20.2897 7.70931 19.8992 8.09983L10.7068 17.2922C10.3163 17.6827 9.68312 17.6827 9.29259 17.2922L4.34286 12.3425C3.95233 11.952 3.95233 11.3188 4.34286 10.9283V10.9283C4.73338 10.5378 5.36654 10.5378 5.75706 10.9283L9.9997 15.1709Z" />
    </svg>
  );
}
