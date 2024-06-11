import { GameType } from './game-type';
import { MetaCritic } from './meta-critic';
import { OpenCritic } from './open-critic';
import { SteamScore } from './steam-score';
import { GameCatalogItem } from './game-catalog';

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
  gameCatalog: GameCatalogItem[];
}

type GameCatalogPreview = Pick<
  GameCatalogItem,
  | 'id'
  | 'gameId'
  | 'store'
  | 'drm'
  | 'currentPrice'
  | 'currentPriceExpireAt'
  | 'lowestPrice'
  | 'regularPrice'
>;

export interface GamePreview
  extends Pick<
    Game,
    'id' | 'publicId' | 'title' | 'titleKo' | 'type' | 'isFree' | 'mainImage'
  > {
  gameCatalog: GameCatalogPreview[];
}