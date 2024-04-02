import Link from 'next/link';

import * as style from './base-header.css';

export default function BaseHeader() {
  return (
    <div className={style.container}>
      <div>
        <Link href="/" className={style.indexLink}>
          gamduck
        </Link>
      </div>
    </div>
  );
}
