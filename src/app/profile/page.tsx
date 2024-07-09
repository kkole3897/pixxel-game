import { Metadata } from 'next';
import Link from 'next/link';
import { QueryClient } from '@tanstack/react-query';
import { RiArrowLeftSLine } from '@remixicon/react';

import { Core } from '@/shared/api/core';
import { createClient } from '@/shared/lib/supabase/server';
import { userQueryKeys } from '@/entities/user';
import { ProfileDetailSection } from '@/widgets/profile/profile-detail-section';
import {
  DeleteUserButton,
  DeleteUserAlertDialog,
} from '@/features/auth/delete-user';
import * as styles from './page.css';

export const metadata: Metadata = {
  title: '프로필 상세 - Pixxel Game',
  openGraph: {
    title: '프로필 상세 - Pixxel Game',
  },
  twitter: {
    title: '프로필 상세 - Pixxel Game',
  },
};

export default async function ProfilePage() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: userQueryKeys.getUser.queryKey,
    queryFn: () => new Core(createClient()).auth.getUser(),
  });

  return (
    <div>
      <header className={styles.header}>
        <Link href="/me" className={styles.prevLink}>
          <RiArrowLeftSLine className={styles.prevIcon} />
        </Link>
      </header>
      <ProfileDetailSection className={styles.profileDetailSection} />
      <div className={styles.deleteUserArea}>
        <DeleteUserAlertDialog trigger={<DeleteUserButton />} />
      </div>
    </div>
  );
}
