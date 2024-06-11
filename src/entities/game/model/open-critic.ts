import { OPEN_CRITIC_TIER } from '../constants';

export type OpenCriticTier =
  (typeof OPEN_CRITIC_TIER)[keyof typeof OPEN_CRITIC_TIER];

export interface OpenCritic {
  url: string;
  tier: OpenCriticTier | null;
  topCriticScore: number | null;
  percentRecommended: number | null;
}
