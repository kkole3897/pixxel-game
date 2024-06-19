import cn from 'classnames';
import Image from 'next/image';

import * as styles from './avatar-circle.css';

export type AvatarCircleProps = {
  src: string;
  alt: string;
  /**
   * @default 48
   */
  size?: number;
  className?: string;
};

export default function AvatarCircle({
  src,
  alt,
  ...props
}: AvatarCircleProps) {
  const { size = 48, className } = props;

  const composedRootClassName = cn(className, styles.avatarContainer);

  return (
    <div className={composedRootClassName}>
      <Image src={src} width={size} height={size} alt={alt} />
    </div>
  );
}
