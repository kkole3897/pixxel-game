import { RiGamepadFill } from '@remixicon/react';

import BaseLink from './base-link';
import * as baseStyles from './base-link.css';

export default function AutoLibraryLink() {
  return (
    <BaseLink href="/register-library/auto">
      <div className={baseStyles.iconArea}>
        <RiGamepadFill className={baseStyles.icon} />
      </div>
      <div className={baseStyles.mainLabel}>기존 게임 등록하기</div>
    </BaseLink>
  );
}
