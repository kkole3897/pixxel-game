import { redirect } from 'next/navigation';

import {
  convertKakaoCallbackSearchParams,
  convertOauthLoginResponse,
  manageRegistrationComplete,
  manageRegistrationRequire,
  type KakaoCallbackSearchParams,
  type KakaoCallbackResult,
  type OauthLoginResult,
} from '@/features/auth/by-kakao';
import { core, type OauthLoginResponse } from '@/shared/api';
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

  let loginResponse: OauthLoginResponse;
  try {
    loginResponse = await core.auth.loginByKakao(code);
  } catch {
    redirect('/oauth/kakao/error');
  }

  let loginResult: OauthLoginResult;
  try {
    loginResult = convertOauthLoginResponse(loginResponse);
  } catch {
    redirect('/oauth/kakao/error');
  }

  if (loginResult.isRegistrationCompleted) {
    manageRegistrationComplete(loginResult);
  } else {
    manageRegistrationRequire(loginResult);
  }

  return Response;
}
