import { z } from 'zod';

import type { OauthLoginResponse } from '@/shared/api/core';

import {
  OauthRegistrationCompleteSchema,
  OauthRegistrationRequireSchema,
} from '../model';

export const OauthLoginResultSchema = z.union([
  OauthRegistrationCompleteSchema,
  OauthRegistrationRequireSchema,
]);
export type OauthLoginResult = z.infer<typeof OauthLoginResultSchema>;

export function convertOauthLoginResponse(
  oauthLoginResponse: OauthLoginResponse
): OauthLoginResult {
  const converted = OauthLoginResultSchema.parse(oauthLoginResponse);

  return converted;
}
