import { createClient as createBrowserClient } from '@/shared/lib/supabase/client';
import { google } from '@/shared/config';

export async function loginByGoogle() {
  const supabase = createBrowserClient();

  console.log(google.redirectUri);

  await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: google.redirectUri,
    },
  });
}
