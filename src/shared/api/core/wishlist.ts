import type { CamelCasedPropertiesDeep } from 'type-fest';

import { Base } from './lib/base';
import type { Database } from '@/shared/lib/supabase/database.types';

type WishlistItemResponse = CamelCasedPropertiesDeep<
  Pick<
    Database['public']['Tables']['game_wishlist']['Row'],
    'id' | 'created_at' | 'updated_at' | 'game_id' | 'prev_id' | 'next_id'
  >
>;

type GamePreviewResponse = CamelCasedPropertiesDeep<
  Pick<
    Database['public']['Tables']['game']['Row'],
    | 'id'
    | 'public_id'
    | 'title'
    | 'title_ko'
    | 'type'
    | 'main_image'
    | 'is_free'
  >
>;

type GameCatalogItemPreviewResponse = CamelCasedPropertiesDeep<
  Pick<
    Database['public']['Tables']['game_catalog']['Row'],
    | 'id'
    | 'game_id'
    | 'store'
    | 'drm'
    | 'regular_price'
    | 'current_price'
    | 'current_price_expire_at'
    | 'lowest_price'
  >
>;

type WishlistResponse = (WishlistItemResponse & {
  game:
    | (GamePreviewResponse & {
        gameCatalog: GameCatalogItemPreviewResponse[];
      })
    | null;
})[];

export class Wishlist extends Base {
  public async getWishlist() {
    const { data, error } = await this.supabase
      .rpc('get_wishlist')
      .select(
        'id, createdAt: created_at, updatedAt: updated_at, gameId: game_id, prevId: prev_id, nextId: next_id,\
        game(id, publicId: public_id, title, titleKo: title_ko, type, mainImage: main_image, isFree: is_free,\
          gameCatalog: game_catalog(id, gameId: game_id, store, drm, regularPrice: regular_price,\
            currentPrice: current_price, currentPriceExpireAt: current_price_expire_at, lowestPrice: lowest_price\
          )\
        )'
      )
      .returns<WishlistResponse>();

    if (!!error) {
      throw error;
    }

    return data;
  }

  public async addWishlistItem(gamePublicId: string) {
    const { error } = await this.supabase.rpc(
      'insert_last_wish_by_game_public_id',
      { game_public_id: gamePublicId }
    );

    if (!!error) {
      throw error;
    }
  }

  public async deleteWishlistItem(id: number) {
    const { error } = await this.supabase.rpc('delete_wish', { wish_id: id });

    if (!!error) {
      throw error;
    }
  }
}
