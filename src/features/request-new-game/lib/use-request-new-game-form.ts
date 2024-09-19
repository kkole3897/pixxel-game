'use client';

import { UnsupportedStoreUrlError } from '../model';
import {
  useCheckExistedGameQuery,
  useCheckExistedRequestQuery,
} from '../queries';
import { convertUrlToRequestNewGameData } from './convert-url-to-request-new-game-data';
import { useRequestNewGameStore } from './use-request-new-game-store';

export function useRequestNewGameForm() {
  const { requestNewGameData, setRequestNewGameData, setError } =
    useRequestNewGameStore((state) => state);
  const { isStale: isCheckExistedGameStale, refetch: refetchCheckExistedGame } =
    useCheckExistedGameQuery(requestNewGameData);
  const {
    isStale: isCheckExistedRequestStale,
    refetch: refetchCheckExistedRequest,
  } = useCheckExistedRequestQuery(requestNewGameData);

  const handleSubmit = ({ url }: { url: string }) => {
    try {
      const data = convertUrlToRequestNewGameData(url);
      setError(null);
      setRequestNewGameData(data);

      if (isCheckExistedGameStale) {
        refetchCheckExistedGame();
      }
      if (isCheckExistedRequestStale) {
        refetchCheckExistedRequest();
      }
    } catch (error) {
      if (error instanceof UnsupportedStoreUrlError) {
        setError(error);
        return;
      }

      throw error;
    }
  };

  return {
    handleSubmit,
  };
}
