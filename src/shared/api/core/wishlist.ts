import { Base } from './lib/base';

export class Wishlist extends Base {
  public async getGames() {
    const { data, error } = await this.supabase.rpc('get_wishlist').select(
      'id, createdAt: created_at, updatedAt: updated_at, gameId: game_id, prevId: prev_id, nextId: next_id,\
        game(id, publicId: public_id, title, titleKo: title_ko, type, releaseYear: release_year, releaseMonth: release_month, releaseDay: release_day,\
          mainImage: main_image, isFree: is_free, description, summary, baseGameId: base_game_id, tags, screenshots, developers, publishers, createdAt: created_at,\
          metaCritic: meta_critic(metaScoreUrl: meta_score_url, metaScore: meta_score, userScoreUrl: user_score_url, userScore: user_score),\
          openCritic: open_critic(url, tier, topCriticScore: top_critic_score, percentRecommended: percent_recommended),\
          steamScore: steam_score(url, total, positive),\
          gameCatalog: game_catalog(id, gameId: game_id, url, store, drm, regularPrice: regular_price, currentPrice: current_price, currentPriceExpireAt: current_price_expire_at,\
            lowestPrice: lowest_price, lowestPriceUpdatedAt: lowest_price_updated_at, createdAt: created_at\
          )\
        )'
    );

    if (!!error) {
      throw error;
    }

    return data;
  }

  public async addGame(gamePublicId: string) {
    const { error } = await this.supabase.rpc(
      'insert_last_wish_by_game_public_id',
      { game_public_id: gamePublicId }
    );

    if (!!error) {
      throw error;
    }
  }

  public async deleteGame(id: number) {
    const { error } = await this.supabase.rpc('delete_wish', { wish_id: id });

    if (!!error) {
      throw error;
    }
  }
}
