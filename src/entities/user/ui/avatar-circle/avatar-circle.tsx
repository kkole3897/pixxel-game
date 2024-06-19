import cn from 'classnames';
import { ImageWithFallback } from '@/shared/ui/image-with-fallback';

import * as styles from './avatar-circle.css';
import { User } from '../../models';
import DefaultAvatarImage from '~/public/images/user-avatar-640x640.png';

export type AvatarCircleProps = {
  user: Pick<User, 'avatarUrl' | 'name'>;
  /**
   * @default 48
   */
  size?: number;
  className?: string;
};

export default function AvatarCircle({ user, ...props }: AvatarCircleProps) {
  const { size = 48, className } = props;

  const composedRootClassName = cn(className, styles.avatarContainer);

  return (
    <div className={composedRootClassName}>
      <ImageWithFallback
        src={null}
        fallbackSrc={DefaultAvatarImage}
        width={size}
        height={size}
        alt={user.name}
      />
    </div>
  );
}
