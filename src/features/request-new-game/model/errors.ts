import { type GameStore } from '@/entities/game';

export class InvalidUrlError extends Error {
  constructor(url: string, store: GameStore) {
    super(`Invalid ${store} URL: ${url}`);
    this.name = 'InvalidUrlError';
  }
}
