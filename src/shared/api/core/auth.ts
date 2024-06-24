import { Base } from './lib/base';

export class Auth extends Base {
  public async getUser() {
    const { data, error } = await this.supabase
      .from('profile')
      .select('id, name, avatarUrl: avatar_url, providers, email')
      .single();

    if (error) {
      throw error;
    }

    return data;
  }

  public async deleteUser() {
    const { error } = await this.supabase.functions.invoke('delete-user', {
      method: 'POST',
    });

    if (!!error) {
      throw error;
    }
  }
}
