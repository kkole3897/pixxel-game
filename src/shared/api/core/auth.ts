import { z } from 'zod';

import { coreApiUrl } from '@/shared/config';

const RegistrationComplete = z.object({
  isRegistrationCompleted: z.literal(true),
  accessToken: z.string(),
  accessTokenExpireAt: z.string().datetime(),
  refreshToken: z.string(),
  refreshTokenExpireAt: z.string().datetime(),
});

const RegistrationRequire = z.object({
  isRegistrationCompleted: z.literal(false),
  accessToken: z.string(),
  accessTokenExpireAt: z.string().datetime(),
});

const LoginByKakaoResponse = z.union([
  RegistrationComplete,
  RegistrationRequire,
]);

export async function loginByKakao(code: string) {
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
  const validatedData = LoginByKakaoResponse.parse(data);

  return validatedData;
}
