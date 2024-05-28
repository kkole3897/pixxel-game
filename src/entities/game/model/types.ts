import {
  GAME_TYPE,
  GENRE,
  GAME_STORE,
  OPEN_CRITIC_TIER,
  GAME_DRM,
} from '../constants';

export type GameType = (typeof GAME_TYPE)[keyof typeof GAME_TYPE];

export type Genre = (typeof GENRE)[keyof typeof GENRE];

export type GameStore = (typeof GAME_STORE)[keyof typeof GAME_STORE];

export type GameDrm = (typeof GAME_DRM)[keyof typeof GAME_DRM];

export interface MetaCritic {
  metaScoreUrl: string;
  metaScore: number | null;
  userScoreUrl: string;
  userScore: number | null;
}

export type OpenCriticTier =
  (typeof OPEN_CRITIC_TIER)[keyof typeof OPEN_CRITIC_TIER];

export interface OpenCritic {
  url: string;
  tier: OpenCriticTier | null;
  topCriticScore: number | null;
  percentRecommended: number | null;
}

export interface SteamScore {
  url: string;
  total: number | null;
  positive: number | null;
}

export interface GameCatalog {
  id: number;
  gameId: number | null;
  url: string;
  store: GameStore;
  drm: GameDrm;
  regularPrice: number | null;
  currentPrice: number | null;
  currentPriceExpireAt: string | null;
  lowestPrice: number | null;
  lowestPriceUpdatedAt: string | null;
}

export interface Game {
  id: number;
  publicId: string;
  title: string | null;
  titleKo: string | null;
  type: GameType;
  isFree: boolean;
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
  metaCritic: MetaCritic | null;
  openCritic: OpenCritic | null;
  steam: SteamScore | null;
  gameCatalog: GameCatalog[];
}

export type GameCatalogPreview = Pick<
  GameCatalog,
  | 'id'
  | 'gameId'
  | 'store'
  | 'drm'
  | 'currentPrice'
  | 'currentPriceExpireAt'
  | 'lowestPrice'
  | 'regularPrice'
>;

export interface GamePrievew
  extends Pick<
    Game,
    'id' | 'publicId' | 'title' | 'titleKo' | 'type' | 'isFree' | 'mainImage'
  > {
  gameCatalog: GameCatalogPreview[];
}

export interface PriceHistoryRecord {
  id: string;
  gameId: string;
  regular: number;
  current: number;
  store: GameStore;
  datetime: string;
}
