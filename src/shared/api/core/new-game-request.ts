import { Base } from './lib/base';
import type { Database } from '../../lib/supabase/database.types';

type RequestData = {
  store: Database['public']['Enums']['game_store'];
  slug: string;
};

type CheckExistedGameResponse = {
  game: {
    id: number;
    publicId: string;
    title: string | null;
    titleKo: string | null;
    mainImage: string | null;
  };
};
export class NewGameRequest extends Base {
  public async checkExistedRequest(requestData: RequestData) {
    const { data, error } = await this.supabase
      .from('requested_game')
      .select(
        'id, store, slug, completedAt: completed_at, createdAt: created_at, title, failedAt: failed_at'
      )
      .eq('store', requestData.store)
      .eq('slug', requestData.slug)
      .maybeSingle();

    if (error) {
      throw error;
    }

    return data;
  }

  public async checkExistedGame(requestData: RequestData) {
    const { data, error } = await this.supabase
      .from('game_catalog')
      .select(
        `
          game: game_id(id, publicId: public_id, title, titleKo: title_ko, mainImage: main_image)
      `
      )
      .eq('store', requestData.store)
      .eq('original_slug', requestData.slug)
      .not('game_id', 'is', null)
      .maybeSingle<CheckExistedGameResponse>();

    if (error) {
      throw error;
    }

    return data;
  }
}
