import { coreApiUrl } from '@/shared/config';

type CheckNicknameResponse = {
  isValid: boolean;
};

export async function checkNickname(
  nickname: string
): Promise<CheckNicknameResponse> {
  const uri = `${coreApiUrl}/users/check/nickname?nickname=${nickname}`;

  const response = await fetch(uri, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    // TODO: checkNickname api call error 구체화
    throw new Error();
  }

  const data = await response.json();

  return data;
}
