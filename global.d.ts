declare namespace Kakao {
  function cleanup(): void;
  function init(appKey: string): void;
  function isInitialized(): boolean;

  namespace Auth {
    function authorize(settings: {
      redirectUri?: string;
      state?: string;
      scope?: string;
      prompt?: string;
      loginHint?: string;
      nonce?: string;
      throughTalk?: boolean;
    }): void;
  }
}
