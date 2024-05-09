import { z } from 'zod';

import { coreApiUrl } from '@/shared/config';

const Store = z.enum(['steam']);
type Store = z.infer<typeof Store>;

const GamePrice = z.number().int().nonnegative();

const PriceHistoryRecord = z.object({
  id: z.string(),
  gameId: z.string(),
  regular: GamePrice,
  current: GamePrice,
  store: Store,
  datetime: z.string().datetime(),
});

const GetPriceHistoryResponse = z.object({
  history: z.record(Store, PriceHistoryRecord.array()),
});

export async function getPriceHistory(gameId: string) {
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
  const validatedData = GetPriceHistoryResponse.parse(data);

  return validatedData;
}

const GetGamesOptions = z.object({
  ids: z.string().array().optional(),
});
export type GetGamesOptions = z.infer<typeof GetGamesOptions>;

const GameType = z.enum(['game', 'dlc']);

const MetaCritic = z.object({
  url: z.string().url(),
  metaScore: z.number().gte(0).lte(100).optional(),
  userScore: z.number().gte(0).lte(100).optional(),
});

const OpenCriticTier = z.enum(['Mighty', 'Strong', 'Fair', 'Weak']);

const OpenCritic = z.object({
  url: z.string().url(),
  tier: OpenCriticTier.optional(),
  topCriticScore: z.number().gte(0).lte(100).optional(),
  percentRecommended: z.number().gte(0).lte(100).optional(),
});

const SteamScore = z.object({
  url: z.string().url(),
  total: z.number().gte(0).optional(),
  positive: z.number().gte(0).optional(),
});

const PriceInfo = z.object({
  current: z.number().gte(0),
  regular: z.number().gte(0),
  lowest: z.number().gte(0),
});

const StoreInfo = z.object({
  storeId: z.string(),
  url: z.string().url(),
  price: PriceInfo.optional(),
  releaseDate: z.string().datetime().optional(),
});

const Genre = z.enum([
  'rpg',
  'action',
  'adventure',
  'simulation',
  'sports',
  'strategy',
  'racing',
  'music',
]);

const Game = z.object({
  id: z.string(),
  name: z.string(),
  defaultName: z.string(),
  type: GameType,
  releaseDate: z.string().datetime().optional(),
  thumbnail: z.string().url().optional(),
  score: z
    .object({
      metaCritic: MetaCritic.optional(),
      openCritic: OpenCritic.optional(),
      steam: SteamScore.optional(),
    })
    .optional(),
  storeInfo: z.record(Store, StoreInfo).optional(),
  genres: Genre.array(),
  tags: z.string().array(),
  description: z.string(),
  summary: z.string(),
  screenshots: z.string().url().array(),
});

type Game = z.infer<typeof Game>;

const GetGamesResponse = z.object({
  games: Game.array(),
});

export async function getGames({ ids }: GetGamesOptions = {}) {
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
  const validatedData = GetGamesResponse.parse(data);

  return validatedData;
}

const GetGameResponse = z.object({
  game: Game,
});

export async function getGame(id: string) {
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
  const validatedData = GetGameResponse.parse(data);

  return validatedData;
}
