import { createClient as createBrowserClient } from '@/shared/lib/supabase/client';
import { kakao } from '@/shared/config';

export async function loginByKakao() {
  const supabase = createBrowserClient();

  await supabase.auth.signInWithOAuth({
    provider: 'kakao',
    options: {
      redirectTo: kakao.redirectUri,
      queryParams: {
        prompt: 'select_account',
      },
      scopes: 'account_email',
    },
  });
}
