import { createBrowserClient } from '@supabase/ssr';

import { supabase } from '@/shared/config';
import { Database } from './database.types';

export function createClient() {
  return createBrowserClient<Database>(supabase.url, supabase.anonKey);
}
