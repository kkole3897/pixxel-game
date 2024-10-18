import { RiDraftFill } from '@remixicon/react';

import BaseLink from './base-link';
import * as baseStyles from './base-link.css';

export default function ManualLibraryLink() {
  return (
    <BaseLink href="/register-library/manual">
      <div className={baseStyles.iconArea}>
        <RiDraftFill className={baseStyles.icon} />
      </div>
      <div className={baseStyles.mainLabel}>직접 등록하기</div>
    </BaseLink>
  );
}
