export type AppType = 'game';

export interface Genre {
  id: string;
  description: string;
}

export type Currency = 'KRW';

export type GameStore = 'steam';

export interface SteamScoreInfo {
  total: number;
  positive: number;
  url: string;
}

export interface MetaCriticScoreInfo {
  url: string;
  metaScore?: number;
  userScore?: number;
}

export interface OpenCriticScoreInfo {
  url: string;
  topCriticScore?: number;
  percentRecommended?: number;
  tier?: OpenCriticTier;
}

export interface PurchaseInfo {
  store: GameStore;
  url: string;
}

export type LanguageCode = 'ko';

export interface LanguageInfo {
  store: GameStore;
  codes: LanguageCode[];
}

export type OpenCriticTier = 'Mighty' | 'Strong' | 'Fair' | 'Weak';

export type PriceInfo = {
  current: number;
  regular: number;
  lowest: number;
};

export type StoreInfo = {
  storeId: string;
  url: string;
  price?: PriceInfo;
  releaseDate?: string;
};

export interface AppDetail {
  id: string;
  name: string;
  defaultName: string;
  type: AppType;
  releaseDate?: string;
  thumbnail?: string;
  score?: {
    steam?: SteamScoreInfo;
    metaCritic?: MetaCriticScoreInfo;
    openCritic?: OpenCriticScoreInfo;
  };
  storeInfo?: { [key in GameStore]?: StoreInfo };
  genres: Genre[];
  tags: string[];
  description: string;
  summary: string;
  screenshots: string[];
}

export type AppPreview = Omit<AppDetail, 'scores' | 'language'>;
