import { forwardRef } from 'react';

import { EpicFill, type EpicFillProps } from '../epic-fill';

type EpicFillBaseProps = Omit<EpicFillProps, 'color'>;

const EpicFillBase = forwardRef<SVGSVGElement, EpicFillBaseProps>(
  ({ size = 24 } = {}, forwardedRef) => {
    return <EpicFill size={size} color="#2f2d2e" ref={forwardedRef} />;
  }
);

EpicFillBase.displayName = 'EpicFillBase';

export default EpicFillBase;
