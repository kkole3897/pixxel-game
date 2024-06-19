import z from 'zod';

export const authProviderSchema = z.enum(['kakao']);

export type AuthProvider = z.infer<typeof authProviderSchema>;
