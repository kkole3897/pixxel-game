'use client';

import { useState } from 'react';
import { RiSearchLine } from '@remixicon/react';

import { type SuggestedGame } from '../../model';
import { getGameTitle } from '@/entities/game';
import { Combobox } from '@/shared/ui/combobox';
import * as Input from '@/shared/ui/input';
import DefaultMainImage from '~/public/images/default-game-main-image.jpg';
import { ImageWithFallback } from '@/shared/ui/image-with-fallback';
import * as styles from './find-game-form.css';

type SuggestedGameItem = SuggestedGame & { label: string; value: string };

export default function FindGameForm() {
  const [isOpened, setIsOpened] = useState(false);
  const [keyword, setKeyword] = useState('');
  const items: SuggestedGameItem[] = [
    {
      label: '엘든링',
      value: 'public_id_1',
      id: 1,
      publicId: 'public_id_1',
      title: '엘든링',
      titleKo: '엘든링',
      mainImage: DefaultMainImage.src,
      gameCatalog: [
        {
          id: 1,
          drm: 'steam',
        },
        {
          id: 2,
          drm: 'epic',
        },
      ],
    },
    {
      label: '코어 키퍼',
      value: 'public_id_2',
      id: 2,
      publicId: 'public_id_2',
      title: '코어 키퍼',
      titleKo: '코어 키퍼',
      mainImage: DefaultMainImage.src,
      gameCatalog: [
        {
          id: 3,
          drm: 'steam',
        },
      ],
    },
    {
      label: '발더스 게이트 3',
      value: 'public_id_3',
      id: 3,
      publicId: 'public_id_3',
      title: '발더스 게이트 3',
      titleKo: '발더스 게이트 3',
      mainImage: DefaultMainImage.src,
      gameCatalog: [{ id: 4, drm: 'epic' }],
    },
  ];
  const filteredItems = items.filter((item) =>
    item.label.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <div>
        <div>
          <Combobox.Root
            open={isOpened}
            onValueChange={(value) => {
              if (value.length > 0) {
                const item = items.find((item) => item.value === value[0]);

                if (item) {
                  setKeyword(item.label);
                }
              }
            }}
            onOpenChange={(open) => {
              if (!open) {
                setIsOpened(false);
              } else if (keyword.length >= 2) {
                setIsOpened(true);
              }
            }}
          >
            <Combobox.Control className={styles.searchComboboxControl}>
              <Combobox.Input
                asChild
                value={keyword}
                className={styles.searchComboboxInput}
                onChange={(event) => {
                  setKeyword(event.target.value);
                }}
              >
                <Input.Root
                  type="search"
                  name="search"
                  placeholder="타이틀을 입력해주세요"
                  spellCheck="false"
                >
                  <Input.Slot side="left">
                    <RiSearchLine color="#80838a" />
                  </Input.Slot>
                </Input.Root>
              </Combobox.Input>
            </Combobox.Control>
            <Combobox.Content>
              {filteredItems.length === 0 ? (
                <div className={styles.emptySuggestedGames}>
                  일치하는 게임이 없습니다.
                </div>
              ) : (
                filteredItems.map((item) => (
                  <Combobox.Item key={item.value} value={item.value}>
                    <div className={styles.searchComboboxItemInner}>
                      <div className={styles.searchComboboxItemMediaArea}>
                        <ImageWithFallback
                          src={item.mainImage}
                          alt=""
                          width={75}
                          height={60}
                          fallbackSrc={DefaultMainImage}
                          className={styles.searchComboboxItemMainImage}
                        />
                      </div>
                      <div className={styles.searchComboboxItemTitle}>
                        {getGameTitle(item)}
                      </div>
                    </div>
                  </Combobox.Item>
                ))
              )}
            </Combobox.Content>
          </Combobox.Root>
        </div>
      </div>
    </form>
  );
}
