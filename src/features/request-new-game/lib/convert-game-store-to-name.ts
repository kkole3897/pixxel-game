import { GameStore, GAME_STORE } from '@/entities/game';

export function convertGameStoreToName(store: GameStore) {
  const storeNameMap = {
    [GAME_STORE.Steam]: '스팀',
    [GAME_STORE.Epic]: '에픽',
  };

  return storeNameMap[store];
}
