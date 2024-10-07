import { createStore } from 'zustand/vanilla';
import { devtools } from 'zustand/middleware';
import { nanoid } from 'nanoid';

import {
  ToastData,
  Placement,
  ToastGroupContext,
  ToastOptions,
  ToastStatus,
} from './types';

export type ToastState = {
  toasts: Map<string, ToastData>;
  groups: Map<Placement, ToastGroupContext>;
};

export type ToastActions = {
  createToast: <T extends Record<string, any>>(toast: ToastOptions & T) => void;
  pauseToast: (id: string) => void;
  resumeToast: (id: string) => void;
  destroyToast: (id: string) => void;
  addGroup: (placement: Placement, groupContext: ToastGroupContext) => void;
  removeGroup: (placement: Placement) => void;
  isPlacementAssigned: (placement: Placement) => boolean;
  getToastsByGroupId: (id: string) => ToastData[];
  getToastsByToasterId: <T extends Record<string, any>>(
    id: string
  ) => ToastData<T>[];
  getRootNodeByPlacement: (placement: Placement) => HTMLElement | null;
  pauseToastsByGroupId: (id: string) => void;
  resumeToasts: () => void;
  pauseToastsByPlacement: (placement: Placement) => void;
  setToastDestroying: (id: string) => void;
};

export type ToastStore = ToastState & ToastActions;

export const defaultInitState: ToastState = {
  toasts: new Map(),
  groups: new Map(),
};

export const createToastStore = (initState: ToastState = defaultInitState) => {
  return createStore<ToastStore>()(
    devtools(
      (set, get) => ({
        ...initState,
        createToast: (toast) => {
          const createdAt = Date.now();
          const id = nanoid();
          let timer: NodeJS.Timeout | null = null;
          let status: ToastStatus = 'visible:persist';
          let isPaused = true;

          if (toast.duration !== null) {
            status = 'visible';
            isPaused = false;
            timer = setTimeout(() => {
              get().setToastDestroying(id);
            }, toast.duration);
          }

          set((state) => {
            const updatedToasts = new Map(state.toasts).set(id, {
              ...toast,
              id,
              createdAt,
              isPaused,
              timer,
              status,
            });

            return { toasts: updatedToasts };
          });
        },
        pauseToast: (id) => {
          const { toasts } = get();

          const toast = toasts.get(id);

          if (!toast || toast.status !== 'visible') {
            return;
          }

          if (!toast.timer) {
            return;
          }

          clearTimeout(toast.timer);
          const remaining = toast.duration! - (Date.now() - toast.createdAt);

          const updatedToasts = new Map(toasts).set(id, {
            ...toast,
            isPaused: true,
            duration: remaining,
            status: 'visible:persist',
          });

          set(() => {
            return { toasts: updatedToasts };
          });
        },
        resumeToast: (id) => {
          const { toasts } = get();
          const toast = toasts.get(id);

          if (
            !toast ||
            toast.status !== 'visible:persist' ||
            toast.duration === null
          ) {
            return;
          }

          const timer = setTimeout(() => {
            get().setToastDestroying(id);
          }, toast.duration);
          const createdAt = Date.now();

          set(() => {
            const updatedToasts = new Map(toasts).set(id, {
              ...toast,
              createdAt,
              isPaused: false,
              timer,
              status: 'visible',
            });

            return { toasts: updatedToasts };
          });
        },
        destroyToast: (id) => {
          let { toasts } = get();

          const toast = toasts.get(id);

          if (!toast || toast.status !== 'destroying') {
            return;
          }

          if (toast.timer) {
            clearTimeout(toast.timer);
          }

          const updatedToasts = new Map(toasts);
          updatedToasts.delete(id);

          set(() => {
            return { toasts: updatedToasts };
          });
        },
        addGroup: (placement, groupContext) => {
          set((state) => {
            const isPlacementAssigned = state.groups.has(placement);

            if (isPlacementAssigned) {
              return state;
            }

            const updatedPlacements = new Map(state.groups);
            updatedPlacements.set(placement, groupContext);
            return { groups: updatedPlacements };
          });
        },
        removeGroup: (placement) => {
          set((state) => {
            const isPlacementAssigned = state.groups.has(placement);

            if (!isPlacementAssigned) {
              return state;
            }

            const updatedPlacements = new Map(state.groups);
            updatedPlacements.delete(placement);
            return { groups: updatedPlacements };
          });
        },
        isPlacementAssigned: (placement) => {
          const { groups } = get();
          return groups.has(placement);
        },
        getToastsByGroupId: (id: string) => {
          const { groups } = get();
          const placement = Array.from(groups.entries()).find(
            ([, value]) => value.id === id
          );

          if (!placement) {
            return [];
          }

          const [placementKey] = placement;

          const { toasts } = get();
          return Array.from(toasts.values()).filter(
            (toast) => toast.placement === placementKey
          );
        },
        getToastsByToasterId: <T extends Record<string, any>>(
          id: string
        ): ToastData<T>[] => {
          const { toasts } = get();
          const filteredToasts = Array.from(toasts.values()).filter(
            (toast): toast is ToastData<T> => toast.toasterId === id
          );

          return filteredToasts;
        },
        getRootNodeByPlacement: (placement) => {
          const { groups } = get();
          const group = groups.get(placement);

          if (!group) {
            return null;
          }

          return group.node;
        },
        pauseToastsByGroupId: (id) => {
          const toasts = get().getToastsByGroupId(id);

          toasts.forEach((toast) => {
            get().pauseToast(toast.id);
          });
        },
        resumeToasts: () => {
          const { toasts } = get();

          toasts.forEach((toast) => {
            get().resumeToast(toast.id);
          });
        },
        pauseToastsByPlacement: (placement) => {
          const { toasts } = get();

          toasts.forEach((toast) => {
            if (toast.placement === placement) {
              get().pauseToast(toast.id);
            }
          });
        },
        setToastDestroying: (id) => {
          const { toasts } = get();
          const toast = toasts.get(id);

          if (
            !toast ||
            (toast.status !== 'visible' && toast.status !== 'visible:persist')
          ) {
            return;
          }

          if (toast.timer) {
            clearTimeout(toast.timer);
          }

          const timer = setTimeout(() => {
            get().destroyToast(id);
          }, toast.removeDelay);

          const updatedToasts = new Map(toasts).set(id, {
            ...toast,
            timer,
            status: 'destroying',
            isPaused: false,
          });

          set(() => {
            return { toasts: updatedToasts };
          });
        },
      }),
      { name: 'ToastStore' }
    )
  );
};
