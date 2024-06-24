'use client';

import cn from 'classnames';

import { AvatarCircle, useGetUserQuery } from '@/entities/user';
import * as styles from './profile-detail-section.css';

const authProviderTextMap = {
  kakao: '카카오',
};

type ProfileDetailSectionProps = {
  className?: string;
};

export default function ProfileDetailSection({
  className,
}: ProfileDetailSectionProps) {
  const { data: user } = useGetUserQuery();

  if (!user) {
    return null;
  }

  const composedRootClassName = cn(styles.section, className);

  return (
    <section className={composedRootClassName}>
      <AvatarCircle user={user} size={80} className={styles.avatar} />
      <div className={styles.descriptionArea}>
        <div className={styles.descriptionCell}>
          <div className={styles.descriptionCellTitle}>이름</div>
          <div className={styles.descriptionCellValue}>{user.name}</div>
        </div>
        <div className={styles.descriptionCell}>
          <div className={styles.descriptionCellTitle}>이메일</div>
          <div className={styles.descriptionCellValue}>{user.email}</div>
        </div>
      </div>
      {user.providers.length > 0 && (
        <div className={styles.descriptionArea}>
          <div className={styles.descriptionCell}>
            <div className={styles.descriptionCellTitle}>연결된 소셜 계정</div>
            <div className={styles.descriptionCellValue}>
              {authProviderTextMap[user.providers[0]]}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
