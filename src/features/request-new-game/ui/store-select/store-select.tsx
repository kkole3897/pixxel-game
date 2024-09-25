'use client';

import React from 'react';

import { convertGameStoreToName } from '../../lib';
import { GAME_STORE, type GameStore } from '@/entities/game';
import { SteamFillBase, EpicFillBase } from '@/shared/ui/icons';
import { Select } from '@/shared/ui/select';
import * as styles from './store-select.css';

type StoreSelectProps = {
  id?: string;
  value: GameStore;
};

const storeIconMap = {
  [GAME_STORE.Steam]: <SteamFillBase size={28} />,
  [GAME_STORE.Epic]: <EpicFillBase size={28} />,
};

export default function StoreSelect(props: StoreSelectProps) {
  return (
    <Select.Root {...props} open={false} required name="store">
      <Select.Trigger className={styles.selectTrigger}>
        <Select.Value />
      </Select.Trigger>

      <Select.Content>
        {Object.values(GAME_STORE).map((store) => (
          <Select.Item value={store} key={store}>
            <div className={styles.selectItemInner}>
              {storeIconMap[store]}
              <span className={styles.storeText}>
                {convertGameStoreToName(store)}
              </span>
            </div>
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
}
