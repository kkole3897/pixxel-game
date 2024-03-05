'use client';

import { setupMsw } from '@/mocks';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  setupMsw();
}

export default function Providers({ children }: React.PropsWithChildren) {
  return <>{children}</>;
}
