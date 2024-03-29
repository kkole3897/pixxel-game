import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type WishListState = {
  games: { [K: string]: { priority: number } };
};

export type WishListActions = {
  addGame: (id: string) => void;
  isExisted: (id: string) => boolean;
  removeGame: (id: string) => void;
  toggleGame: (id: string) => void;
  changePriority: (id: string, priority: number) => void;
};

export type WishListStore = WishListState & WishListActions;

export const useWishListStore = create(
  persist<WishListStore>(
    (set, get) => ({
      games: {},
      isExisted: (id: string) => Object.keys(get().games).includes(id),
      addGame: (id: string) => {
        const priority = Object.keys(get().games).length + 1;

        set({ games: { ...get().games, [id]: { priority } } });
      },
      removeGame: (id: string) => {
        if (!get().games || !get().games[id]) {
          return;
        }

        const {
          [id]: { priority },
          ..._remains
        } = get().games;

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

        set({ games: remains });
      },
      toggleGame: (id: string) => {
        const isIncluded = Object.keys(get().games).includes(id);

        if (isIncluded) {
          get().removeGame(id);
          return;
        }

        get().addGame(id);

        return {};
      },
      changePriority: (id: string, priority: number) => {
        if (!get().games[id]) {
          return;
        }

        let cleanPriority = priority;
        const maxPriority = Object.keys(get().games).length;

        if (cleanPriority < 1) {
          cleanPriority = 1;
        } else if (cleanPriority > maxPriority) {
          cleanPriority = maxPriority;
        }

        const { priority: originPriority } = get().games[id];

        if (cleanPriority === originPriority) {
          set({ games: { ...get().games } });
        }

        const newGames = Object.entries(get().games).reduce(
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
          {} as WishListState['games']
        );

        set({ games: newGames });
      },
    }),
    {
      name: 'wish-list',
    }
  )
);
