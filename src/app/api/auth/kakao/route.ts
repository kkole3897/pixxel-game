import { cookies } from 'next/headers';

import { core } from '@/shared/api';

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
  const body = await request.json();

  const data = await core.auth.loginByKakao(body.code);

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

    return Response.json({ isRegistrationCompleted: true });
  }

  const { accessToken, accessTokenExpireAt } = data;

  const accessTokenMaxAge =
    new Date(accessTokenExpireAt).getTime() - Date.now();
  cookies().set('accessToken', accessToken, {
    httpOnly: true,
    maxAge: accessTokenMaxAge,
  });

  return Response.json({ isRegistrationCompleted: false });
}
