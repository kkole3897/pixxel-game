'use client';

import Image from 'next/image';
import { RiArrowRightSLine } from '@remixicon/react';
import cn from 'classnames';

import Megaphone from '~/public/images/megaphone.webp';
import { DefaultLink } from '@/shared/ui/default-link';
import * as styles from './introduction-link.css';

export default function IntroductionLink() {
  const composedClassName = cn(styles.link);

  return (
    <DefaultLink href="/request-new-game" className={composedClassName}>
      <Image
        src={Megaphone}
        alt="request new game introduction icon"
        width="96"
        height="96"
        className={styles.mainIcon}
        unoptimized
      />
      <div className={styles.descriptionArea}>
        <p>찾으시는 게임이 없으신가요?</p>
        <p>
          <strong className={styles.emphasisText}>신규 게임</strong>을
          요청해보세요
        </p>
      </div>
      <RiArrowRightSLine className={styles.rightIcon} />
    </DefaultLink>
  );
}
