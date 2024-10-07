import { type RequestedGame } from '../model';

export function formatRequestedGameTitle(
  requestedGame: Pick<RequestedGame, 'id' | 'title'>
) {
  const title = `[${requestedGame.id}] ${requestedGame.title ?? ''}`;

  return title;
}
