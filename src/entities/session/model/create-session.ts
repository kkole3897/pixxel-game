import { cookies } from 'next/headers';

type CreateSessionParams = {
  refreshToken: string;
  refreshTokenExpireAt: string;
  accessToken: string;
  accessTokenExpireAt: string;
};

export function createSession({
  refreshToken,
  refreshTokenExpireAt,
  accessToken,
  accessTokenExpireAt,
}: CreateSessionParams) {
  const refreshTokenMaxAge = Math.floor(
    (new Date(refreshTokenExpireAt).getTime() - Date.now()) / 1000
  );
  cookies().set('refreshToken', refreshToken, {
    maxAge: refreshTokenMaxAge,
    httpOnly: true,
    sameSite: 'lax',
  });
  const accessTokenMaxAge = Math.floor(
    (new Date(accessTokenExpireAt).getTime() - Date.now()) / 1000
  );
  cookies().set('accessToken', accessToken, {
    maxAge: accessTokenMaxAge,
    httpOnly: true,
    sameSite: 'lax',
  });

  return {
    refreshToken,
    accessToken,
  };
}
