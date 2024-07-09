import Link from 'next/link';
import Image from 'next/image';

import PixxelLogoWithText from '~/public/images/pixxel-logo-with-text.png';
import * as style from './base-header.css';

// TODO: 위로 스크롤했을 때 보이도록 기능 추가
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
    </div>
  );
}
