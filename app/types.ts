export type AppType = 'game';

export interface Genre {
  id: string;
  description: string;
}

export type Currency = 'KRW';

export type GameStore = 'steam';

export interface SteamScoreInfo {
  totalCount: number;
  positive: number;
}

export interface MetaCriticScoreInfo {
  metaScore: number;
  userScore: number;
}

export interface OpenCriticScoreInfo {
  topCriticScore: number;
  percentRecommended: number;
  tier: OpenCriticTier;
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
  storeInfo?: {
    steam?: StoreInfo;
  };
  genres: Genre[];
  tags: string[];
}

export type AppPreview = Omit<AppDetail, 'scores' | 'language'>;
