'use client';

import { useBundleContentsQuery, GameBundleContentLink } from '@/entities/game';

export default function BundleContents({ id }: { id: number }) {
  const { data } = useBundleContentsQuery(id);

  if (!data || data.length === 0) {
    return null;
  }

  const filteredContents = data.filter(
    (content) => content.includedGame !== null
  );

  return (
    <div>
      {filteredContents.map((content) => {
        return (
          <GameBundleContentLink
            key={content.id}
            content={content.includedGame!}
          />
        );
      })}
    </div>
  );
}
