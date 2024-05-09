import { cookies } from 'next/headers';
import dayjs from 'dayjs';
import jwt from 'jsonwebtoken';

import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '../constants';
import { ViewerSchema, type Viewer } from './viewer';

type SaveParams = {
  accessToken: string;
  accessTokenExpireAt: string;
  refreshToken: string;
  refreshTokenExpireAt: string;
};

export function save({
  accessToken,
  accessTokenExpireAt,
  refreshToken,
  refreshTokenExpireAt,
}: SaveParams) {
  const cookieStore = cookies();

  const accessTokenMaxAge = dayjs(accessTokenExpireAt).diff(dayjs(), 'seconds');
  cookieStore.set(ACCESS_TOKEN_KEY, accessToken, {
    maxAge: accessTokenMaxAge,
    httpOnly: true,
    sameSite: 'lax',
  });
  const refreshTokenMaxAge = dayjs(refreshTokenExpireAt).diff(
    dayjs(),
    'seconds'
  );
  cookieStore.set(REFRESH_TOKEN_KEY, refreshToken, {
    maxAge: refreshTokenMaxAge,
    httpOnly: true,
    sameSite: 'lax',
  });
}

export function destroy() {
  const cookieStore = cookies();

  const accessTokenCookie = cookieStore.get(ACCESS_TOKEN_KEY);

  if (!!accessTokenCookie) {
    cookieStore.delete(ACCESS_TOKEN_KEY);
  }

  const refreshTokenCookie = cookieStore.get(REFRESH_TOKEN_KEY);

  if (!!refreshTokenCookie) {
    cookieStore.delete(REFRESH_TOKEN_KEY);
  }
}

export function getAccessToken() {
  const cookieStore = cookies();

  const accessToken = cookieStore.get(ACCESS_TOKEN_KEY)?.value;

  return accessToken;
}

export function getUser(): Viewer | null {
  const accessToken = getAccessToken();

  if (accessToken === undefined) {
    return null;
  }

  const payload = jwt.decode(accessToken);

  if (typeof payload === 'string' || payload === undefined) {
    return null;
  }

  const viewer = {
    id: payload?.sub,
    role: payload?.role,
  };

  const validateResult = ViewerSchema.safeParse(viewer);

  if (!validateResult.success) {
    return null;
  }

  return validateResult.data;
}
