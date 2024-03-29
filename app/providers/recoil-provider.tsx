'use client';

import { RecoilRoot } from 'recoil';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren;

export default function RecoilProvider({ children }: Props) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
