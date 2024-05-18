import { createBrowserClient } from '@supabase/ssr';

import { supabase } from '@/shared/config';

export function createClient() {
  return createBrowserClient(supabase.url, supabase.anonKey);
}
