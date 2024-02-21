export type AppType = 'game';

export interface Genre {
  id: string;
  description: string;
}

export type Currency = 'KRW';

export type GameStore = 'steam';

export interface PriceInfo {
  store: GameStore;
  regular: number;
  discount: number;
  lowest: number;
}
export interface ScoreInfo {
  store: GameStore;
  totalCount: number;
  score: number;
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

export interface AppDetail {
  id: string;
  name: string;
  type: AppType;
  genres: Genre[];
  releaseDate?: string;
  thumbnail?: string;
  prices: PriceInfo[];
  scores: {
    steam: {
      score: number;
      totalCount: number;
    };
    metaCritic: {
      metaScore: number;
      userScore: number;
    };
    openCritic: {
      topCriticScore: number;
      percentRecommended: number;
      tier: OpenCriticTier;
    }
  };
  purchases: PurchaseInfo[];
  language: LanguageInfo[]; 
}

export type AppPreview = Omit<AppDetail, 'scores' | 'language'>;
