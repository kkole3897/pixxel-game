import { z } from 'zod';

export type GoogleCallbackSearchParams = { [key: string]: string | undefined };

export const GoogleCallbackResultSchema = z.object({
  code: z.string(),
});

export type GoogleCallbackResult = z.infer<typeof GoogleCallbackResultSchema>;

export function convertGoogleCallbackSearchParams(
  searchParams: GoogleCallbackSearchParams
): GoogleCallbackResult {
  const validated = GoogleCallbackResultSchema.parse(searchParams);

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
