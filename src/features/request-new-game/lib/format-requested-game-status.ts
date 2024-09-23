import { RequestedGameStatus } from '../model';

export function formatRequestedGameStatus(status: RequestedGameStatus): string {
  const statusMap: Record<RequestedGameStatus, string> = {
    processing: '처리 중',
    completed: '완료',
  };

  return statusMap[status];
}
