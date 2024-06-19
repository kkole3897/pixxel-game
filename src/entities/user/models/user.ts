import { z } from 'zod';

import { authProviderSchema } from './auth-provider';

export const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  avatarUrl: z.string().url().nullable(),
  provider: authProviderSchema,
});

export type User = z.infer<typeof userSchema>;
