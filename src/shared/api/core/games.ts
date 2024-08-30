import { ascending } from '@visx/vendor/d3-array';
import { Base } from './lib/base';

export type GameStoreResponse = 'steam' | 'epic';
export type GameDrmResponse = 'steam' | 'epic';

export type GetGamesOptions = {
  ids?: number[];
  /**
   * @default 0
   */
  from?: number;
  /**
   * @default 99
   */
  to?: number;
  /**
   * @default 'effective_price_updated_at
   */
  sortBy?: 'effective_price_updated_at';
  /**
   * @default false
   */
  ascending?: boolean;
};

export type GameTypeResponse = 'game' | 'dlc' | 'bundle' | 'extra';

export type MetaCriticResponse = {
  metaScoreUrl: string;
  metaScore: number | null;
  userScoreUrl: string;
  userScore: number | null;
};

export type OpenCriticTierResponse = 'Mighty' | 'Strong' | 'Fair' | 'Weak';

export type OpenCriticResponse = {
  url: string;
  tier: OpenCriticTierResponse | null;
  topCriticScore: number | null;
  percentRecommended: number | null;
};

export type SteamScoreResponse = {
  url: string;
  total: number | null;
  positive: number | null;
};

export type PriceInfoResponse = {
  current: number;
  regular: number;
  lowest: number;
};

export type GameCatalogResponse = {
  id: number;
  gameId: number | null;
  url: string;
  store: GameStoreResponse;
  drm: GameDrmResponse;
  regularPrice: number | null;
  currentPrice: number | null;
  currentPriceExpireAt: string | null;
  lowestPrice: number | null;
  lowestPriceUpdatedAt: string | null;
  createdAt: string;
  salesEndedAt: string | null;
};

export type BaseGameResponse = Pick<
  GameResponse,
  'id' | 'publicId' | 'title' | 'titleKo'
>;

export type GameResponse = {
  id: number;
  publicId: string;
  isFree: boolean;
  title: string | null;
  titleKo: string | null;
  type: GameTypeResponse;
  releaseYear: number | null;
  releaseMonth: number | null;
  releaseDay: number | null;
  mainImage: string | null;
  description: string | null;
  summary: string | null;
  baseGameId: number | null;
  tags: string[];
  screenshots: string[];
  developers: string[];
  publishers: string[];
  createdAt: string;
  metaCritic: MetaCriticResponse | null;
  openCritic: OpenCriticResponse | null;
  steamScore: SteamScoreResponse | null;
  gameCatalog: GameCatalogResponse[];
  baseGame: BaseGameResponse | null;
};

export type GameCatalogPreviewResponse = Pick<
  GameCatalogResponse,
  | 'id'
  | 'gameId'
  | 'store'
  | 'drm'
  | 'currentPrice'
  | 'currentPriceExpireAt'
  | 'lowestPrice'
  | 'regularPrice'
  | 'salesEndedAt'
>;

export type GamePreviewResponse = Pick<
  GameResponse,
  'id' | 'publicId' | 'title' | 'titleKo' | 'type' | 'mainImage' | 'isFree'
> & {
  gameCatalog: GameCatalogPreviewResponse[];
};

export type GetGamesResponse = {
  games: GamePreviewResponse[];
};

export type GetGameResponse = {
  game: GameResponse;
};

export type PriceHistoryRecordResponse = {
  id: number;
  gameCatalogId: number | null;
  regularPrice: number;
  currentPrice: number;
  startAt: string;
  endAt: string | null;
};

export type GetPriceHistoryResponse = Pick<GameResponse, 'id' | 'publicId'> & {
  gameCatalog: (Pick<GameCatalogResponse, 'id' | 'store' | 'drm' | 'gameId'> & {
    gamePriceHistory: PriceHistoryRecordResponse[];
  })[];
};

type GetLowestPriceRanksOptions = {
  /**
   * @default 2
   */
  limit?: number;
};

export class Games extends Base {
  public async getGames({
    ids,
    from = 0,
    to = 99,
    sortBy = 'effective_price_updated_at',
    ascending = false,
  }: GetGamesOptions = {}): Promise<GetGamesResponse> {
    let baseRequest = this.supabase
      .from('game_effective_price_updated_at_view')
      .select(
        'id, publicId: public_id, title, titleKo: title_ko, type, mainImage: main_image,\
      isFree: is_free, gameCatalog: game_catalog(id, gameId: game_id, store, drm, regularPrice: regular_price,\
      currentPrice: current_price, currentPriceExpireAt: current_price_expire_at, lowestPrice: lowest_price, salesEndedAt: sales_ended_at)'
      )
      .order(sortBy, { ascending });

    if (!!ids) {
      baseRequest = baseRequest.in('id', ids);
    }

    const { data, error } = await baseRequest
      .range(from, to)
      .returns<GamePreviewResponse[]>();

    if (!!error) {
      throw error;
    }

    return {
      games: data,
    };
  }

  public async getGame(publicId: string): Promise<GetGameResponse> {
    const { data, error } = await this.supabase
      .from('game')
      .select(
        'id, publicId: public_id, title, titleKo: title_ko, type, releaseYear: release_year, releaseMonth: release_month, releaseDay: release_day,\
        mainImage: main_image, isFree: is_free, description, summary, baseGameId: base_game_id, tags, screenshots, developers, publishers, createdAt: created_at,\
        metaCritic: meta_critic(metaScoreUrl: meta_score_url, metaScore: meta_score, userScoreUrl: user_score_url, userScore: user_score),\
        openCritic: open_critic(url, tier, topCriticScore: top_critic_score, percentRecommended: percent_recommended),\
        steamScore: steam_score(url, total, positive),\
        gameCatalog: game_catalog(id, gameId: game_id, url, store, drm, regularPrice: regular_price, currentPrice: current_price, currentPriceExpireAt: current_price_expire_at,\
          lowestPrice: lowest_price, lowestPriceUpdatedAt: lowest_price_updated_at, createdAt: created_at, salesEndedAt: sales_ended_at),\
        baseGame: base_game_id(id, title, titleKo: title_ko, publicId: public_id)'
      )
      .eq('public_id', publicId)
      .single<GameResponse>();

    if (!!error) {
      throw error;
    }

    return {
      game: data,
    };
  }

  public async getPriceHistory(
    gamePublicId: string
  ): Promise<GetPriceHistoryResponse> {
    const { data, error } = await this.supabase
      .from('game')
      .select(
        'id, publicId: public_id,\
        gameCatalog: game_catalog(id, gameId: game_id, store, drm,\
          gamePriceHistory: game_price_log(id, gameCatalogId: game_catalog_id, regularPrice: regular_price, currentPrice: current_price, startAt: start_at, endAt: end_at)\
        )'
      )
      .eq('public_id', gamePublicId)
      .single();

    if (!!error) {
      throw error;
    }

    return data;
  }

  public async getBestPriceHistoryByGamePublicId(gamePublicId: string) {
    const { data, error } = await this.supabase
      .rpc('get_best_price_history_by_game_public_id', {
        game_public_id: gamePublicId,
      })
      .select('startAt: start_at, price: min_price');

    if (!!error) {
      throw error;
    }

    return data;
  }

  public async getLowestPriceRanks(
    gamePublicId: string,
    { limit = 2 }: GetLowestPriceRanksOptions = {}
  ) {
    const { data, error } = await this.supabase
      .rpc('get_lowest_price_ranks', { game_public_id: gamePublicId })
      .select('id, startAt: start_at, currentPrice: current_price, store')
      .limit(limit);

    if (!!error) {
      throw error;
    }

    return data;
  }

  public async getGameBundleContents(gameId: number) {
    const { data, error } = await this.supabase
      .from('game_bundle_content')
      .select(
        'id, gameId: bundle_id,\
        includedGame: game!game_bundle_contents_included_game_id_fkey(\
          id, title, titleKo: title_ko, mainImage: main_image, isFree: is_free, publicId: public_id,\
          gameCatalog: game_catalog(\
            id, currentPrice: current_price, regularPrice: regular_price,\
            currentPriceExpireAt: current_price_expire_at, salesEndedAt: sales_ended_at\
          )\
        )'
      )
      .eq('bundle_id', gameId);

    if (error) {
      throw error;
    }

    return data;
  }

  public async getDlcs(gameId: number) {
    const { data, error } = await this.supabase
      .from('game')
      .select(
        'id, title, titleKo: title_ko, mainImage: main_image, isFree: is_free, publicId: public_id,\
        gameCatalog: game_catalog(\
          id, currentPrice: current_price, regularPrice: regular_price,\
          currentPriceExpireAt: current_price_expire_at, salesEndedAt: sales_ended_at\
        )'
      )
      .eq('base_game_id', gameId);

    if (error) {
      throw error;
    }

    return data;
  }

  public async search(query: string): Promise<GamePreviewResponse[]> {
    const _query = query.replace(/\s+/g, '+').trim();

    const { data, error } = await this.supabase
      .from('game')
      .select(
        'id, publicId: public_id, title, titleKo: title_ko, type, mainImage: main_image,\
      isFree: is_free, gameCatalog: game_catalog(id, gameId: game_id, store, drm, regularPrice: regular_price,\
      currentPrice: current_price, currentPriceExpireAt: current_price_expire_at, lowestPrice: lowest_price, salesEndedAt: sales_ended_at)'
      )
      .textSearch('combined_title', _query);

    if (error) {
      throw error;
    }

    return data;
  }
}
