import { cookies } from 'next/headers';

import { coreApi } from '@/src/shared/api';

export type KakaoAuthResponse =
  | {
      isRegistrationCompleted: true;
      accessToken: string;
      accessTokenExpireAt: string;
      refreshToken: string;
      refreshTokenExpireAt: string;
    }
  | {
      isRegistrationCompleted: false;
      accessToken: string;
      accessTokenExpireAt: string;
    };

export async function POST(request: Request) {
  const response = await coreApi('/auth/kakao', request);

  if (!response.ok) {
    throw new Error();
  }

  const data: KakaoAuthResponse = await response.json();

  if (data.isRegistrationCompleted === true) {
    const {
      accessToken,
      refreshToken,
      accessTokenExpireAt,
      refreshTokenExpireAt,
    } = data;

    const accessTokenMaxAge =
      new Date(accessTokenExpireAt).getTime() - Date.now();
    cookies().set('accessToken', accessToken, {
      httpOnly: true,
      maxAge: accessTokenMaxAge,
    });
    const refreshTokenMaxAge =
      new Date(refreshTokenExpireAt).getTime() - Date.now();
    cookies().set('refreshToken', refreshToken, {
      httpOnly: true,
      maxAge: refreshTokenMaxAge,
    });

    return Response.json(
      { isRegistrationCompleted: true },
      { status: response.status }
    );
  }

  const { accessToken, accessTokenExpireAt } = data;

  const accessTokenMaxAge =
    new Date(accessTokenExpireAt).getTime() - Date.now();
  cookies().set('accessToken', accessToken, {
    httpOnly: true,
    maxAge: accessTokenMaxAge,
  });

  return Response.json(
    { isRegistrationCompleted: false },
    { status: response.status }
  );
}
