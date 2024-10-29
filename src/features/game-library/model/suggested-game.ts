import { type Game, type GameDrm } from '@/entities/game';

export type SuggestedGame = Pick<
  Game,
  'id' | 'publicId' | 'title' | 'titleKo' | 'mainImage'
> & {
  gameCatalog: {
    id: number;
    drm: GameDrm;
  }[];
};
