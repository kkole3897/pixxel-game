import Image, { type StaticImageData } from 'next/image';

import MightyMan from '@/public/images/mighty-man.webp';
import StrongMan from '@/public/images/strong-man.webp';
import FairMan from '@/public/images/fair-man.webp';
import WeakMan from '@/public/images/weak-man.webp';
import type { OpenCriticTier } from '../../model';

export default function Rating({ tier }: { tier: OpenCriticTier }) {
  const tierImage: { [key in OpenCriticTier]: StaticImageData } = {
    Mighty: MightyMan,
    Strong: StrongMan,
    Fair: FairMan,
    Weak: WeakMan,
  };

  return <Image src={tierImage[tier]} alt={tier} height={40} />;
}
