import {
  STEAM_SLUG_TYPE,
  EPIC_SLUG_TYPE,
  type GameStore,
  type SteamSlugType,
  type EpicSlugType,
} from '@/entities/game';

function steamSlugToLabel(slug: SteamSlugType): string {
  const labelMap = {
    [STEAM_SLUG_TYPE.App]: 'app',
    [STEAM_SLUG_TYPE.Sub]: 'sub',
    [STEAM_SLUG_TYPE.Bundle]: 'bundle',
  };

  return labelMap[slug];
}

function createSteamSlugTypeSelectOptions(): Array<{
  label: string;
  value: SteamSlugType;
}> {
  return Object.entries(STEAM_SLUG_TYPE).map(([, value]) => ({
    label: steamSlugToLabel(value),
    value,
  }));
}

function epicSlugToLabel(slug: EpicSlugType): string {
  const labelMap = {
    [EPIC_SLUG_TYPE.P]: 'p',
    [EPIC_SLUG_TYPE.Bundles]: 'bundles',
  };

  return labelMap[slug];
}

function createEpicSlugTypeSelectOptions(): Array<{
  label: string;
  value: EpicSlugType;
}> {
  return Object.entries(EPIC_SLUG_TYPE).map(([, value]) => ({
    label: epicSlugToLabel(value),
    value,
  }));
}

export function createSlugTypeSelectOptions(store: GameStore) {
  if (store === 'steam') {
    return createSteamSlugTypeSelectOptions();
  } else if (store === 'epic') {
    return createEpicSlugTypeSelectOptions();
  }

  return [];
}
