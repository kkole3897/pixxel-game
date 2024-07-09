import { redirect } from 'next/navigation';

import { createClient } from '@/shared/lib/supabase/server';
import {
  convertGoogleCallbackSearchParams,
  type GoogleCallbackSearchParams,
  type GoogleCallbackResult,
} from '@/features/auth/by-google';
import { toURLSearchParamsObject } from '@/shared/lib/object';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const { searchParams } = url;
  const searchParamsObj: GoogleCallbackSearchParams =
    toURLSearchParamsObject(searchParams);

  let kakaoCallbackSearchParams: GoogleCallbackResult;
  try {
    kakaoCallbackSearchParams =
      convertGoogleCallbackSearchParams(searchParamsObj);
  } catch {
    redirect('/oauth/google/error');
  }

  const { code } = kakaoCallbackSearchParams;

  if (code) {
    const supabase = createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      return redirect('/');
    }
  }

  return redirect('/oauth/google/error');
}
