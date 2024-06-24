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

  public async deleteUser(userId: string) {
    const { error } = await this.supabase.rpc('delete_user', {
      user_id: userId,
    });

    if (!!error) {
      throw error;
    }
  }
}
