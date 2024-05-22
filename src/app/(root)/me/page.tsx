'use client';

import { useRouter } from 'next/navigation';

import { createClient } from '@/shared/lib/supabase/client';

export default function Page() {
  const supabase = createClient();
  const router = useRouter();

  const handleClick = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  return (
    <div>
      <div>me</div>
      <div>
        <button type="button" onClick={handleClick}>
          로그아웃
        </button>
      </div>
    </div>
  );
}
