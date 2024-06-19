import { Base } from './lib/base';
import { AuthSessionMissingError } from '@supabase/supabase-js';

export class Auth extends Base {
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
