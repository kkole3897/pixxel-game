import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import type { OpenCriticTier } from '@/app/types';
import MightyMan from '@/public/images/mighty-man.webp';
import StrongMan from '@/public/images/strong-man.webp';
import FairMan from '@/public/images/fair-man.webp';
import WeakMan from '@/public/images/weak-man.webp';

export default function Rating({ tier }: { tier: OpenCriticTier }) {
  const tierImage: { [key in OpenCriticTier]: StaticImageData } = {
    Mighty: MightyMan, Strong: StrongMan,
    Fair: FairMan,
    Weak: WeakMan,
  };

  return (
    <Image src={tierImage[tier]} alt={tier} height={40} />
  )
}
