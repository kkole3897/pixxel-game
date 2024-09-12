import Image from 'next/image';

import { DefaultLink } from '@/shared/ui/default-link';
import PixxelLogoWithText from '~/public/images/pixxel-logo-with-text.png';
import * as styles from './logo.css';

export default function Logo() {
  return (
    <DefaultLink href="/">
      <Image
        src={PixxelLogoWithText}
        alt="Pixxel Game"
        height={24}
        className={styles.logoImage}
      />
    </DefaultLink>
  );
}
