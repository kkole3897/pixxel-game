import { cookies } from 'next/headers';

import { TEMP_TOKEN_KEY } from '../constants';

export function save(token: string) {
  const cookieStore = cookies();

  cookieStore.set(TEMP_TOKEN_KEY, token, { httpOnly: true, sameSite: 'lax' });
}

export function destroy() {
  const cookieStore = cookies();

  const tempTokenCookie = cookieStore.get(TEMP_TOKEN_KEY);

  if (!!tempTokenCookie) {
    cookieStore.delete(TEMP_TOKEN_KEY);
  }
}

export function getToken() {
  const cookieStore = cookies();

  const tempToken = cookieStore.get(TEMP_TOKEN_KEY)?.value;

  return tempToken;
}
