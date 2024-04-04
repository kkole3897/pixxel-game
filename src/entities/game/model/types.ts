import { GAME_TYPE, GENRE, GAME_STORE } from '../constants';
import { OPEN_CRITIC_TIER } from '../constants';

export type GameType = (typeof GAME_TYPE)[keyof typeof GAME_TYPE];

export type Genre = (typeof GENRE)[keyof typeof GENRE];

export type GameStore = (typeof GAME_STORE)[keyof typeof GAME_STORE];

export interface MetaCritic {
  url: string;
  metaScore?: number;
  userScore?: number;
}

export type OpenCriticTier =
  (typeof OPEN_CRITIC_TIER)[keyof typeof OPEN_CRITIC_TIER];

export interface OpenCritic {
  url: string;
  tier?: OpenCriticTier;
  topCriticScore?: number;
  percentRecommended?: number;
}

export interface SteamScore {
  url: string;
  total?: number;
  positive?: number;
}

export interface PriceInfo {
  current: number;
  regular: number;
  lowest: number;
}

export interface StoreInfo {
  storeId: string;
  url: string;
  price?: PriceInfo;
  releaseDate?: string;
}

export interface Game {
  id: string;
  name: string;
  defaultName: string;
  type: GameType;
  releaseDate?: string;
  thumbnail?: string;
  score?: {
    metaCritic?: MetaCritic;
    openCritic?: OpenCritic;
    steam?: SteamScore;
  };
  storeInfo?: { [key in GameStore]?: StoreInfo };
  genres: Genre[];
  tags: string[];
  description: string;
  summary: string;
  screenshots: string[];
}

export interface PriceHistoryRecord {
  id: string;
  gameId: string;
  regular: number;
  current: number;
  store: GameStore;
  datetime: string;
}
