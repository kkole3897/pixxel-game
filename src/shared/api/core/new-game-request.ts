import { Base } from './lib/base';
import type { Database } from '../../lib/supabase/database.types';

export class NewGameRequest extends Base {
  public async getRequestBytStoreInfo(storeInfo: {
    store: Database['public']['Enums']['game_store'];
    slug: string;
  }) {
    const { data, error } = await this.supabase
      .from('new_game_request')
      .select('id, store, slug, completedAt: completed_at')
      .eq('store', storeInfo.store)
      .eq('slug', storeInfo.slug)
      .maybeSingle();

    if (error) {
      throw error;
    }

    return data;
  }
}
