import { GameStore } from '@/app/types';

export type PriceLog = {
  id: string;
  appId: string;
  regular: number;
  current: number;
  store: GameStore;
  datetime: string;
  createdAt: string;
  updatedAt: string;
};

export async function getAppPriceHistory(
  appId: string
): Promise<{ history: { [K in GameStore]?: PriceLog[] } }> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/apps/${appId}/price-history`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 30 },
    }
  );

  if (!response.ok) {
    throw new Error('cannot get history');
  }

  const data = await response.json();

  return data;
}
