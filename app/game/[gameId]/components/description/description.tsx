'use client';

import { useMemo, useRef, useState, useId, useEffect } from 'react';
import sanitizeHtml from 'sanitize-html';
import { RiArrowDownWideLine, RiArrowUpWideLine } from '@remixicon/react';

import * as styles from './description.css';

type Props = {
  content: string;
};

export default function Description({ content }: Props) {
  const MAX_HEIGHT = 850;

  const cleanContent = sanitizeHtml(content, {
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
      if (contentRef.current.offsetHeight <= MAX_HEIGHT) {
        setIsOverflowed(false);
      }
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
