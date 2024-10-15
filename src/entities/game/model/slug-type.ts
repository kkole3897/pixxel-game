import { STEAM_SLUG_TYPE, EPIC_SLUG_TYPE } from '../constants';

export type SteamSlugType =
  (typeof STEAM_SLUG_TYPE)[keyof typeof STEAM_SLUG_TYPE];

export type EpicSlugType = (typeof EPIC_SLUG_TYPE)[keyof typeof EPIC_SLUG_TYPE];

export function isSteamSlugType(slugType: unknown): slugType is SteamSlugType {
  return Object.values(STEAM_SLUG_TYPE).includes(slugType as SteamSlugType);
}

export function isEpicSlugType(slugType: unknown): slugType is EpicSlugType {
  return Object.values(EPIC_SLUG_TYPE).includes(slugType as EpicSlugType);
}
