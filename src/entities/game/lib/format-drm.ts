import { type GameDrm } from '../model';

export function formatDrm(drm: GameDrm) {
  const drmMap: Record<GameDrm, string> = {
    steam: '스팀',
    epic: '에픽',
  };

  return drmMap[drm];
}
