import { coreApiUrl } from '@/shared/config';

export type RegistrationCompleteResponse = {
  isRegistrationCompleted: true;
  accessToken: string;
  accessTokenExpireAt: string;
  refreshToken: string;
  refreshTokenExpireAt: string;
};

export type RegistrationRequireResponse = {
  isRegistrationCompleted: false;
  accessToken: string;
  accessTokenExpireAt: string;
};

export type LoginResponse =
  | RegistrationCompleteResponse
  | RegistrationRequireResponse;

export async function loginByKakao(code: string): Promise<LoginResponse> {
  const uri = `${coreApiUrl}/auth/kakao`;

  const body = JSON.stringify({ code });

  const response = await fetch(uri, {
    method: 'POST',
    body,
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  });

  if (!response.ok) {
    // TODO: error 구체화
    throw new Error();
  }

  const data = await response.json();

  return data;
}
