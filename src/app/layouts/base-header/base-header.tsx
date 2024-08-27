import Link from 'next/link';
import Image from 'next/image';

import PixxelLogoWithText from '~/public/images/pixxel-logo-with-text.png';
import { SearchGameModal } from '@/widgets/search-game-modal';
import * as style from './base-header.css';

export default function BaseHeader() {
  return (
    <div className={style.container}>
      <div>
        <Link href="/" className={style.indexLink}>
          <Image
            src={PixxelLogoWithText}
            alt="Pixxel Game"
            height={24}
            className={style.logoImage}
          />
        </Link>
      </div>
      <div>
        <SearchGameModal />
      </div>
    </div>
  );
}
