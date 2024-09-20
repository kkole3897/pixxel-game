import { RequestNewGameStatus } from '../model';

export function formatRequestNewGameStatus(
  status: RequestNewGameStatus
): string {
  const statusMap: Record<RequestNewGameStatus, string> = {
    processing: '처리 중',
    completed: '완료',
  };

  return statusMap[status];
}
