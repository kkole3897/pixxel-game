'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { RiArrowLeftSLine } from '@remixicon/react';

import {
  SearchForm,
  SearchIconButton,
  useSearchQueryStore,
} from '@/features/search-game';
import { useSearchGameModal } from '../../lib';
import * as styles from './search-game-modal.css';

export default function SearchGameModal() {
  const { isOpened, setIsOpened, handleSumit } = useSearchGameModal();
  const defaultQuery = useSearchQueryStore((state) => state.query);

  return (
    <Dialog.Root open={isOpened} onOpenChange={setIsOpened}>
      <Dialog.Trigger asChild>
        <SearchIconButton label="게임 검색" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Content className={styles.content} aria-describedby={undefined}>
          <Dialog.Title className={styles.title}>게임 검색</Dialog.Title>
          <div className={styles.searchArea}>
            <Dialog.Close asChild>
              <button type="button" className={styles.closeButton}>
                <RiArrowLeftSLine size="24" />
              </button>
            </Dialog.Close>
            <div className={styles.searchFormContainer}>
              <SearchForm
                autoFocus
                onSubmit={handleSumit}
                defaultKeyword={defaultQuery}
              />
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
