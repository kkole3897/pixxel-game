import { type FormState } from './use-create-requested-game-form-state';
import { type CreateRequestedGameData } from '../model';

export function convertCreateRequestedFormStateToData(
  formState: FormState
): CreateRequestedGameData {
  const normalizedTitle = formState.title.trim();
  const title = normalizedTitle.length > 0 ? normalizedTitle : null;

  const data: CreateRequestedGameData = {
    ...formState,
    title,
  };

  return data;
}
