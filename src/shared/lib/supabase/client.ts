import { createBrowserClient } from '@supabase/ssr';
import { type SupabaseClient } from '@supabase/supabase-js';

import { supabase } from '@/shared/config';
import { Database } from './database.types';

export function createClient() {
  return createBrowserClient<Database>(supabase.url, supabase.anonKey);
}
