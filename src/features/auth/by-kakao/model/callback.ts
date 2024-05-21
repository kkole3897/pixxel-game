import { z } from 'zod';
import { redirect } from 'next/navigation';

import { ServerSession, TempServerSession } from '@/entities/session';

export type KakaoCallbackSearchParams = { [key: string]: string | undefined };

export const KakaoCallbackResultSchema = z.object({
  code: z.string(),
});

export type KakaoCallbackResult = z.infer<typeof KakaoCallbackResultSchema>;

export function convertKakaoCallbackSearchParams(
  searchParams: KakaoCallbackSearchParams
): KakaoCallbackResult {
  const validated = KakaoCallbackResultSchema.parse(searchParams);

  return validated;
}

export const OauthRegistrationCompleteSchema = z.object({
  isRegistrationCompleted: z.literal(true),
  accessToken: z.string(),
  accessTokenExpireAt: z.string().datetime(),
  refreshToken: z.string(),
  refreshTokenExpireAt: z.string().datetime(),
});

export type OauthRegistrationComplete = z.infer<
  typeof OauthRegistrationCompleteSchema
>;

export const OauthRegistrationRequireSchema = z.object({
  isRegistrationCompleted: z.literal(false),
  accessToken: z.string(),
  accessTokenExpireAt: z.string().datetime(),
});

export type OauthRegistrationRequire = z.infer<
  typeof OauthRegistrationRequireSchema
>;
