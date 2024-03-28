import type { AppDetail } from '@/app/types';

export async function getApps(): Promise<{ apps: AppDetail[] }> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/apps`, {
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

export async function getAppDetail(id: string): Promise<{ app: AppDetail }> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/apps/${id}`,
    { next: { revalidate: 30 } }
  );

  if (!response.ok) {
    throw new Error('cannot get game : ' + id);
  }

  return response.json();
}
