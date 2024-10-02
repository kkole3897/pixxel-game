import { createStore } from 'zustand/vanilla';
import { devtools } from 'zustand/middleware';
import { nanoid } from 'nanoid';

import { ToastData, Placement, ToastGroupContext, ToastOptions } from './types';

export type ToastState = {
  toasts: Map<string, ToastData>;
  groups: Map<Placement, ToastGroupContext>;
  timers: Map<string, NodeJS.Timeout>;
};

export type ToastActions = {
  addToast: (toast: ToastOptions) => void;
  pauseToast: (id: string) => void;
  resumeToast: (id: string) => void;
  removeToast: (id: string) => void;
  addGroup: (placement: Placement, groupContext: ToastGroupContext) => void;
  removeGroup: (placement: Placement) => void;
  isPlacementAssigned: (placement: Placement) => boolean;
  getToastsByGroupId: (id: string) => ToastData[];
  getToastsByToasterId: (id: string) => ToastData[];
  getRootNodeByPlacement: (placement: Placement) => HTMLElement | null;
};

export type ToastStore = ToastState & ToastActions;

export const defaultInitState: ToastState = {
  toasts: new Map(),
  groups: new Map(),
  timers: new Map(),
};

export const createToastStore = (initState: ToastState = defaultInitState) => {
  return createStore<ToastStore>()(
    devtools(
      (set, get) => ({
        ...initState,
        addToast: (toast) => {
          const createdAt = Date.now();
          const id = nanoid();

          set((state) => {
            const updatedToasts = new Map(state.toasts).set(id, {
              ...toast,
              id,
              createdAt,
            });

            let timers = state.timers;

            if (toast.duration !== null) {
              const timer = setTimeout(() => {
                get().removeToast(id);
              }, toast.duration);

              const updatedTimers = new Map(timers).set(id, timer);
              timers = updatedTimers;
            }

            return { toasts: updatedToasts, timers };
          });
        },
        pauseToast: (id) => {
          set((state) => {
            const timer = state.timers.get(id);

            if (!timer) {
              return state;
            }

            clearTimeout(timer);
            const toast = state.toasts.get(id);

            let toasts = state.toasts;

            if (toast && toast.duration !== null) {
              const remaining = toast.duration - (Date.now() - toast.createdAt);

              toasts = new Map(state.toasts);
              toasts.set(id, { ...toast, duration: remaining });
            }

            const updatedTimers = new Map(state.timers);
            updatedTimers.delete(id);
            return { timers: updatedTimers };
          });
        },
        resumeToast: (id) => {
          const { toasts } = get();
          const toast = toasts.get(id);

          if (!toast) {
            return;
          }

          if (toast.duration === null) {
            return;
          }

          const timer = setTimeout(() => {
            get().removeToast(id);
          }, toast.duration);

          set((state) => {
            const updatedTimers = new Map(state.timers);
            updatedTimers.set(id, timer);

            const toast = state.toasts.get(id);
            let toasts = state.toasts;

            if (toast && toast.duration !== null) {
              const createdAt = Date.now();

              toasts = new Map(state.toasts);
              toasts.set(id, { ...toast, createdAt });
            }

            return { timers: updatedTimers, toasts };
          });
        },
        removeToast: (id) => {
          set((state) => {
            const hasToast = state.toasts.has(id);

            if (!hasToast) {
              return state;
            }

            const updatedToasts = new Map(state.toasts);
            updatedToasts.delete(id);

            const timer = state.timers.get(id);

            if (timer !== undefined) {
              clearTimeout(timer);
              const updatedTimers = new Map(state.timers);
              updatedTimers.delete(id);
              return { toasts: updatedToasts, timers: updatedTimers };
            }

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
        getToastsByToasterId: (id: string) => {
          const { toasts } = get();
          const filteredToasts = Array.from(toasts.values()).filter(
            (toast) => toast.toasterId === id
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
      }),
      { name: 'ToastStore' }
    )
  );
};
