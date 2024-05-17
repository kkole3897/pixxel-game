import { coreApiUrl } from '@/shared/config';

export type StoreNameResponse = 'steam';

export type PriceHistoryRecordResponse = {
  id: string;
  gameId: string;
  regular: number;
  current: number;
  store: StoreNameResponse;
  datetime: string;
};

export type GetPriceHistoryResponse = {
  history: Record<StoreNameResponse, PriceHistoryRecordResponse[]>;
};

export async function getPriceHistory(
  gameId: string
): Promise<GetPriceHistoryResponse> {
  const uri = `${coreApiUrl}/games/${gameId}/price-history`;

  const response = await fetch(uri, {
    headers: { 'Content-Type': 'application/json' },
    next: { revalidate: 30 },
  });

  if (!response.ok) {
    // TODO: error 구체화
    throw new Error();
  }

  const data = await response.json();

  return data;
}

export type GetGamesOptions = {
  ids?: string[];
};

export type GameTypeResponse = 'game' | 'dlc';

export type MetaCriticResponse = {
  url: string;
  metaScore?: number;
  userScore?: number;
};

export type OpenCriticTierResponse = 'Mighty' | 'Strong' | 'Fair' | 'Weak';

export type OpenCriticResponse = {
  url: string;
  tier?: OpenCriticTierResponse;
  topCriticScore?: number;
  percentRecommended?: number;
};

export type SteamScoreResponse = {
  url: string;
  total?: number;
  positive?: number;
};

export type PriceInfoResponse = {
  current: number;
  regular: number;
  lowest: number;
};

export type StoreInfoResponse = {
  storeId: string;
  url: string;
  price?: PriceInfoResponse;
  releaseDate?: string;
};

export type GenreResponse =
  | 'rpg'
  | 'action'
  | 'adventure'
  | 'simulation'
  | 'sports'
  | 'strategy'
  | 'racing'
  | 'music';

export type GameResponse = {
  id: string;
  name: string;
  defaultName: string;
  type: GameTypeResponse;
  releaseDate?: string;
  thumbnail?: string;
  score?: {
    metaCritic?: MetaCriticResponse;
    openCritic?: OpenCriticResponse;
    steam?: SteamScoreResponse;
  };
  storeInfo?: Record<StoreNameResponse, StoreInfoResponse>;
  genres: GenreResponse[];
  tags: string[];
  description: string;
  summary: string;
  screenshots: string[];
};

export type GetGamesResponse = {
  games: GameResponse[];
};

export async function getGames({
  ids,
}: GetGamesOptions = {}): Promise<GetGamesResponse> {
  const params = ids?.map((id) => ['ids', id]);
  const query = new URLSearchParams(params);
  const uri = `${coreApiUrl}/games?${query}`;

  const response = await fetch(uri, {
    headers: {
      'Content-Type': 'application/json',
    },
    next: { revalidate: 30 },
  });

  if (!response.ok) {
    // TODO: error 구체화
    throw new Error();
  }

  const data = await response.json();

  return data;
}

export type GetGameResponse = {
  game: GameResponse;
};

export async function getGame(id: string): Promise<GetGameResponse> {
  const uri = `${coreApiUrl}/games/${id}`;

  const response = await fetch(uri, {
    headers: {
      'Content-Type': 'application/json',
    },
    next: { revalidate: 30 },
  });

  if (!response.ok) {
    // TODO: error 구체화
    throw new Error();
  }

  const data = await response.json();

  return data;
}
