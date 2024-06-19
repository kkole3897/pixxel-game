import { AuthProvider } from './provider';

export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  provider: AuthProvider;
}
