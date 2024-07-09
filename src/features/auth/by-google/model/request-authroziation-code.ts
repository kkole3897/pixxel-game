import { kakao } from '@/shared/config';

export function requestAuthorizationCode() {
  Kakao.Auth.authorize({
    prompt: 'select_accout',
    redirectUri: kakao.redirectUri,
  });
}
