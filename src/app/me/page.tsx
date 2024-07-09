import { Metadata } from 'next';
import { QueryClient } from '@tanstack/react-query';

import { Core } from '@/shared/api';
import { createClient } from '@/shared/lib/supabase/server';
import { ProfilePreview } from '@/widgets/me/profile-preview';
import { userQueryKeys } from '@/entities/user';
import { MyPageHeader } from '@/widgets/me/header';
import { MyPageMenu } from '@/widgets/me/menu';
import * as styles from './page.css';

export const metadata: Metadata = {
  title: '마이페이지 - Pixxel Game',
  openGraph: {
    title: '마이페이지 - Pixxel Game',
  },
  twitter: {
    title: '마이페이지 - Pixxel Game',
  },
};

export default async function Page() {
  const queryClient = new QueryClient();
  const core = new Core(createClient());

  await queryClient.prefetchQuery({
    queryKey: userQueryKeys.getUser.queryKey,
    queryFn: () => core.auth.getUser(),
  });

  return (
    <div>
      <MyPageHeader />
      <div className={styles.profileArea}>
        <ProfilePreview />
      </div>
      <div>
        <MyPageMenu />
      </div>
    </div>
  );
}
