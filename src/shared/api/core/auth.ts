import { Base } from './lib/base';
import { coreApiUrl } from '@/shared/config';
import { AuthSessionMissingError } from '@supabase/supabase-js';

export type OauthRegistrationCompleteResponse = {
  isRegistrationCompleted: true;
  accessToken: string;
  accessTokenExpireAt: string;
  refreshToken: string;
  refreshTokenExpireAt: string;
};

export type OauthRegistrationRequireResponse = {
  isRegistrationCompleted: false;
  accessToken: string;
  accessTokenExpireAt: string;
};

export type OauthLoginResponse =
  | OauthRegistrationCompleteResponse
  | OauthRegistrationRequireResponse;

export type RegisterOauthRequestBody = {
  nickname: string;
};

export class Auth extends Base {
  public async loginByKakao(code: string): Promise<OauthLoginResponse> {
    const uri = `${coreApiUrl}/auth/kakao`;

    const body = JSON.stringify({ code });

    const response = await fetch(uri, {
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      // TODO: error 구체화
      throw new Error();
    }

    const data = await response.json();

    return data;
  }

  public async registerOauthUser(body: RegisterOauthRequestBody) {
    const uri = `${coreApiUrl}/auth/registration/oauth-user`;
    const serializedBody = JSON.stringify(body);

    const response = await fetch(uri, {
      method: 'POST',
      body: serializedBody,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      // TODO: oauth user api call error 구체화
      throw new Error();
    }

    const data: OauthRegistrationCompleteResponse = await response.json();

    return data;
  }

  public async getUser() {
    const { data, error } = await this.supabase.auth.getUser();

    if (!!error) {
      throw error;
    }

    const { user } = data;

    return user;
  }

  public async getUserFromSession() {
    const { data, error } = await this.supabase.auth.getSession();

    if (!!error) {
      throw error;
    }

    const { session } = data;

    if (!session) {
      throw new AuthSessionMissingError();
    }

    const { user } = session;

    return user;
  }
}
