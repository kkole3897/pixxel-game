import { User as SupabaseUser } from '@supabase/supabase-js';
import { userSchema, type User } from '../models';

export function adaptSupabaseUser(supabaseUser: SupabaseUser): User {
  const user = userSchema.parse({
    id: supabaseUser.id,
    name: supabaseUser.user_metadata.name,
    email: supabaseUser.email ?? supabaseUser.user_metadata.email,
    avatarUrl: supabaseUser.user_metadata.avatar_url ?? null,
    provider: supabaseUser.app_metadata.provider,
  });

  return user;
}
