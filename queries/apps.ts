import { createQueryKeys } from '@lukemorales/query-key-factory';
import { useQuery } from '@tanstack/react-query';

import { fetchApps, fetchAppDetail, type FetchAppsOptions } from '@/api/apps';

const appsQueryKeys = createQueryKeys('apps', {
  fetchApps: (options: FetchAppsOptions) => [options],
  fetchAppDetail: (appId: string) => [appId],
});

export function useFetchAppsQuery(
  requestOptions: FetchAppsOptions = {},
  queryOptions: { enabled?: boolean } = {}
) {
  const { enabled = true } = queryOptions;

  return useQuery({
    queryKey: appsQueryKeys.fetchApps(requestOptions).queryKey,
    queryFn: () => fetchApps(requestOptions),
    enabled,
  });
}

export function useFetchAppDetailQuery(id: string) {
  return useQuery({
    queryKey: appsQueryKeys.fetchAppDetail(id).queryKey,
    queryFn: () => fetchAppDetail(id),
  });
}
