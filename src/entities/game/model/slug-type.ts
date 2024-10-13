import { STEAM_SLUG_TYPE, EPIC_SLUG_TYPE } from '../constants';

export type SteamSlugType =
  (typeof STEAM_SLUG_TYPE)[keyof typeof STEAM_SLUG_TYPE];

export type EpicSlugType = (typeof EPIC_SLUG_TYPE)[keyof typeof EPIC_SLUG_TYPE];
