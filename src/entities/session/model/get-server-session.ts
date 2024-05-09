import { cookies } from 'next/headers';

type Session = {
  refreshToken?: string;
  accessToken?: string;
};

export function getServerSession(): Session {
  const refreshToken = cookies().get('refreshToken')?.value;
  const accessToken = cookies().get('accessToken')?.value;

  return {
    refreshToken,
    accessToken,
  };
}
