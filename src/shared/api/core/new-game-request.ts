import { Base } from './lib/base';
import type { Database } from '../../lib/supabase/database.types';

type StoreIndentifierData = {
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

type CreateRequestedGameData = StoreIndentifierData & {
  title: string | null;
};
export class NewGameRequest extends Base {
  public async checkExistedRequest(storeIdentifierData: StoreIndentifierData) {
    const { data, error } = await this.supabase
      .from('requested_game')
      .select(
        'id, store, slug, completedAt: completed_at, createdAt: created_at, title, failedAt: failed_at'
      )
      .eq('store', storeIdentifierData.store)
      .eq('slug', storeIdentifierData.slug)
      .maybeSingle();

    if (error) {
      throw error;
    }

    return data;
  }

  public async checkExistedGame(storeIdentifierData: StoreIndentifierData) {
    const { data, error } = await this.supabase
      .from('game_catalog')
      .select(
        `
          game: game_id(id, publicId: public_id, title, titleKo: title_ko, mainImage: main_image)
      `
      )
      .eq('store', storeIdentifierData.store)
      .eq('original_slug', storeIdentifierData.slug)
      .not('game_id', 'is', null)
      .maybeSingle<CheckExistedGameResponse>();

    if (error) {
      throw error;
    }

    return data;
  }

  public async createRequestedGame(
    createRequestedGameData: CreateRequestedGameData
  ) {
    const { data, error } = await this.supabase
      .from('requested_game')
      .insert({
        store: createRequestedGameData.store,
        slug: createRequestedGameData.slug,
        title: createRequestedGameData.title,
      })
      .select('id')
      .single();

    if (error) {
      throw error;
    }

    return data;
  }
}
