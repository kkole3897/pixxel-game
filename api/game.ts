import type { AppDetail } from '@/app/types';

export async function getGames(): Promise<{ apps: AppDetail[] }> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/apps`);

  if (!response.ok) {
    throw new Error('cannot get games');
  }

  return response.json();
}
