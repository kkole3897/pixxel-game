export function useKakaoOidc() {
  const authorize = () => {
    Kakao.Auth.authorize({
      redirectUri: 'localhost:3000/auth/kakao',
      scope: 'openid, profile_nickname',
      prompt: 'select_account',
    });
  };

  return {
    authorize,
  };
}
