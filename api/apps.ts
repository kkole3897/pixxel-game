import type { AppDetail } from '@/app/types';

export type FetchAppsOptions = {
  ids?: string[];
};

export async function fetchApps({ ids }: FetchAppsOptions = {}): Promise<{
  apps: AppDetail[];
}> {
  const params = ids?.map((id) => ['ids', id]);

  const query = new URLSearchParams(params);
  const url = new URL(`${process.env.NEXT_PUBLIC_API_BASE_URL}/apps?${query}`);

  const response = await fetch(url.href, {
    headers: {
      'Content-Type': 'application/json',
    },
    next: { revalidate: 30 },
  });

  if (!response.ok) {
    throw new Error('cannot get games');
  }

  const data = await response.json();

  return data;
}

export async function fetchAppDetail(id: string): Promise<{ app: AppDetail }> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/apps/${id}`,
    { next: { revalidate: 30 } }
  );

  if (!response.ok) {
    throw new Error('cannot get game : ' + id);
  }

  return response.json();
}