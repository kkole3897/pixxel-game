'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { RiArrowLeftSLine } from '@remixicon/react';

import { SearchForm, SearchIconButton } from '@/features/search-game';
import { useSearchGameModal } from '../../lib';
import * as styles from './search-game-modal.css';

export default function SearchGameModal() {
  const { isOpened, setIsOpened, handleSumit } = useSearchGameModal();

  return (
    <Dialog.Root open={isOpened} onOpenChange={setIsOpened}>
      <Dialog.Trigger asChild>
        <SearchIconButton label="게임 검색" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Content className={styles.content}>
          <div className={styles.searchArea}>
            <Dialog.Close asChild>
              <button type="button" className={styles.closeButton}>
                <RiArrowLeftSLine size="24" />
              </button>
            </Dialog.Close>
            <div className={styles.searchFormContainer}>
              <SearchForm autoFocus onSubmit={handleSumit} />
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}