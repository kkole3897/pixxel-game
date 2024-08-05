'use client';

import { useDlcsQuery } from '@/entities/game';
import { RelatedGameContentLink } from '@/entities/game';

export default function DlcContents({ id }: { id: number }) {
  const { data } = useDlcsQuery(id);

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <div>
      {data.map((dlc) => {
        return <RelatedGameContentLink key={dlc.id} content={dlc} />;
      })}
    </div>
  );
}
