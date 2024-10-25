import { type PlayStatus } from '../model';

export function formatPlayStatus(status: PlayStatus) {
  const statusMap: Record<PlayStatus, string> = {
    playing: '플레이 중',
    later: '나중에 플레이',
    end: '플레이 완료',
  };

  return statusMap[status];
}
