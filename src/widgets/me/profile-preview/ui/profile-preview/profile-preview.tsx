'use client';

import Link from 'next/link';
import cn from 'classnames';

import { AvatarCircle, useGetUserQuery } from '@/entities/user';
import * as styles from './profile-preview.css';

type ProfilePreviewProps = {
  id?: string;
  className?: string;
};

export default function ProfilePreview({
  className,
  ...props
}: ProfilePreviewProps) {
  const composedRootClassName = cn(styles.profilePreview, className);

  const { data: user } = useGetUserQuery();

  // TODO: 로딩, 에러 처리
  if (!user) {
    return null;
  }

  return (
    <div className={composedRootClassName} {...props}>
      <div>
        <AvatarCircle user={user} size={64} />
      </div>
      <div className={styles.descriptionArea}>
        <div className={styles.username}>{user.name}</div>
        <div>
          <Link href="/profile" className={styles.profileEditLink}>
            프로필 상세
          </Link>
        </div>
      </div>
    </div>
  );
}
