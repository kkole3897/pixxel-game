import { Genre } from './types';

export function useGenre(genre: Genre) {
  const GENRE_TRANSTLATION_DICT: { [K in Genre]: string } = {
    rpg: 'RPG',
    action: '액션',
    adventure: '어드벤처',
    simulation: '시뮬레이션',
    sports: '스포츠',
    strategy: '전략',
    racing: '레이싱',
    music: '음악',
  } as const;

  const translatedGenre = GENRE_TRANSTLATION_DICT[genre];

  return {
    translatedGenre,
  };
}
