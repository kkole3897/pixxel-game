'use client';

import { useMemo, useRef, useState, useId, useEffect } from 'react';
import sanitizeHtml from 'sanitize-html';
import { RiArrowDownWideLine, RiArrowUpWideLine } from '@remixicon/react';

import * as styles from './description.css';
import { useGameDetailQuery } from '@/entities/game';

type Props = {
  gamePublicId: string;
};

const MAX_HEIGHT = 850;

export default function Description({ gamePublicId }: Props) {
  const { data } = useGameDetailQuery(gamePublicId);

  const cleanContent = sanitizeHtml(data?.game.description ?? '', {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
  });

  const collapsibleId = useId();

  const contentRef = useRef<HTMLDivElement>(null);
  const [isOverflowed, setIsOverflowed] = useState(true);
  const [isOpened, setIsOpened] = useState(false);
  const collapsibleVariant = useMemo(() => {
    return isOpened ? 'opened' : 'collapsed';
  }, [isOpened]);
  const toggleIsOpened = () => {
    setIsOpened(!isOpened);
  };

  useEffect(() => {
    if (contentRef.current) {
      const resizeObserver = new ResizeObserver(([entry]) => {
        if (entry.borderBoxSize[0].blockSize > MAX_HEIGHT) {
          setIsOverflowed(true);
        } else {
          setIsOverflowed(false);
        }
      });

      resizeObserver.observe(contentRef.current);

      return () => resizeObserver.disconnect();
    }
  }, []);

  return (
    <div className={styles.description}>
      <div
        id={collapsibleId}
        className={styles.collapsible[collapsibleVariant]}
      >
        <div
          dangerouslySetInnerHTML={{ __html: cleanContent }}
          ref={contentRef}
          className={styles.content}
        ></div>
      </div>
      {isOverflowed && (
        <div className={styles.collapseControl[collapsibleVariant]}>
          <button
            type="button"
            aria-controls={collapsibleId}
            aria-expanded={isOpened}
            className={styles.collapseControlButton}
            onClick={toggleIsOpened}
          >
            {isOpened ? <RiArrowUpWideLine /> : <RiArrowDownWideLine />}
          </button>
        </div>
      )}
    </div>
  );
}
