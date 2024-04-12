import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

export type WishListState = {
  wishList: { [gameId: string]: { priority: number; createdAt: string } };
};

export type WishListActions = {
  addGame: (gameId: string) => void;
  removeGame: (gameId: string) => void;
  changePriority: (gameId: string, priority: number) => void;
};

export type WishListStore = WishListState & WishListActions;

export const useWishListStore = create(
  persist<WishListStore>(
    (set, get) => ({
      wishList: {},
      addGame: (id: string) => {
        const priority = Object.keys(get().wishList).length + 1;

        set({
          wishList: {
            ...get().wishList,
            [id]: { priority, createdAt: dayjs.utc().format() },
          },
        });
      },
      removeGame: (id: string) => {
        if (!get().wishList || !get().wishList[id]) {
          return;
        }

        const {
          [id]: { priority },
          ..._remains
        } = get().wishList;

        const remains = Object.entries(_remains).reduce(
          (acc, [id, wishInfo]) => {
            if (wishInfo.priority <= priority) {
              return {
                ...acc,
                [id]: wishInfo,
              };
            }

            const newWishInfo = {
              ...wishInfo,
              priority: wishInfo.priority - 1,
            };

            return {
              ...acc,
              [id]: newWishInfo,
            };
          },
          {}
        );

        set({ wishList: remains });
      },
      changePriority: (id: string, priority: number) => {
        if (!get().wishList[id]) {
          return;
        }

        let cleanPriority = priority;
        const maxPriority = Object.keys(get().wishList).length;

        if (cleanPriority < 1) {
          cleanPriority = 1;
        } else if (cleanPriority > maxPriority) {
          cleanPriority = maxPriority;
        }

        const { priority: originPriority } = get().wishList[id];

        if (cleanPriority === originPriority) {
          return;
        }

        const newWishList = Object.entries(get().wishList).reduce(
          (acc, [curId, wishInfo]) => {
            if (id === curId) {
              return {
                ...acc,
                [curId]: {
                  ...wishInfo,
                  priority: cleanPriority,
                },
              };
            }

            if (
              originPriority < wishInfo.priority &&
              wishInfo.priority <= cleanPriority
            ) {
              return {
                ...acc,
                [curId]: {
                  ...wishInfo,
                  priority: wishInfo.priority - 1,
                },
              };
            }

            if (
              cleanPriority <= wishInfo.priority &&
              wishInfo.priority < originPriority
            ) {
              return {
                ...acc,
                [curId]: {
                  ...wishInfo,
                  priority: wishInfo.priority + 1,
                },
              };
            }

            return {
              ...acc,
              [curId]: wishInfo,
            };
          },
          {} as WishListState['wishList']
        );

        set({ wishList: newWishList });
      },
    }),
    {
      name: 'wish-list',
    }
  )
);
