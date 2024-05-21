import { redirect } from 'next/navigation';

import { createServerClient } from '@/shared/lib/supabase';
import {
  convertKakaoCallbackSearchParams,
  type KakaoCallbackSearchParams,
  type KakaoCallbackResult,
} from '@/features/auth/by-kakao';
import { toURLSearchParamsObject } from '@/shared/lib/object';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const { searchParams } = url;
  const searchParamsObj: KakaoCallbackSearchParams =
    toURLSearchParamsObject(searchParams);

  let kakaoCallbackSearchParams: KakaoCallbackResult;
  try {
    kakaoCallbackSearchParams =
      convertKakaoCallbackSearchParams(searchParamsObj);
  } catch {
    redirect('/oauth/kakao/error');
  }

  const { code } = kakaoCallbackSearchParams;

  if (code) {
    const supabase = createServerClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      return redirect('/');
    }
  }

  return redirect('/oauth/kakao/error');
}
