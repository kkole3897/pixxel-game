import { SupabaseClient } from '@supabase/supabase-js';

import { Database } from '@/shared/lib/supabase/database.types';

export abstract class Base {
  protected supabase: SupabaseClient<Database>;

  constructor(supabaseClient: SupabaseClient<Database>) {
    this.supabase = supabaseClient;
  }
}
